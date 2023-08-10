import { Box, Flex, Theme, Text, Button, Section } from '@radix-ui/themes';
import * as React from 'react';
import NextLink from 'next/link';
import Head from 'next/head';
import { ThemesHeader } from '@components/ThemesHeader';
import { ExampleThemesDashboard } from '@components/ExampleThemesDashboard';
import { MagicCurtain } from '@components/MagicCurtain';
import { ExampleThemesEcommerce } from '@components/ExampleThemesEcommerce';
import { ExampleThemesMusicApp } from '@components/ExampleThemesMusicApp';
import { MobileMenuProvider } from '@components/MobileMenu';
import { useTheme } from 'next-themes';
import { SerifHeading } from '@components/SerifHeading';
import { CodeBlock } from '@components/CodeBlock';
import { SyntaxSchemeProvider } from '@components/Pre';
import { ThemesHeroLayout } from '@components/ThemesHeroLayout';
import { ThemesMobileMenu } from '@components/ThemesMobileMenu';
import { GridIcon } from '@radix-ui/react-icons';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';

export default function ThemesHome() {
  const { resolvedTheme } = useTheme();
  const inverted = resolvedTheme === 'dark' ? 'light' : 'dark';

  return (
    <MobileMenuProvider>
      <TitleAndMetaTags
        title="Themes – Radix UI"
        description="An open source component library for building modern React apps that helps you build faster and makes it easy to create beautiful, accessible interfaces that are a breeze to maintain."
        image="themes.png"
      />

      <Head>
        <meta name="theme-color" content="#FDFCFD" />
      </Head>

      <ThemesMobileMenu />

      <MagicCurtain.Root>
        <MagicCurtain.Item defaultVisibility="visible">
          <Theme hasBackground accentColor="indigo" grayColor="slate">
            <Box height="0">
              <ThemesHeader ghost />
            </Box>

            <ThemesHeroLayout.Root>
              <ThemesHeroLayout.Background>
                <BackgroundImage style={indigoBackgroundImageAccents} id="1" />
              </ThemesHeroLayout.Background>

              <ThemesHeroLayout.Main>
                <MainContent codeBlockScheme="indigo" />
              </ThemesHeroLayout.Main>

              <ThemesHeroLayout.Showcase>
                <Theme className="radix-themes-example" hasBackground={false}>
                  <ExampleThemesDashboard align="start" />
                </Theme>
              </ThemesHeroLayout.Showcase>

              <ControlsWrapper>
                <MagicCurtain.MirrorControls />
              </ControlsWrapper>
            </ThemesHeroLayout.Root>
          </Theme>
        </MagicCurtain.Item>

        <MagicCurtain.Item>
          <Theme hasBackground accentColor="teal" grayColor="gray" appearance={inverted}>
            <Box height="0">
              <ThemesHeader ghost />
            </Box>

            <ThemesHeroLayout.Root>
              <ThemesHeroLayout.Background>
                <BackgroundImage style={tealBackgroundImageAccents} id="2" />
              </ThemesHeroLayout.Background>

              <ThemesHeroLayout.Main>
                <MainContent codeBlockScheme="teal" />
              </ThemesHeroLayout.Main>

              <ThemesHeroLayout.Showcase>
                <Theme className="radix-themes-example" accentColor="gray" hasBackground={false}>
                  <ExampleThemesEcommerce align="start" />
                </Theme>
              </ThemesHeroLayout.Showcase>

              <ControlsWrapper>
                <MagicCurtain.MirrorControls />
              </ControlsWrapper>
            </ThemesHeroLayout.Root>
          </Theme>
        </MagicCurtain.Item>

        <MagicCurtain.Item>
          <Theme hasBackground accentColor="red" grayColor="slate">
            <Box height="0">
              <ThemesHeader ghost />
            </Box>

            <ThemesHeroLayout.Root>
              <ThemesHeroLayout.Background>
                <BackgroundImage style={redBackgroundImageAccents} id="3" />
              </ThemesHeroLayout.Background>

              <ThemesHeroLayout.Main>
                <MainContent codeBlockScheme="red" />
              </ThemesHeroLayout.Main>

              <ThemesHeroLayout.Showcase>
                <Theme className="radix-themes-example" hasBackground={false}>
                  <ExampleThemesMusicApp align="start" />
                </Theme>
              </ThemesHeroLayout.Showcase>

              <ControlsWrapper>
                <MagicCurtain.MirrorControls />
              </ControlsWrapper>
            </ThemesHeroLayout.Root>
          </Theme>
        </MagicCurtain.Item>

        <MagicCurtain.Item>
          <Theme hasBackground accentColor="indigo" grayColor="slate" appearance={inverted}>
            <Box height="0">
              <ThemesHeader ghost />
            </Box>

            <ThemesHeroLayout.Root>
              <ThemesHeroLayout.Background>
                <BackgroundImage style={indigoBackgroundImageAccents} id="4" />
              </ThemesHeroLayout.Background>

              <ThemesHeroLayout.Main>
                <MainContent />
              </ThemesHeroLayout.Main>

              <ThemesHeroLayout.Showcase>
                <Theme className="radix-themes-example" hasBackground={false}>
                  <ExampleThemesDashboard align="start" />
                </Theme>
              </ThemesHeroLayout.Showcase>

              <ControlsWrapper>
                <MagicCurtain.MirrorControls />
              </ControlsWrapper>
            </ThemesHeroLayout.Root>
          </Theme>
        </MagicCurtain.Item>

        <MagicCurtain.Item>
          <Theme hasBackground accentColor="cyan" grayColor="gray">
            <Box height="0">
              <ThemesHeader ghost />
            </Box>

            <ThemesHeroLayout.Root>
              <ThemesHeroLayout.Background>
                <BackgroundImage style={tealBackgroundImageAccents} id="5" />
              </ThemesHeroLayout.Background>

              <ThemesHeroLayout.Main>
                <MainContent codeBlockScheme="teal" />
              </ThemesHeroLayout.Main>

              <ThemesHeroLayout.Showcase>
                <Theme
                  className="radix-themes-example"
                  accentColor="gray"
                  grayColor="gray"
                  hasBackground={false}
                >
                  <ExampleThemesEcommerce align="start" />
                </Theme>
              </ThemesHeroLayout.Showcase>

              <ControlsWrapper>
                <MagicCurtain.MirrorControls />
              </ControlsWrapper>
            </ThemesHeroLayout.Root>
          </Theme>
        </MagicCurtain.Item>

        <MagicCurtain.Item>
          <Theme hasBackground accentColor="red" grayColor="slate" appearance={inverted}>
            <Box height="0">
              <ThemesHeader ghost />
            </Box>

            <ThemesHeroLayout.Root>
              <ThemesHeroLayout.Background>
                <BackgroundImage style={redBackgroundImageAccents} id="6" />
              </ThemesHeroLayout.Background>

              <ThemesHeroLayout.Main>
                <MainContent codeBlockScheme="red" />
              </ThemesHeroLayout.Main>

              <ThemesHeroLayout.Showcase>
                <Theme className="radix-themes-example" hasBackground={false}>
                  <ExampleThemesMusicApp align="start" />
                </Theme>
              </ThemesHeroLayout.Showcase>

              <ControlsWrapper>
                <MagicCurtain.MirrorControls />
              </ControlsWrapper>
            </ThemesHeroLayout.Root>
          </Theme>
        </MagicCurtain.Item>

        <Theme appearance="light" hasBackground={false} asChild>
          <ControlsWrapper style={{ zIndex: 100, color: 'transparent' }}>
            <MagicCurtain.Controls
              images={[
                'https://ph-files.imgix.net/e3c8c9b2-f0cf-41b0-9d68-1fc683afa6dd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=387&h=220&fit=max&dpr=2',
                'https://ph-files.imgix.net/1818db79-e35e-4b86-93af-b3fc0904326f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=387&h=220&fit=max&dpr=2',
                'https://ph-files.imgix.net/5e1a6ef4-adee-472b-9bd1-782454bc2287.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=387&h=220&fit=max&dpr=2',
                'https://ph-files.imgix.net/1818db79-e35e-4b86-93af-b3fc0904326f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=387&h=220&fit=max&dpr=2',
                'https://ph-files.imgix.net/e3c8c9b2-f0cf-41b0-9d68-1fc683afa6dd.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=387&h=220&fit=max&dpr=2',
                'https://ph-files.imgix.net/1818db79-e35e-4b86-93af-b3fc0904326f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=387&h=220&fit=max&dpr=2',
              ]}
            />
          </ControlsWrapper>
        </Theme>
      </MagicCurtain.Root>
    </MobileMenuProvider>
  );
}

