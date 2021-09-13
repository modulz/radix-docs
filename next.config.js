const fs = require('fs');
const path = require('path');
const glob = require('glob');
const compareVersions = require('compare-versions');
const readingTime = require('reading-time');
const withPlugins = require('next-compose-plugins');
const withVideos = require('next-videos');
const withOptimizedImages = require('next-optimized-images');

const withTM = require('next-transpile-modules')(['@modulz/design-system']);

module.exports = withPlugins([withTM, withOptimizedImages, withVideos], {
  // Next.js config
  async redirects() {
    return [
      {
        source: '/primitives/docs/:slug*',
        destination: '/docs/primitives/:slug*',
        permanent: true,
      },
      {
        source: '/docs/primitives',
        destination: '/docs/primitives/overview/introduction',
        permanent: false,
      },
      {
        source: '/docs/primitives/utilities/aspect-ratio/:slug*',
        destination: '/docs/primitives/components/aspect-ratio/:slug*',
        permanent: false,
      },
      {
        source: '/docs/primitives/utilities/label/:slug*',
        destination: '/docs/primitives/components/label/:slug*',
        permanent: false,
      },
      {
        source: '/design/docs-system',
        destination: '/design/docs-system/overview/introduction',
        permanent: false,
      },
      {
        source: '/docs/colors',
        destination: '/docs/colors/getting-started/installation',
        permanent: false,
      },
    ];
  },

  // Generate URL rewrites for components and utilities
  // So navigating to /tooltip rewrites to /tooltip/[latestVersion]
  async rewrites() {
    const DATA_PATH = path.join(__dirname, 'data');

    function getLatestVersionFromPath(fromPath) {
      const paths = glob.sync(`${DATA_PATH}/${fromPath}/**/*.mdx`);
      const components = {};

      paths.forEach((p) => {
        const [name, version] = p
          .replace(DATA_PATH, '')
          .replace(`/${fromPath}/`, '')
          .replace('.mdx', '')
          .split('/');

        components[name] = [...(components[name] || [version]), version];
      });

      const latest = Object.entries(components).reduce((acc, curr) => {
        const [name, versions] = curr;
        const [latestVersion] = versions.sort(compareVersions).reverse();
        acc[name] = latestVersion;
        return acc;
      }, {});

      return latest;
    }

    function createRewrites(latestVersionMap, url) {
      return [...Object.entries(latestVersionMap)].reduce((redirects, curr) => {
        const [name, version] = curr;
        redirects.push({ source: `${url}${name}`, destination: `${url}${name}/${version}` });
        return redirects;
      }, []);
    }

    return [
      ...createRewrites(
        getLatestVersionFromPath('primitives/components'),
        '/docs/primitives/components/'
      ),
      ...createRewrites(
        getLatestVersionFromPath('primitives/utilities'),
        '/docs/primitives/utilities/'
      ),
      ...createRewrites(
        getLatestVersionFromPath('design-system/components'),
        '/design-docs/system/components/'
      ),
    ];
  },
});
