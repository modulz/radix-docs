const fs = require('fs');
const path = require('path');
const compareVersions = require('compare-versions');
const readingTime = require('reading-time');
const withPlugins = require('next-compose-plugins');
const withVideos = require('next-videos');
const withOptimizedImages = require('next-optimized-images');
const withMdxEnhanced = require('next-mdx-enhanced');

const withTM = require('next-transpile-modules')(['@modulz/design-system']);

module.exports = withPlugins(
  [
    withTM,
    withMdxEnhanced({
      layoutPath: 'layouts',
      defaultLayout: true,
      remarkPlugins: [require('remark-autolink-headings'), require('remark-slug')],
      rehypePlugins: [],
      extendFrontMatter: {
        process: (mdxContent, frontMatter) => {
          const { __resourcePath } = frontMatter;
          const isPrimitive = __resourcePath.includes('primitives/');
          const isComponent = __resourcePath.includes('/components/');
          const isUtility = __resourcePath.includes('/utilities/');

          const id = makeIdFromPath(__resourcePath);
          const newFrontMatter = {
            id,
            wordCount: mdxContent.split(/\s+/g).length,
            readingTime: readingTime(mdxContent),
          };

          if (isPrimitive && (isComponent || isUtility)) {
            const packagePath = path.join(__dirname, 'pages', makeIdFromPath(__resourcePath), '..');
            const [version] = id.split('/').reverse();
            newFrontMatter.version = version;
            newFrontMatter.versions = getAllVersionsFromPath(packagePath);
          }
          return newFrontMatter;
        },
      },
    })({
      pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    }),
    withOptimizedImages,
    withVideos,
  ],
  {
    // Next.js config
    async redirects() {
      return [
        {
          source: '/',
          destination: '/primitives/docs/overview/introduction',
          permanent: false,
        },
        {
          source: '/primitives',
          destination: '/primitives/docs/overview/introduction',
          permanent: false,
        },
        {
          source: '/primitives/docs',
          destination: '/primitives/docs/overview/introduction',
          permanent: false,
        },
        {
          source: '/design-system/docs',
          destination: '/design-system/docs/overview/introduction',
          permanent: false,
        },
      ];
    },

    // Generate URL rewrites for components and utilities
    // So navigating to /tooltip rewrites to /tooltip/[latestVersion]
    async rewrites() {
      const isDirectory = (fileName) => fs.lstatSync(fileName).isDirectory();
      const getPaths = (dir) =>
        fs
          .readdirSync(dir)
          .map((file) => path.join(dir, file))
          .filter(isDirectory);

      const getPathOfLatestVersion = (dir) =>
        dir.map((currDir) => {
          const [lastVersion] = fs
            .readdirSync(currDir)
            .sort(compareVersions)
            .map((file) => path.join(currDir, file))
            .filter(isDirectory)
            .reverse();
          return lastVersion;
        });

      const primitivesDirectory = path.join(__dirname, 'pages/primitives/docs/components');
      const primitivesPaths = getPaths(primitivesDirectory);
      const latestPrimitivesPaths = getPathOfLatestVersion(primitivesPaths);

      const utilitiesDirectory = path.join(__dirname, 'pages/primitives/docs/utilities');
      const utilitiesPaths = getPaths(utilitiesDirectory);
      const latestUtilitiesPaths = getPathOfLatestVersion(utilitiesPaths);

      return [...latestPrimitivesPaths, ...latestUtilitiesPaths].reduce(
        (redirects, paths, index) => {
          const [, destination] = paths.split('/pages');
          const [, source] = path.join(paths, '..').split('/pages');
          redirects.push({ source, destination });
          return redirects;
        },
        []
      );
    },
  }
);

/**
 *
 * @param {string} resourcePath
 *
 * Make an ID from a path
 *
 * - use it as the URL slug
 * - support having an `index.mdx` in a folder (use folder name as page name)
 *
 */
function makeIdFromPath(resourcePath) {
  return resourcePath.replace('.mdx', '').replace('/index', '');
}

function getAllVersionsFromPath(path) {
  if (!fs.existsSync(path)) return [];
  return fs.readdirSync(path).sort(compareVersions).reverse();
}