const ControlsWrapper = ({ children, ...props }: React.ComponentPropsWithoutRef<typeof Box>) => {
  return (
    <Box position="fixed" bottom="0" left="0" ml="5" mb="5" {...props}>
      <Text weight="bold" size="2" style={{ pointerEvents: 'none' }}>
        Explore examples
      </Text>
      {children}
    </Box>
  );
};

const MainContent = ({
  codeBlockScheme = 'indigo',
}: {
  codeBlockScheme?: React.ComponentProps<typeof SyntaxSchemeProvider>['scheme'];
}) => (
  <Box>
    <Section size={{ initial: '2', md: '3', lg: '2' }} pb={{ initial: '4', lg: '7' }}>
      <Box>
        <Box display={{ lg: 'none' }}>
          <SerifHeading mb="3">
            Start building
            <br />
            your app now
          </SerifHeading>
        </Box>
        <Box display={{ initial: 'none', lg: 'block' }}>
          <SerifHeading
            mb="4"
            style={{ lineHeight: 0.9, '--heading-font-size-adjust': 1.3 } as React.CSSProperties}
          >
            Start building
            <br />
            your app now
          </SerifHeading>
        </Box>
      </Box>

      <Text size={{ initial: '4', xs: '5' }}>
        <Text as="p" mb="5" style={{ maxWidth: 500 }} color="gray">
          An open source component library optimized for fast development, easy maintenance,
          and accessibility. Just import and go—no configuration required.
        </Text>

        <Box mb="5">
          <SyntaxSchemeProvider scheme={codeBlockScheme}>
            <CodeBlock language="jsx" value={codeExample} style={codeStyles} />
          </SyntaxSchemeProvider>
        </Box>
      </Text>

      <Flex mb="6" gap="4" direction={{ initial: 'column', xs: 'row' }}>
        <NextLink href="/themes/docs/overview/getting-started" passHref>
          <Button
            asChild
            size={{ initial: '3', xs: '4' }}
            color="gray"
            highContrast
            style={{ flexGrow: 1 }}
          >
            <a>
              Get started
              <svg
                width="14"
                height="14"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentcolor"
                style={{ opacity: 1, marginRight: -3 }}
              >
                <path d="M6.39205 11.6023L5.36932 10.5909L8.92045 7.03977H0V5.5625H8.92045L5.36932 2.01705L6.39205 1L11.6932 6.30114L6.39205 11.6023Z" />
              </svg>
            </a>
          </Button>
        </NextLink>
        <NextLink href="/themes/playground" passHref>
          <Button
            asChild
            size={{ initial: '3', xs: '4' }}
            variant="soft"
            highContrast
            style={{ flexGrow: 1 }}
          >
            <a>
              <GridIcon width="18" height="18" style={{ marginTop: 1 }} />
              Playground
            </a>
          </Button>
        </NextLink>
      </Flex>
    </Section>
  </Box>
);

