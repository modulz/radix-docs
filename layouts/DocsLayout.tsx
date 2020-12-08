import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import {
  Text,
  Box,
  Link,
  Separator,
  Heading,
  Flex,
  Subheading,
  Subtitle,
  Container,
} from '@modulz/design-system';
import { MDXComponents } from '../components/MDXComponents';
import { FrontMatter } from '../types';
import { TitleAndMetaTags } from '../components/TitleAndMetaTags';
import { getPostById } from '../utils/allPosts';
import { pages as primitivesPages } from '../utils/primitives';
import { pages as designSystemPages } from '../utils/designSystem';
import { useProductType } from '../utils/useProductType';
import { ScrollArea } from '../components/ScrollArea';
import { CheckIcon } from '@modulz/radix-icons';

type LayoutProps = {
  children: React.ReactNode;
  frontMatter: FrontMatter;
};

export default function DocsLayout({ children, frontMatter }: LayoutProps) {
  const router = useRouter();
  const productType = useProductType();

  let productPages;
  if (productType === 'primitives') {
    productPages = primitivesPages;
  }
  if (productType === 'designSystem') {
    productPages = designSystemPages;
  }

  const currentPageId = router.pathname.substr(1);
  const currentPageIndex = productPages.findIndex((page) => page.id === currentPageId);
  const previous = productPages[currentPageIndex - 1];
  const next = productPages[currentPageIndex + 1];

  return (
    <MDXProvider components={MDXComponents}>
      <TitleAndMetaTags title={`${frontMatter.title} — Radix UI`} poster={frontMatter.poster} />

      <Box
        css={{
          display: 'none',
          bp3: {
            display: 'block',
            width: '250px',
            flexShrink: 0,
            position: 'fixed',
            right: 0,
            order: 1,
            maxHeight: 'calc(100vh - (var(--space-8) + var(--space-5)))',
          },
        }}
      >
        <QuickNav />
      </Box>

      <Container size="2">
        <Text as="h1" size="8" css={{ fontWeight: 500, mb: '$1', lineHeight: '40px' }}>
          {frontMatter.title}
        </Text>

        <Subtitle css={{ mt: '$2' }}>{frontMatter.description}</Subtitle>

        <Hero />

        {Boolean(frontMatter.features) && (
          <Overview version={frontMatter.version} name={frontMatter.name}>
            <FeatureList>
              {frontMatter.features.map((feature, i) => (
                <Feature key={i}>{feature}</Feature>
              ))}
            </FeatureList>
          </Overview>
        )}

        <Box>{children}</Box>

        {Boolean(frontMatter.relatedIds) && (
          <>
            <Separator size="2" css={{ my: '$9', mx: 'auto' }} />
            <Box>
              <Text
                as="h3"
                size="2"
                css={{
                  mb: '$3',
                  fontWeight: 500,
                  textAlign: 'center',
                  textTransform: 'uppercase',
                }}
              >
                Related
              </Text>

              <Flex css={{ my: '$4', flexDirection: 'column', gap: '$4' }}>
                {frontMatter.relatedIds.map((relatedPostId) => {
                  const post = getPostById(relatedPostId);
                  return (
                    <Box
                      as="a"
                      key={post.id}
                      href={`/${post.id}`}
                      css={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      <Box>
                        <Text
                          as="h6"
                          size="4"
                          css={{
                            fontWeight: 500,
                            mb: '$1',
                          }}
                        >
                          {post.title}
                        </Text>
                        <Text
                          as="p"
                          size="3"
                          css={{
                            color: '$hiContrast',
                          }}
                        >
                          {post.description}
                        </Text>
                      </Box>
                    </Box>
                  );
                })}
              </Flex>
            </Box>
          </>
        )}

        <Separator size="2" css={{ my: '$9', mx: 'auto' }} />

        {(previous || next) && (
          <Flex
            aria-label="Pagination navigation"
            css={{
              justifyContent: 'space-between',
              my: '$9',
            }}
          >
            {previous && (
              <Box>
                <NextLink href={`/${previous.id}`} passHref>
                  <Box
                    as="a"
                    aria-label={`Previous page: ${previous.title}`}
                    css={{
                      color: '$blue900',
                      textDecoration: 'none',
                      alignItems: 'center',
                    }}
                  >
                    <Box css={{ mb: '$2' }}>
                      <Text size="3" css={{ color: '$gray900' }}>
                        Previous
                      </Text>
                    </Box>
                    <Text size="5" css={{ color: 'inherit' }}>
                      {previous.title}
                    </Text>
                  </Box>
                </NextLink>
              </Box>
            )}
            {next && (
              <Box css={{ ml: 'auto' }}>
                <NextLink href={`/${next.id}`} passHref>
                  <Box
                    as="a"
                    aria-label={`Previous page: ${next.title}`}
                    css={{
                      color: '$blue900',
                      textDecoration: 'none',
                      textAlign: 'right',
                    }}
                  >
                    <Box css={{ mb: '$2' }}>
                      <Text size="3" css={{ color: '$gray900' }}>
                        Next
                      </Text>
                    </Box>
                    <Text size="5" css={{ color: 'inherit' }}>
                      {next.title}
                    </Text>
                  </Box>
                </NextLink>
              </Box>
            )}
          </Flex>
        )}
      </Container>
    </MDXProvider>
  );
}

function QuickNav() {
  const [headings, setHeadings] = React.useState<HTMLHeadingElement[]>([]);

  React.useEffect(() => {
    const headingElements: HTMLHeadingElement[] = Array.from(
      document.querySelectorAll('[data-heading]')
    );

    setHeadings(headingElements);
  }, []);

  if (headings.length === 0) {
    return null;
  }

  // Function to determine the Heading Level based on `nodeName` (H2, H3, etc)
  const getLevel = (nodeName) => {
    const startLevel = 3;
    return Number(nodeName.replace('H', '')) - startLevel;
  };

  return (
    <ScrollArea>
      <Box css={{ px: '$5' }}>
        <Subheading css={{ mb: '$3' }}>Quick nav</Subheading>
        <Box
          as="ul"
          css={{
            listStyleType: 'none',
            p: 0,
            m: 0,
          }}
        >
          {headings.map(({ id, nodeName, innerText }) => {
            return (
              <Box as="li" key={id} css={{ py: '$1' }}>
                <Link
                  variant="subtle"
                  href={`#${id}`}
                  css={{
                    color: '$gray800',
                    display: 'inline-flex',
                    marginLeft: `calc(${getLevel(nodeName)} * 25px)`,
                  }}
                >
                  <Text
                    size="3"
                    css={{
                      color: 'inherit',
                      lineHeight: '23px',
                    }}
                  >
                    {innerText}
                  </Text>
                </Link>
              </Box>
            );
          })}
        </Box>
      </Box>
    </ScrollArea>
  );
}

const Overview = ({ children, version, name, ...props }) => (
  <Flex {...props}>
    <Box css={{ flex: 1, mr: '$5' }}>{children}</Box>
    <Box css={{ flex: 0, width: '30%' }}>
      <Text size="2" color="gray" css={{ fontFamily: '$mono', mb: '$4' }}>
        Version: v{version}
      </Text>
      <Box css={{ mb: '$2' }}>
        <Link
          variant="blue"
          href={`https://github.com/modulz/interop-ui/tree/main/packages/react/${name}/src`}
          target="_blank"
        >
          <Text size="2">View on Github</Text>
        </Link>
      </Box>
      <Box css={{ mb: '$2' }}>
        <Link
          variant="blue"
          href={`https://www.npmjs.com/package/@interop-ui/react-${name}`}
          target="_blank"
        >
          <Text size="2">View on npm</Text>
        </Link>
      </Box>
    </Box>
  </Flex>
);

const FeatureList = ({ children, ...props }) => (
  <Box {...props}>
    <Heading css={{ mb: '$6' }}>Features</Heading>
    <Box as="ul" css={{ p: 0, m: 0 }}>
      {children}
    </Box>
  </Box>
);

const Feature = ({ children, ...props }) => (
  <Flex as="li" {...props} css={{ mt: '$4' }}>
    <Box
      css={{
        position: 'relative',
        top: '-2px',
        width: '25px',
        height: '25px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$green200',
        borderRadius: '50%',
        color: '$green900',
        marginRight: '15px',
        flexShrink: 0,
      }}
    >
      <CheckIcon />
    </Box>
    <Text size="3" css={{ lineHeight: '23px' }}>
      {children}
    </Text>
  </Flex>
);

const Hero = () => (
  <div
    style={{
      height: 300,
      background:
        'linear-gradient(330deg, rgba(2,0,36,1) 0%, hsl(272,53%,50%) 0%, hsl(226,68%,56%) 100%)',
      marginLeft: -65,
      marginRight: -65,
      marginBottom: 45,
      marginTop: 45,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
    }}
  >
    <div
      style={{
        height: '2px',
        backgroundColor: 'white',
        borderRadius: '9999px',
        flexShrink: 0,
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '50%',
          flexShrink: 0,
          width: '16px',
          height: '16px',
          marginTop: -7,
        }}
      ></div>
    </div>
  </div>
);
