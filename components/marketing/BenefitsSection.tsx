import { Box, Grid, Paragraph, Text } from '@modulz/design-system';
import { MarketingCaption } from './MarketingCaption';
import { Section, Container, Heading, Em } from '@radix-ui/themes';

export const BenefitsSection = () => {
  return (
    <Section
      size={{ initial: '2', md: '3' }}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
        <Box css={{ mb: '$7' }}>
          <MarketingCaption mb="1">Why Radix Primitives</MarketingCaption>
          <Heading as="h2" size="7">
            Spend less time on
            <br />
            undifferentiated work
          </Heading>
        </Box>

        <Grid columns={{ '@initial': 1, '@bp1': 2 }} gap={{ '@initial': 4, '@bp1': 7, '@bp2': 9 }}>
          <Box>
            <Text
              as="h3"
              size="6"
              css={{ fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.3, mb: '$2' }}
            >
              Save time. Ship faster.
            </Text>
            <Paragraph css={{ mb: '$5' }}>
              It takes <Em>a lot</Em> of time to develop and maintain robust UI components, and it's
              mostly undifferentiated work. Building on top of Radix components will save you time
              and money, so you can ship a better product faster.
            </Paragraph>
          </Box>

          <Box>
            <Text
              as="h3"
              size="6"
              css={{ fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.3, mb: '$2' }}
            >
              Focus on your product
            </Text>
            <Paragraph css={{ mb: '$5' }}>
              It’s no secret that robust UI components are tricky to build. Nailing accessibility
              details and complex logic sucks time away from product feature development. With
              Radix, you can focus on your unique engineering challenges instead.
            </Paragraph>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};