const codeStyles = {
  fontSize: '0.7em',
  padding: '0.75em 1em',
  lineHeight: 'var(--line-height-3)',
  '--border': 'var(--gray-a5)',
  '--background': 'var(--color-panel-solid)',
  maxWidth: 500,
};

const indigoBackgroundImageAccents = {
  '--color-background-image-accent-1': 'var(--indigo-7)',
  '--color-background-image-accent-2': 'var(--violet-6)',
  '--color-background-image-accent-3': 'var(--purple-9)',
  '--color-background-image-accent-4': 'var(--blue-5)',
  '--color-background-image-accent-5': 'var(--slate-1)',
  '--color-background-image-accent-6': 'var(--crimson-6)',
  '--color-background-image-accent-7': 'var(--indigo-5)',
} as React.CSSProperties;

const tealBackgroundImageAccents = {
  '--color-background-image-accent-1': 'var(--teal-7)',
  '--color-background-image-accent-2': 'var(--mint-7)',
  '--color-background-image-accent-3': 'var(--green-9)',
  '--color-background-image-accent-4': 'var(--sky-5)',
  '--color-background-image-accent-5': 'var(--crimson-3)',
  '--color-background-image-accent-6': 'var(--mint-6)',
  '--color-background-image-accent-7': 'var(--teal-5)',
} as React.CSSProperties;

const redBackgroundImageAccents = {
  '--color-background-image-accent-1': 'var(--crimson-7)',
  '--color-background-image-accent-2': 'var(--red-5)',
  '--color-background-image-accent-3': 'var(--red-9)',
  '--color-background-image-accent-4': 'var(--red-2)',
  '--color-background-image-accent-5': 'var(--mauve-1)',
  '--color-background-image-accent-6': 'var(--crimson-3)',
  '--color-background-image-accent-7': 'var(--red-7)',
} as React.CSSProperties;

