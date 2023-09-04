import { Box, Card, Flex, Heading, Text } from '@radix-ui/themes';

export function ThemesUnofficialTailwindPlugin() {
  return (
    <Card asChild size="3">
      <a href="https://github.com/viktorbonino/radix-themes-tw" target="_blank">
        <Flex align="start" gap="5">
          <Flex>
            <svg
              width="45"
              height="45"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.5 3C5.63333 3 4.46667 4 4 5.99999C4.7 4.99999 5.51667 4.625 6.45 4.87499C6.98252 5.01763 7.36314 5.43155 7.78443 5.88974C8.47074 6.63613 9.26506 7.49999 11 7.49999C12.8667 7.49999 14.0333 6.49999 14.5 4.5C13.8 5.49999 12.9833 5.87499 12.05 5.62499C11.5175 5.48235 11.1369 5.06844 10.7156 4.61025C10.0293 3.86386 9.23494 3 7.5 3ZM4 7.49999C2.13333 7.49999 0.966667 8.49998 0.5 10.5C1.2 9.49998 2.01667 9.12498 2.95 9.37498C3.48252 9.51762 3.86314 9.93154 4.28443 10.3897C4.97074 11.1361 5.76506 12 7.5 12C9.36667 12 10.5333 11 11 8.99998C10.3 9.99998 9.48333 10.375 8.55 10.125C8.01748 9.98234 7.63686 9.56843 7.21557 9.11023C6.52926 8.36385 5.73494 7.49999 4 7.49999Z"
                stroke="#000000"
                stroke-linejoin="round"
              />
            </svg>
          </Flex>
          <Box>
            <Heading as="h2" size="3">
              Tailwind preset
            </Heading>
            <Text as="p" size="3" color="gray">
              Configures your Tailwind setup with Radix Themes variables, by Viktor Bonino.
            </Text>
          </Box>
        </Flex>
      </a>
    </Card>
  );
}
