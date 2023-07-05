import React from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import { RemoveScroll } from 'react-remove-scroll';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { MDXProvider, components } from '@components/MDXComponents';
import { QuickNav } from '@components/QuickNav';
import { OldVersionNote } from '@components/OldVersionNote';
import { getAllFrontmatter, getAllVersionsFromPath, getMdxBySlug } from '@lib/mdx';
import { getPackageData, formatBytes } from '@lib/bundlephobia';

import type { Frontmatter } from 'types/frontmatter';
import { Box } from '@radix-ui/themes';

type Doc = {
  frontmatter: Frontmatter;
  code: any;
};

export default function ComponentsDoc({ frontmatter, code }: Doc) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <div data-algolia-lvl0 style={{ display: 'none' }}>
        Components
      </div>

      <TitleAndMetaTags
        title={`${frontmatter.metaTitle} – Radix UI`}
        description={frontmatter.metaDescription}
        image={frontmatter.metaImage}
      />

      {frontmatter.version !== frontmatter.versions?.[0] && (
        <OldVersionNote
          name={frontmatter.metaTitle}
          href={`/primitives/docs/components/${frontmatter.slug.replace(frontmatter.version, '')}`}
        />
      )}

      <MDXProvider frontmatter={frontmatter}>
        <Component components={components as any} />
      </MDXProvider>

      <Box
        asChild
        // Components that hide the scrollbar (like Dialog) add padding to
        // account for the scrollbar gap to avoid layout jank. This does not
        // work for position: fixed elements. Since we use react-remove-scroll
        // under the hood for those primitives, we can add this helper class
        // provided by that lib to deal with that for the QuickNav.
        // https://github.com/radix-ui/website/issues/64
        // https://github.com/theKashey/react-remove-scroll#positionfixed-elements
        className={RemoveScroll.classNames.zeroRight}
        position="fixed"
        right="0"
        bottom="0"
        display={{ initial: 'none', lg: 'block' }}
        style={{
          width: 250,
          flexShrink: 0,
          zIndex: 1,
          top: 'var(--space-9)',
        }}
      >
        <aside>
          <QuickNav key={frontmatter.slug} />
        </aside>
      </Box>
    </>
  );
}

export async function getStaticPaths() {
  const frontmatters = getAllFrontmatter('primitives/components');

  return {
    paths: frontmatters.map((frontmatter) => ({
      params: { slug: frontmatter.slug.replace('primitives/components/', '').split('/') },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { frontmatter, code } = await getMdxBySlug(
    'primitives/components/',
    context.params.slug.join('/')
  );
  const [componentName, componentVersion] = context.params.slug;

  const { gzip } = await getPackageData(frontmatter.name, componentVersion);

  const extendedFrontmatter = {
    ...frontmatter,
    version: componentVersion,
    versions: getAllVersionsFromPath(`primitives/components/${componentName}`),
    gzip: typeof gzip === 'number' ? formatBytes(gzip) : null,
  };

  return { props: { frontmatter: extendedFrontmatter, code } };
}