const codeExample = `
import '@radix-ui/themes/styles.css';
import { Theme, Button } from '@radix-ui/themes'

export default () => (
  <Theme>
    <Button>Hey 👋</Button>
  </Theme>
)
`.trim();

const BackgroundImage = ({
  style,
  id = '0',
  ...props
}: React.ComponentProps<'svg'> & { id: string }) => (
  <svg
    width="2560"
    height="1920"
    viewBox="0 0 2560 1920"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity: 0.5, ...style }}
    {...props}
  >
    <g>
      <path
        d="M-119.809 -1055.99L859.027 -684.98C915.435 -663.6 955.626 -624.994 968.519 -579.807L1129.49 -15.6245L1860.47 -241.727C1919.02 -259.836 1985.68 -257.939 2042.09 -236.559L3020.93 134.453C3124.79 173.822 3164.97 266.777 3110.66 342.073L2850.06 703.385C2827.36 734.857 2790.34 759.666 2745.28 773.604L1467.45 1168.86L1748.58 2154.16C1758.67 2189.52 1751.28 2226.32 1727.72 2258.12L1361.75 2752.01L203.258 2312.91C146.85 2291.53 106.659 2252.92 93.7664 2207.73L-67.2076 1643.55L-798.184 1869.65C-856.73 1887.76 -923.398 1885.87 -979.806 1864.48L-2138.3 1425.38L-1787.63 925.687C-1765.05 893.507 -1727.57 868.111 -1681.77 853.942L-405.167 459.07L-686.568 -527.183C-696.491 -561.961 -689.511 -598.157 -666.811 -629.629L-406.21 -990.941C-351.902 -1066.24 -223.676 -1095.36 -119.809 -1055.99Z"
        fill={`url(#paint0_radial_37_453-${id})`}
      />
      <path
        d="M885.9 -99.2158L1864.74 271.796C1921.14 293.177 1961.34 331.783 1974.23 376.97L2135.2 941.152L2866.18 715.049C2924.72 696.94 2991.39 698.837 3047.8 720.218L4026.64 1091.23C4130.5 1130.6 4170.68 1223.55 4116.37 1298.85L3855.77 1660.16C3833.07 1691.63 3796.05 1716.44 3750.99 1730.38L2473.16 2125.63L2754.29 3110.94C2764.38 3146.29 2756.99 3183.09 2733.43 3214.9L2367.46 3708.79L1208.97 3269.68C1152.56 3248.3 1112.37 3209.7 1099.48 3164.51C816.824 2173.87 747.087 1929.46 319.141 429.593C309.218 394.815 316.198 358.619 338.898 327.147L599.499 -34.1647C653.807 -109.461 782.033 -138.585 885.9 -99.2158Z"
        fill={`url(#paint1_radial_37_453-${id})`}
      />
      <path
        d="M1597.13 169.784L2575.97 540.796C2632.38 562.177 2672.57 600.783 2685.46 645.97L2846.44 1210.15L3577.41 984.049C3635.96 965.94 3702.63 967.837 3759.03 989.218L4737.87 1360.23C4841.74 1399.6 4881.91 1492.55 4827.61 1567.85L4567 1929.16C4544.3 1960.63 4507.28 1985.44 4462.22 1999.38L3184.4 2394.63L3465.53 3379.94C3475.61 3415.29 3468.23 3452.09 3444.66 3483.9L3078.69 3977.79L1920.2 3538.68C1863.79 3517.3 1823.6 3478.7 1810.71 3433.51L1649.74 2869.33L918.759 3095.43C860.213 3113.54 793.545 3111.64 737.138 3090.26L-421.356 2651.15L-70.6875 2151.46C-48.1049 2119.28 -10.63 2093.89 35.1782 2079.72L1311.78 1684.85L1030.38 698.593C1020.45 663.815 1027.43 627.619 1050.13 596.147L1310.73 234.835C1365.04 159.539 1493.27 130.415 1597.13 169.784Z"
        fill={`url(#paint2_radial_37_453-${id})`}
      />
      <path
        d="M3059.26 767.932L3310.25 1618.16C3324.72 1667.15 3315.74 1727.88 3285.79 1783.6L2911.89 2479.3L3514.51 2558.36C3562.77 2564.69 3599.15 2596.78 3613.62 2645.77L3864.61 3496C3891.25 3586.22 3837.41 3706.98 3744.37 3765.74L3297.91 4047.66C3259.03 4072.22 3217.48 4082.97 3180.34 4078.1L2126.89 3939.89L1473.9 5154.88C1450.47 5198.48 1415.9 5235.81 1376.24 5260.35L760.412 5641.34L463.348 4635.06C448.884 4586.06 457.863 4525.33 487.81 4469.61L861.713 3773.92L259.094 3694.86C210.828 3688.53 174.448 3656.44 159.984 3607.44L-137.08 2601.17L474.823 2206.89C514.228 2181.5 556.514 2170.3 594.278 2175.25L1646.71 2313.32L2300.33 1097.17C2323.38 1054.28 2357.22 1017.43 2396.11 992.876L2842.57 710.953C2935.61 652.202 3032.62 677.712 3059.26 767.932Z"
        fill={`url(#paint4_radial_37_453-${id})`}
      />
    </g>
    <defs>
      <filter
        id={`filter0_f_37_453-${id}`}
        x="213.223"
        y="-839.851"
        width="5601.16"
        height="4153.55"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur stdDeviation="82" result="effect1_foregroundBlur_37_453" />
      </filter>
      <radialGradient
        id={`paint0_radial_37_453-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(-804.109 -2036.8) rotate(64.9401) scale(6436.87 6304.81)"
      >
        <stop stopColor="var(--color-background)" />
        <stop offset="0.0833333" stopColor="var(--color-background-image-accent-1)" />
        <stop offset="0.364583" stopColor="var(--color-background-image-accent-2)" />
        <stop offset="0.658041" stopColor="var(--color-background)" />
        <stop offset="0.798521" stopColor="var(--color-background-image-accent-3)" />
        <stop offset="0.942708" stopColor="var(--color-background)" />
        <stop offset="1" stopColor="var(--color-background)" />
      </radialGradient>
      <radialGradient
        id={`paint1_radial_37_453-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(201.6 -1080.02) rotate(64.9401) scale(6436.87 6304.81)"
      >
        <stop stopColor="var(--color-background)" />
        <stop offset="0.0833333" stopColor="var(--color-background-image-accent-4)" />
        <stop offset="0.333803" stopColor="var(--color-background-image-accent-5)" />
        <stop offset="0.658041" stopColor="var(--color-background)" />
        <stop offset="0.798521" stopColor="var(--color-background-image-accent-3)" />
        <stop offset="0.942708" stopColor="var(--color-background)" />
        <stop offset="1" stopColor="var(--color-background)" />
      </radialGradient>
      <radialGradient
        id={`paint2_radial_37_453-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(912.834 -811.021) rotate(64.9401) scale(6436.87 6304.81)"
      >
        <stop stopColor="var(--color-background)" />
        <stop offset="0.140625" stopColor="var(--color-background-image-accent-6)" />
        <stop offset="0.333803" stopColor="var(--color-background-image-accent-7)" />
        <stop offset="0.658041" stopColor="var(--color-background)" />
        <stop offset="0.798521" stopColor="var(--color-background-image-accent-3)" />
        <stop offset="0.942708" stopColor="var(--color-background)" />
        <stop offset="1" stopColor="var(--color-background)" />
      </radialGradient>
      <radialGradient
        id={`paint3_radial_37_453-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(1711.41 -1639.11) rotate(64.9401) scale(6436.87 6304.81)"
      >
        <stop stopColor="var(--color-background)" />
        <stop offset="0.0833333" stopColor="var(--color-background-image-accent-1)" />
        <stop offset="0.333803" stopColor="var(--color-background-image-accent-5)" />
        <stop offset="0.658041" stopColor="var(--color-background)" />
        <stop offset="0.798521" stopColor="var(--color-background-image-accent-3)" />
        <stop offset="0.942708" stopColor="var(--color-background)" />
        <stop offset="1" stopColor="var(--color-background)" />
      </radialGradient>
      <radialGradient
        id={`paint4_radial_37_453-${id}`}
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(3479.06 -623.459) rotate(113.028) scale(8332.26 4870.62)"
      >
        <stop stopColor="var(--color-background)" />
        <stop offset="0.0833333" stopColor="var(--color-background-image-accent-1)" />
        <stop offset="0.333803" stopColor="var(--color-background-image-accent-5)" />
        <stop offset="0.658041" stopColor="var(--color-background)" />
        <stop offset="0.798521" stopColor="var(--color-background-image-accent-3)" />
        <stop offset="0.942708" stopColor="var(--color-background)" />
        <stop offset="1" stopColor="var(--color-background)" />
      </radialGradient>
    </defs>
  </svg>
);
