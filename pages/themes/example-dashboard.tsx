import * as React from 'react';
import { Flex, Heading, Separator, Theme, Link, Box } from '@radix-ui/themes';
import { ExampleThemesDashboard } from '@components/ExampleThemesDashboard';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import Head from 'next/head';

export default function ExamplePage() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <TitleAndMetaTags title="Dashboard Example Layout – Radix Themes" image="themes.png" />
      <Theme accentColor="indigo" grayColor="mauve" className="radix-themes-default-fonts">
        <Box p="9" minWidth="fit-content">
          <Box mx="auto" width="fit-content">
            <Flex align="center" direction="column">
              <Heading align="center" mb="2">
                Example layout built with Radix Themes
              </Heading>
              <Flex asChild align="center" gap="6px">
                <Link
                  size="2"
                  color="gray"
                  target="_blank"
                  href="https://github.com/radix-ui/website/blob/main/components/ExampleThemesDashboard.tsx"
                >
                  Source code
                  <ExternalLinkIcon />
                </Link>
              </Flex>
              <Separator size="2" my="8" />
            </Flex>
            <ExampleThemesDashboard />
          </Box>
        </Box>
      </Theme>
    </>
  );
}
