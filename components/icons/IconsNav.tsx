import { Box, Heading, Text } from '@radix-ui/themes';
import styles from './IconsNav.module.css';

interface IconsNavProps {
  routes: {
    label: string;
    pages: {
      title: string;
      href: string;
    }[];
  }[];
}

export const IconsNav = ({ routes }: IconsNavProps) => {
  return (
    <Box pt="4" px="3" pb={{ initial: '5', sm: '9' }}>
      {routes.map((section) => (
        <Box key={section.label} mb="4">
          <Box py="2" px="3">
            <Heading as="h4" size="2">
              {section.label}
            </Heading>
          </Box>

          {section.pages.map((page) => (
            <a
              key={page.href}
              href={page.href}
              className={styles.IconsNavItem}
              target="_blank"
              rel="noopener"
            >
              <Text size="2">{page.title}</Text>
            </a>
          ))}
        </Box>
      ))}
    </Box>
  );
};