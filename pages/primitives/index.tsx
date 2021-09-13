import React from 'react';
import NextLink from 'next/link';
import {
  Section,
  Container,
  Heading,
  Link,
  Avatar,
  Flex,
  Button,
  Paragraph,
  Separator,
  Box,
  Grid,
  Text,
} from '@modulz/design-system';
import { ArrowBottomRightIcon, ArrowRightIcon, ExternalLinkIcon } from '@radix-ui/react-icons';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';

export default function ColorsHome() {
  return (
    <Box css={{ py: '$4', mt: '$2' }}>
      <TitleAndMetaTags
        title="Colors — Radix UI"
        description="An open-source color system for designing beautiful, accessible websites and apps."
        image="colors.png"
      />
      <Section
        size={{
          '@initial': '2',
          '@bp1': '3',
        }}
        css={{
          pt: '$3',
          pb: '$7',
          '@bp2': {
            pt: '$6',
            pb: '$8',
          },
        }}
      >
        <Container size="3">
          <Heading size="4" css={{ mb: '$3' }}>
            Save time, improve a11y, focus on differentiated product
          </Heading>
          <Paragraph
            size="2"
            as="p"
            css={{
              mb: '$6',
              color: '$sage11',
              '@bp2': {
                mb: '$7',
              },
            }}
          >
            Radix Primitives is an open-source UI component library for building high-quality,
            accessible, React-based design systems and web apps.
          </Paragraph>
          <Flex justify={{ '@initial': 'start' }} gap="5" css={{ mt: '$7' }}>
            <NextLink href="/docs/colors" passHref>
              <Button
                as="a"
                variant="blue"
                css={{
                  height: '$6',
                  fontSize: '$3',
                  borderRadius: '9999px',
                  px: '$3',
                  bc: 'white',
                  boxShadow:
                    '-15px 0 30px -10px $colors$orangeA7, 0 0 30px -10px $colors$pinkA7, 15px 0 30px -10px $colors$violetA7',
                  cursor: 'pointer',
                  color: 'black',
                  gap: '$2',
                  transition: 'all 200ms ease',
                  '&:hover': {
                    boxShadow:
                      '-15px 0 30px -10px $colors$orangeA8, 0 0 30px -10px $colors$pinkA8, 15px 0 30px -10px $colors$violetA8',
                  },
                  '&:active': {
                    bc: 'white',
                    boxShadow:
                      '-15px 0 20px -10px $colors$orangeA8, 0 0 20px -10px $colors$pinkA8, 15px 0 20px -10px $colors$violetA8',
                  },
                  '&:focus': {
                    boxShadow:
                      '-15px 0 30px -10px $colors$orangeA7, 0 0 30px -10px $colors$pinkA7, 15px 0 30px -10px $colors$violetA7, inset 0 0 0 1px $colors$pinkA7, 0 0 0 1px $colors$pinkA7',
                  },
                }}
              >
                Install Primitives
                <ArrowRightIcon />
              </Button>
            </NextLink>
            <Button
              as="a"
              variant="blue"
              href="https://github.com/radix-ui/colors"
              target="_blank"
              css={{
                height: '$6',
                fontSize: '$3',
                borderRadius: '9999px',
                px: '$3',
                bc: 'transparent',
                boxShadow: 'none',
                cursor: 'pointer',
                color: '$sage11',
                gap: '$2',
                '&:hover': {
                  bc: '$sageA5',
                  boxShadow: 'none',
                },
                '&:focus': {
                  boxShadow: 'inset 0 0 0 1px $colors$sky7, 0 0 0 1px $colors$sky7',
                },
              }}
            >
              Read Case Studies
              <ExternalLinkIcon />
            </Button>
          </Flex>

          <Flex gap="5">
            <Box
              css={{
                height: 400,
                width: 400,
                background: 'linear-gradient($colors$crimson4, $colors$plum4)',
                mt: '$8',
                borderRadius: '$3',
              }}
            >
              <Text size="3">The Primitive examples go sliding across weeeeeeeeeee!</Text>
            </Box>
            <Box
              css={{
                height: 400,
                width: 400,
                background: 'linear-gradient($colors$violet4, $colors$blue4)',
                mt: '$8',
                borderRadius: '$3',
              }}
            >
              <Text size="3">The Primitive examples go sliding across weeeeeeeeeee!</Text>
            </Box>
            <Box
              css={{
                height: 400,
                width: 400,
                background: 'linear-gradient($colors$lime4, $colors$cyan4)',
                mt: '$8',
                borderRadius: '$3',
              }}
            >
              <Text size="3">The Primitive examples go sliding across weeeeeeeeeee!</Text>
            </Box>
          </Flex>
        </Container>
      </Section>

      <Section
        size={{
          '@initial': '2',
          '@bp1': '3',
        }}
        css={{
          pt: '$3',
          pb: '$7',
          '@bp2': {
            pt: '$6',
            pb: '$8',
          },
        }}
      >
        <Container size="3">
          <Text size="3" as="h2" css={{ mb: '$2', color: '$teal11', fontWeight: 500 }}>
            Robust af
          </Text>
          <Heading size="3" css={{ mb: '$3' }}>
            So, you think you can build a dropdown?
          </Heading>
          <Grid columns="3" gap="7">
            <Box>
              <Heading size="1">WAI-ARIA compliant</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                Radix Primitives follow the WAI-ARIA guidelines, implementing correct semantics and
                behaviors for our components.
              </Text>
            </Box>
            <Box>
              <Heading size="1">Keyboard navigation</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                Radix Primitives provide keyboard support for components where users expect to use
                a keyboard or other input devices.
              </Text>
            </Box>
            <Box>
              <Heading size="1">Collision-detection</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                Radix Primitives provide keyboard support for components where users expect to use
                a keyboard or other input devices.
              </Text>
            </Box>
            <Box>
              <Heading size="1">Focus management</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                Out of the box, Primitives provide sensible focus management defaults, which can be
                further customized in your app.
              </Text>
            </Box>
            <Box>
              <Heading size="1">Screen reader tested</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                We test Primitives with commonly used assistive technologies, looking out for
                practical issues that AT users may experience.
              </Text>
            </Box>
            <Box>
              <Heading size="1">Accessible labelling</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                We include abstractions to make labelling custom controls simple, so that all users
                can have equal access to your app.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Section>

      <Section
        size={{
          '@initial': '2',
          '@bp1': '3',
        }}
        css={{
          pt: '$3',
          pb: '$7',
          '@bp2': {
            pt: '$6',
            pb: '$8',
          },
        }}
      >
        <Container size="3">
          <Text size="3" as="h2" css={{ mb: '$2', color: '$teal11', fontWeight: 500 }}>
            Case Studies
          </Text>
          <Heading size="3" css={{ mb: '$3' }}>
            Powering some of the best design systems and products.
          </Heading>
          <NextLink href="/docs/colors" passHref>
            <Link variant="blue" href="https://github.com/radix-ui/colors">
              <Text size="4">More case studies</Text>
            </Link>
          </NextLink>

          <Grid columns="2" gap="6">
            <Box
              css={{
                p: '$6',
                bc: '$panel',
                borderRadius: '$4',
                mt: '$8',
                boxShadow: '0 30px 40px -50px $colors$grayA9, 0 15px 60px -35px $colors$grayA9',
              }}
            >
              <Flex align="center" justify="between" css={{ mb: '$4' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                >
                  <g clip-path="url(#clip0)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.8799 13.0105V25.5214C13.0977 25.5214 13.2409 25.4741 13.4364 25.3625L23.4543 19.638C23.8497 19.4113 24.011 19.0603 24.011 18.6044V6.99648C24.011 6.76778 23.9628 6.63096 23.8517 6.43994L13.2003 12.4583C13.0022 12.5715 12.8799 12.7823 12.8799 13.0105V13.0105ZM18.4453 20.1945C18.4453 20.5125 18.3261 20.6716 18.0478 20.8306L14.7085 22.7387C14.4701 22.8977 14.152 22.8183 14.152 22.5002V13.993C14.152 13.7654 14.3522 13.4705 14.5495 13.3569L22.1822 8.98414C22.3942 8.86213 22.5796 9.05755 22.5796 9.30217V13.8341C22.5796 14.0689 22.4689 14.2801 22.2616 14.3906L18.8429 16.2192C18.6356 16.3298 18.4453 16.5408 18.4453 16.7757V20.1945Z"
                      fill="#11181C"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.74902 18.6043V6.99643C1.74902 6.53992 1.98873 6.10983 2.38507 5.88334L12.0848 0.397413C12.2938 0.286664 12.6413 0.238403 12.8799 0.238403C13.1185 0.238403 13.4864 0.297473 13.675 0.397415L23.2952 5.88334C23.4855 5.99581 23.7441 6.25486 23.8518 6.43989L13.1979 12.4824C12.9997 12.5956 12.8799 12.8106 12.8799 13.0389V25.5214C12.6621 25.5214 12.4394 25.474 12.2438 25.3624L2.46458 19.7175C2.06822 19.4909 1.74902 19.0608 1.74902 18.6043V18.6043ZM3.18014 9.3021V13.834C3.18014 14.1519 3.25965 14.311 3.57767 14.47L6.91693 16.3782C7.23495 16.5372 7.31446 16.7757 7.31446 17.0142V20.1945C7.31446 20.5124 7.39397 20.6715 7.71199 20.8305L11.0513 22.7387C11.3692 22.8977 11.6078 22.8182 11.6078 22.5001V13.993C11.6078 13.7545 11.5283 13.5159 11.2103 13.357L3.73668 9.06359C3.49816 8.90458 3.18014 8.98408 3.18014 9.3021V9.3021ZM16.2192 3.89568L13.2774 5.56531C13.0389 5.72433 12.7209 5.72433 12.4824 5.56531L9.54063 3.89568C9.34699 3.78624 9.09854 3.7868 8.90458 3.89568L5.2473 5.96284C4.92927 6.12186 4.92927 6.43989 5.2473 6.59889L12.5618 10.8127C12.7576 10.9248 13.0022 10.9248 13.1979 10.8127L20.5125 6.59889C20.751 6.43989 20.8306 6.12186 20.5125 5.96284L16.8552 3.89568C16.6612 3.7868 16.4128 3.78624 16.2192 3.89568V3.89568Z"
                      fill="#11181C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="25.76" height="25.76" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <NextLink href="/docs/colors" passHref>
                  <Link variant="blue" href="https://github.com/radix-ui/colors">
                    <Text>Read case study</Text>
                  </Link>
                </NextLink>
              </Flex>
              <Text size="5" css={{ mb: '$3', lineHeight: '25px' }}>
                "We've been able to focus on building solid user experiences on top of Radix
                Primitives. With UI components, there are just too many angles and rabbit holes to
                cover for product teams that wish to move quickly.”
              </Text>
              <Flex align="center">
                <Avatar
                  src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                  alt="JD"
                  css={{ mr: '$2' }}
                />
                <Text size="2" css={{ color: '$slate11' }}>
                  Jane Doe, Engineering Lead at CodeSandbox
                </Text>
              </Flex>
            </Box>
            <Box
              css={{
                p: '$6',
                bc: '$panel',
                borderRadius: '$4',
                mt: '$8',
                boxShadow: '0 30px 40px -50px $colors$grayA9, 0 15px 60px -35px $colors$grayA9',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="25"
                viewBox="0 0 29 25"
                fill="none"
              >
                <path d="M14.0561 0L28.1121 24.6154H0L14.0561 0Z" fill="#11181C" />
              </svg>
              <Text size="5" css={{ mb: '$3', lineHeight: '25px' }}>
                We've been able to focus on building solid user experiences on top of Radix
                Primitives. With UI components, there are just too many angles and rabbit holes to
                cover for product teams that wish to move quickly.”
              </Text>
              <Flex align="center">
                <Avatar
                  src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg"
                  alt="JD"
                  css={{ mr: '$2' }}
                />
                <Text size="3" css={{ color: '$slate11' }}>
                  Paco, Engineering Lead at Vercel
                </Text>
              </Flex>
              <NextLink href="/docs/colors" passHref>
                <Link variant="blue" href="https://github.com/radix-ui/colors">
                  <Text>Read case study</Text>
                </Link>
              </NextLink>
            </Box>
          </Grid>
        </Container>
      </Section>

      <Section
        size={{
          '@initial': '2',
          '@bp1': '3',
        }}
        css={{
          pt: '$3',
          pb: '$7',
          '@bp2': {
            pt: '$6',
            pb: '$8',
          },
        }}
      >
        <Container size="2">
          <Flex align="center">
            <Box css={{ p: '$7' }}>
              <Text size="9" css={{ fontWeight: 500 }}>
                450k
              </Text>
              <Text size="3" css={{ color: '$slate11' }}>
                Monthly downloads
              </Text>
            </Box>
            <Separator size="2" orientation="vertical" />
            <Box css={{ p: '$7' }}>
              <Text size="9" css={{ fontWeight: 500 }}>
                1250
              </Text>
              <Text size="3" css={{ color: '$slate11' }}>
                Discord members
              </Text>
            </Box>
            <Separator size="2" orientation="vertical" />
            <Box css={{ p: '$7' }}>
              <Text size="9" css={{ fontWeight: 500 }}>
                1.3k
              </Text>
              <Text size="3" css={{ color: '$slate11' }}>
                Github stars
              </Text>
            </Box>
          </Flex>
        </Container>
      </Section>

      <Section
        size={{
          '@initial': '2',
          '@bp1': '3',
        }}
        css={{
          pt: '$3',
          pb: '$7',
          '@bp2': {
            pt: '$6',
            pb: '$8',
          },
        }}
      >
        <Container size="3">
          <Text size="3" as="h2" css={{ mb: '$2', color: '$teal11', fontWeight: 500 }}>
            Pain Points
          </Text>
          <Heading size="3" css={{ mb: '$3' }}>
            The main pain points
          </Heading>
          <Link variant="blue" href="https://github.com/radix-ui/colors">
            Documentation
          </Link>

          <Grid columns="3" gap="7">
            <Box>
              <Heading size="1">Save time and cost</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                Primitives are engineered for top performance and a tiny footprint. Shared
                functionality is done with internal utility packages, so common code isn’t
                duplicated in your final bundle.
              </Text>
            </Box>
            <Box>
              <Heading size="1">Focus on differentiated work</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                New components can be added alongside your existing code. No need to disrupt feature
                work with a huge rewrite – you can start small and add more primitives one by one.
              </Text>
            </Box>
            <Box>
              <Heading size="1">Inaccessible</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                Real-world examples, extensive API reference, accessibility details, and full
                TypeScript support. All components share a similar API, creating a consistent
                experience. You will love working with Radix Primitives.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Section>

      <Section
        size={{
          '@initial': '2',
          '@bp1': '3',
        }}
        css={{
          pt: '$3',
          pb: '$7',
          '@bp2': {
            pt: '$6',
            pb: '$8',
          },
        }}
      >
        <Container size="3">
          <Text size="3" as="h2" css={{ mb: '$2', color: '$teal11', fontWeight: 500 }}>
            a11y
          </Text>
          <Heading size="3" css={{ mb: '$3' }}>
            Accessbility
          </Heading>

          <Grid columns="3" gap="7">
            <Box>
              <Heading size="1">Save time and cost</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                Primitives are engineered for top performance and a tiny footprint. Shared
                functionality is done with internal utility packages, so common code isn’t
                duplicated in your final bundle.
              </Text>
            </Box>
            <Box>
              <Heading size="1">Focus on differentiated work</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                New components can be added alongside your existing code. No need to disrupt feature
                work with a huge rewrite – you can start small and add more primitives one by one.
              </Text>
            </Box>
            <Box>
              <Heading size="1">Inaccessible</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                Real-world examples, extensive API reference, accessibility details, and full
                TypeScript support. All components share a similar API, creating a consistent
                experience. You will love working with Radix Primitives.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Section>

      <Section
        size={{
          '@initial': '2',
          '@bp1': '3',
        }}
        css={{
          pt: '$3',
          pb: '$7',
          '@bp2': {
            pt: '$6',
            pb: '$8',
          },
        }}
      >
        <Container size="3">
          <Text size="3" as="h2" css={{ mb: '$2', color: '$teal11', fontWeight: 500 }}>
            Incremental adoption
          </Text>
          <Heading size="3" css={{ mb: '$3' }}>
            Easy to adopt and introduce to your dev team
          </Heading>
          <Link variant="blue" href="https://github.com/radix-ui/colors">
            Documentation
          </Link>

          <Grid columns="3" gap="7">
            <Box>
              <Heading size="1">Tiny bundles, fast page speed</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                Primitives are engineered for top performance and a tiny footprint. Shared
                functionality is done with internal utility packages, so common code isn’t
                duplicated in your final bundle.
              </Text>
            </Box>
            <Box>
              <Heading size="1">Easy incremental adoption</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                New components can be added alongside your existing code. No need to disrupt feature
                work with a huge rewrite – you can start small and add more primitives one by one.
              </Text>
            </Box>
            <Box>
              <Heading size="1">Full docs and TypeScript support</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                Real-world examples, extensive API reference, accessibility details, and full
                TypeScript support. All components share a similar API, creating a consistent
                experience. You will love working with Radix Primitives.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Section>

      <Section
        size={{
          '@initial': '2',
          '@bp1': '3',
        }}
        css={{
          pt: '$3',
          pb: '$7',
          '@bp2': {
            pt: '$6',
            pb: '$8',
          },
        }}
      >
        <Container size="3">
          <Text size="3" as="h2" css={{ mb: '$2', color: '$teal11', fontWeight: 500 }}>
            DX
          </Text>
          <Heading size="3" css={{ mb: '$3' }}>
            How awesome the developer experience is
          </Heading>
          <Link variant="blue" href="https://github.com/radix-ui/colors">
            Documentation
          </Link>

          <Grid columns="3" gap="7">
            <Box>
              <Heading size="1">Save time and cost</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                Primitives are engineered for top performance and a tiny footprint. Shared
                functionality is done with internal utility packages, so common code isn’t
                duplicated in your final bundle.
              </Text>
            </Box>
            <Box>
              <Heading size="1">Focus on differentiated work</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                New components can be added alongside your existing code. No need to disrupt feature
                work with a huge rewrite – you can start small and add more primitives one by one.
              </Text>
            </Box>
            <Box>
              <Heading size="1">Inaccessible</Heading>
              <Text size="3" css={{ color: '$slate11' }}>
                Real-world examples, extensive API reference, accessibility details, and full
                TypeScript support. All components share a similar API, creating a consistent
                experience. You will love working with Radix Primitives.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Section>

      <Section
        size={{
          '@initial': '2',
          '@bp1': '3',
        }}
        css={{
          pt: '$3',
          pb: '$7',
          '@bp2': {
            pt: '$6',
            pb: '$8',
          },
        }}
      >
        <Container size="3">
          <Text size="3" css={{ color: '$slate11' }}>
            "We've been able to focus on building solid user experiences on top of Radix Primitives.
            With UI components, there are just too many angles and rabbit holes to cover for product
            teams that wish to move quickly.”
          </Text>
        </Container>
      </Section>

      <Section
        size={{
          '@initial': '2',
          '@bp1': '3',
        }}
        css={{
          pt: '$3',
          pb: '$7',
          '@bp2': {
            pt: '$6',
            pb: '$8',
          },
        }}
      >
        <Container size="3">
          <Heading size="3">Community</Heading>
        </Container>
      </Section>

      <Section
        size={{
          '@initial': '2',
          '@bp1': '3',
        }}
        css={{
          pt: '$3',
          pb: '$7',
          '@bp2': {
            pt: '$6',
            pb: '$8',
          },
        }}
      >
        <Container size="3">
          <Heading size="3">Products</Heading>
        </Container>
      </Section>
    </Box>
  );
}
