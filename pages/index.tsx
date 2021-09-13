import React from 'react';
import NextLink from 'next/link';
import {
  Section,
  Link,
  Container,
  Heading,
  Paragraph,
  Box,
  Grid,
  Card,
  Text,
} from '@modulz/design-system';
import { RadixLogo } from '../components/RadixLogo';

export default function Home() {
  return (
    <Box>
      <Section
        size={{ '@initial': '2', '@bp2': '3' }}
        css={{
          pt: '$7',
          '@bp2': {
            pt: '$8',
          },
        }}
      >
        <Container size="2">
          <Heading size="4" css={{ mb: '$3', '@bp2': { ta: 'center' } }}>
            The foundation for your design system
          </Heading>
          <Paragraph
            size="2"
            as="p"
            css={{
              mb: '$6',
              color: '$sage11',
              '@bp2': {
                ta: 'center',
                mb: '$7',
              },
            }}
          >
            A suite of components, colors, and icons for building high-quality React design systems
            and web apps.
          </Paragraph>
          <Grid columns={{ '@bp2': '2' }} gap="5" css={{ mx: '-$4' }}>
            <NextLink href="/primitives" passHref>
              <Card as="a" variant="ghost">
                <Box css={{ p: '$4' }}>
                  <Heading css={{ fontWeight: 500, mb: '$2' }}>Primitives</Heading>
                  <Text variant="gray" css={{ lineHeight: '23px' }}>
                    Unstyled UI components with a focus on a11y and developer experience.
                  </Text>
                </Box>
              </Card>
            </NextLink>
            <NextLink href="/colors" passHref>
              <Card as="a" variant="ghost">
                <Box css={{ p: '$4' }}>
                  <Heading css={{ fontWeight: 500, mb: '$2' }}>Colors</Heading>
                  <Text variant="gray" css={{ lineHeight: '23px' }}>
                    A gorgeous, accessible color system.
                  </Text>
                </Box>
              </Card>
            </NextLink>
            <Card as="a" variant="ghost" href="https://icons.modulz.app/">
              <Box css={{ p: '$4' }}>
                <Heading css={{ fontWeight: 500, mb: '$2' }}>Icons</Heading>
                <Text variant="gray" css={{ lineHeight: '23px' }}>
                  250+ crisp 15×15 icons.
                </Text>
              </Box>
            </Card>
            <Card as="a" variant="ghost" href="https://stitches.dev/">
              <Box css={{ p: '$4' }}>
                <Heading css={{ fontWeight: 500, mb: '$2' }}>Stitches</Heading>
                <Text variant="gray" css={{ lineHeight: '23px' }}>
                  CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class
                  developer experience.
                </Text>
              </Box>
            </Card>
          </Grid>
        </Container>
      </Section>
    </Box>
  );
}
