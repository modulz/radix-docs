import React from 'react';
import NextLink from 'next/link';
import { Box, Text, Container, Heading } from '@radix-ui/themes';
import { styled, darkTheme, Flex, Link } from '@modulz/design-system';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';
import {
  Carousel,
  CarouselSlideList,
  CarouselSlide,
  CarouselNext,
  CarouselPrevious,
} from './Carousel';
import { PrimitivesHeroDialog } from './PrimitivesHeroDialog';
import { PrimitivesHeroPopover } from './PrimitivesHeroPopover';
import { PrimitivesHeroDropdownMenu } from './PrimitivesHeroDropdownMenu';
import { PrimitivesHeroSlider } from './PrimitivesHeroSlider';
import { PrimitivesHeroTabs } from './PrimitivesHeroTabs';
import { PrimitivesHeroScrollArea } from './PrimitivesHeroScrollArea';
import { PrimitivesHeroAccordion } from './PrimitivesHeroAccordion';
import { PrimitivesHeroRadioGroup } from './PrimitivesHeroRadioGroup';
import { PrimitivesHeroToggleGroup } from './PrimitivesHeroToggleGroup';
import { PrimitivesHeroSwitch } from './PrimitivesHeroSwitch';
import { useComposedRefs } from '@radix-ui/react-compose-refs';
import { Button, Section } from '@radix-ui/themes';
import { SerifHeading } from '@components/SerifHeading';

const DemoContainer = styled('div', {
  display: 'flex',
  position: 'relative',
  ai: 'center',
  jc: 'center',
  width: 300,
  height: 400,
  borderRadius: '$3',
  mb: '$2',

  // Content slightly above vertical center feels perfectly centred
  pb: '$3',

  // Can't select text because the carousel is draggable
  userSelect: 'none',
  cursor: 'default',

  '@bp1': {
    width: 400,
  },
});

const StyledFocusArea = styled('div', {
  outline: 0,
  borderRadius: '$3',
  '&:focus': {
    boxShadow: '0 0 0 2px $colors$blue8',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: 'none',
  },
});

const FocusArea = React.forwardRef<HTMLDivElement, React.ComponentProps<typeof StyledFocusArea>>(
  ({ children, onKeyDown, ...props }, forwardedRef) => {
    const ownRef = React.useRef<HTMLDivElement>(null);
    const composedRef = useComposedRefs(ownRef, forwardedRef);

    return (
      <StyledFocusArea
        {...props}
        data-focus-area
        ref={composedRef}
        tabIndex={0}
        onKeyDown={(event) => {
          onKeyDown?.(event);

          // Move focus inside the FocusArea when Enter or Spacebar is pressed
          if (
            event.target === event.currentTarget &&
            (event.key === 'Enter' || event.key === ' ')
          ) {
            // We are looking for something obviously focusable
            const tier1 =
              '[role="menu"], [role="dialog"] input, [role="dialog"] button, [tabindex="0"]';
            const tier2 = 'a, button, input, select, textarea';

            // Search for tier 1 and tier 2 elements, prioritising
            const elementToFocus = [
              event.currentTarget.querySelector<HTMLElement>(tier1),
              event.currentTarget.querySelector<HTMLElement>(tier2),
            ].filter((el) => Boolean(el))[0];

            if (elementToFocus) {
              event.preventDefault();
              elementToFocus.focus();
            }
          }

          // Move focus onto the FocusArea when Escape is pressed, unless the focus is currently inside a modal
          if (
            event.key === 'Escape' &&
            event.target instanceof HTMLElement &&
            event.target !== event.currentTarget &&
            event.target.closest('[role="dialog"], [role="menu"]') === null
          ) {
            event.currentTarget.focus();
          }
        }}
      >
        <div data-focus-area-entry />
        {children}
        <div data-focus-area-exit />
      </StyledFocusArea>
    );
  }
);

export const PrimitivesHero = () => {
  const lastUsedFocusArea = React.useRef<HTMLElement>(null);
  const isRoving = React.useRef(false);

  React.useEffect(() => {
    lastUsedFocusArea.current = document.querySelector('[data-focus-area]');
  }, []);

  const onFocusAreaFocus = React.useCallback((event: React.FocusEvent<HTMLElement>) => {
    lastUsedFocusArea.current = event.currentTarget;
  }, []);

  // We are implementing a simple roving tab index with some tweaks
  const onFocusAreaKeyDown = React.useCallback((event: React.KeyboardEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        const allAreas = Array.from(document.querySelectorAll<HTMLElement>('[data-focus-area]'));
        const thisIndex = allAreas.findIndex((el) => el === event.currentTarget);
        const nextIndex = Math.min(thisIndex + 1, allAreas.length - 1);
        const nextDemo = allAreas[nextIndex];
        isRoving.current = true;
        nextDemo.focus();
        (nextDemo as any).scrollIntoViewIfNeeded?.(true);
        lastUsedFocusArea.current = nextDemo;
        isRoving.current = false;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        const allAreas = Array.from(document.querySelectorAll<HTMLElement>('[data-focus-area]'));
        const thisIndex = allAreas.findIndex((el) => el === event.currentTarget);
        const prevIndex = Math.max(thisIndex - 1, 0); // thisIndex - 1 >= 0 ? thisIndex - 1 : allAreas.length - 1;
        const prevDemo = allAreas[prevIndex];
        isRoving.current = true;
        prevDemo.focus();
        (prevDemo as any).scrollIntoViewIfNeeded?.(true);
        lastUsedFocusArea.current = prevDemo;
        isRoving.current = false;
      }

      // Tab key press moves focus to the next element after the carousel
      if (event.key === 'Tab' && event.shiftKey === false) {
        const selector = 'a, button, input, select, textarea, [data-focus-area-exit]';
        const elements = Array.from(document.querySelectorAll<HTMLElement>(selector)).filter(
          (element) => element.tabIndex !== -1 || element.hasAttribute('data-focus-area-exit')
        );

        // Find last exit guard
        elements.reverse();
        const lastExit = elements.find((el) => el.matches('[data-focus-area-exit]'));
        elements.reverse();
        const lastExitIndex = elements.indexOf(lastExit);
        const nextElement = elements[lastExitIndex + 1];

        if (nextElement) {
          event.preventDefault();
          nextElement.focus();
        }
      }

      // Shift + Tab key press moves focus to the previous element before the carousel
      if (event.key === 'Tab' && event.shiftKey) {
        const selector = 'a, button, input, select, textarea, [data-focus-area-entry]';
        const elements = Array.from(document.querySelectorAll<HTMLElement>(selector)).filter(
          (element) => element.tabIndex !== -1 || element.hasAttribute('data-focus-area-entry')
        );

        // Find first entry guard
        const firstEntry = elements.find((el) => el.matches('[data-focus-area-entry]'));
        const firstEntryIndex = elements.indexOf(firstEntry);
        const prevElement = elements[firstEntryIndex - 1];

        if (prevElement) {
          event.preventDefault();
          prevElement.focus();
        }
      }
    }
  }, []);

  React.useEffect(() => {
    const tabListener = (event: KeyboardEvent) => {
      // Catch that Tab that lands into carousel contents from
      // elsewhere, and redirect focus to the nearest focus area
      if (
        event.key === 'Tab' &&
        event.shiftKey === false &&
        event.target instanceof HTMLElement &&
        !event.target.hasAttribute('data-focus-area')
      ) {
        const selector = 'a, button, input, select, textarea, [data-focus-area-entry]';
        const elements = Array.from(document.querySelectorAll<HTMLElement>(selector)).filter(
          (element) =>
            element.tabIndex !== -1 ||
            element === event.target ||
            element.hasAttribute('data-focus-area-entry')
        );

        // Find first entry guard
        const firstEntryIndex = elements.findIndex((el) =>
          el.hasAttribute('data-focus-area-entry')
        );

        if (elements.indexOf(event.target) + 1 === firstEntryIndex) {
          event.preventDefault();
          lastUsedFocusArea.current?.focus();
        }
      }

      // Catch that Shift + Tab that lands into carousel contents from
      // elsewhere, and redirect focus to the nearest focus area
      if (
        event.key === 'Tab' &&
        event.shiftKey &&
        event.target instanceof HTMLElement &&
        !event.target.hasAttribute('data-focus-area')
      ) {
        const selector = 'a, button, input, select, textarea, [data-focus-area-exit]';
        const elements = Array.from(document.querySelectorAll<HTMLElement>(selector)).filter(
          (element) =>
            element.tabIndex !== -1 ||
            element === event.target ||
            element.hasAttribute('data-focus-area-exit')
        );

        // Find last exit guard
        elements.reverse();
        const lastExit = elements.find((el) => el.hasAttribute('data-focus-area-exit'));
        elements.reverse();
        const lastExitIndex = elements.indexOf(lastExit);

        if (elements.indexOf(event.target) - 1 === lastExitIndex) {
          event.preventDefault();
          lastUsedFocusArea.current?.focus();
        }
      }
    };

    document.addEventListener('keydown', tabListener);
    return () => document.removeEventListener('keydown', tabListener);
  }, []);

  return (
    <Section size={{ initial: '2', md: '3' }}>
      <Container mx={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
        <Box mb="6">
          <Box mb="5">
            <SerifHeading mb="3" style={{ maxWidth: 560 }}>
              Core building blocks for your design system
            </SerifHeading>
            <Text size="5" as="p" mb="6" color="gray" style={{ maxWidth: 520 }}>
              Unstyled, accessible, open source React primitives for high-quality web apps and
              design systems.
            </Text>
          </Box>
          <NextLink href="/primitives/docs" passHref>
            <Button asChild size={{ initial: '3', xs: '4' }} color="gray" highContrast>
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
        </Box>
      </Container>

      <Box position="relative">
        <Carousel>
          <Box asChild ml={{ initial: '5', xs: '6', sm: '7', md: '9' }}>
            <CarouselSlideList
              css={{
                display: 'grid',
                gridAutoFlow: 'column',
                gridAutoColumns: 'min-content',
                overflowX: 'auto',
                overflowY: 'hidden',
                paddingTop: '$1',
                paddingBottom: '$1',
                WebkitOverflowScrolling: 'touch',

                // Remove the actual margin
                '--margin-left-override': 0,

                // Move the responsive margin here
                paddingLeft: 'max(var(--margin-left), calc(50% - var(--container-4) / 2))',

                // hide scrollbar
                MsOverflowStyle: 'none',
                scrollbarWidth: 'none',

                '&::-webkit-scrollbar': {
                  display: 'none',
                },

                // Can't have nice grid gap because Safari butchers scroll padding with it
                '& > *': {
                  paddingRight: 'var(--space-5)',
                },
              }}
            >
              <CarouselSlide>
                <FocusArea
                  aria-label="Dialog component demo"
                  onKeyDown={onFocusAreaKeyDown}
                  onFocus={onFocusAreaFocus}
                >
                  <DemoContainer
                    aria-hidden
                    css={{
                      background: 'linear-gradient(120deg, $indigo6, $crimson5)',
                      '.dark &, .dark-theme &': {
                        background: 'linear-gradient(120deg, $indigo4, $plum3)',
                      },
                    }}
                  >
                    <PrimitivesHeroDialog />
                  </DemoContainer>
                </FocusArea>
                <GrabBox>
                  <Heading as="h3" size="3" mb="1">
                    Dialog
                  </Heading>
                  <Text as="p" size="2" color="gray">
                    With modal and non-modal modes, fine-grained focus&nbsp;control, accessible to
                    screen readers.
                  </Text>
                </GrabBox>
              </CarouselSlide>

              <CarouselSlide>
                <FocusArea
                  aria-label="Dropdown menu component demo"
                  onKeyDown={onFocusAreaKeyDown}
                  onFocus={onFocusAreaFocus}
                >
                  <DemoContainer
                    aria-hidden
                    css={{
                      background: 'linear-gradient(120deg,  $crimson5, $blue5)',
                      '.dark &, .dark-theme &': {
                        background: 'linear-gradient(120deg,  $plum3, $blue3)',
                      },
                    }}
                  >
                    <PrimitivesHeroDropdownMenu />
                  </DemoContainer>
                </FocusArea>
                <GrabBox>
                  <Heading as="h3" size="3" mb="1">
                    Dropdown Menu
                  </Heading>
                  <Text as="p" size="2" color="gray">
                    With submenus, checkable items, collision handling, arrow key navigation, and
                    typeahead support.
                  </Text>
                </GrabBox>
              </CarouselSlide>

              <CarouselSlide>
                <FocusArea
                  aria-label="Popover component demo"
                  onKeyDown={onFocusAreaKeyDown}
                  onFocus={onFocusAreaFocus}
                >
                  <DemoContainer
                    aria-hidden
                    css={{
                      background: 'linear-gradient(120deg, $blue5, $lime3)',
                      '.dark &, .dark-theme &': {
                        background: 'linear-gradient(120deg, $blue3, $sand6)',
                      },
                    }}
                  >
                    <PrimitivesHeroPopover />
                  </DemoContainer>
                </FocusArea>
                <GrabBox>
                  <Heading as="h3" size="3" mb="1">
                    Popover
                  </Heading>
                  <Text as="p" size="2" color="gray">
                    With fine-grained focus control, collision handling, origin-aware and
                    collision-aware animations.
                  </Text>
                </GrabBox>
              </CarouselSlide>

              <CarouselSlide>
                <FocusArea
                  aria-label="Slider component demo"
                  onKeyDown={onFocusAreaKeyDown}
                  onFocus={onFocusAreaFocus}
                >
                  <DemoContainer
                    aria-hidden
                    css={{
                      background: 'linear-gradient(120deg, $lime3, $pink4)',
                      '.dark &, .dark-theme &': {
                        background: 'linear-gradient(120deg, $sand6, $pink3)',
                      },
                    }}
                  >
                    <PrimitivesHeroSlider />
                  </DemoContainer>
                </FocusArea>
                <GrabBox>
                  <Heading as="h3" size="3" mb="1">
                    Slider
                  </Heading>
                  <Text as="p" size="2" color="gray">
                    Supports keyboard and touch input, step interval, multiple thumbs for value
                    ranges, and RTL direction.
                  </Text>
                </GrabBox>
              </CarouselSlide>

              <CarouselSlide>
                <FocusArea
                  aria-label="Scroll area component demo"
                  onKeyDown={onFocusAreaKeyDown}
                  onFocus={onFocusAreaFocus}
                >
                  <DemoContainer
                    aria-hidden
                    css={{
                      background: 'linear-gradient(120deg, $pink4, $gold5)',
                      '.dark &, .dark-theme &': {
                        background: 'linear-gradient(120deg, $pink3, $gold4)',
                      },
                    }}
                  >
                    <PrimitivesHeroScrollArea />
                  </DemoContainer>
                </FocusArea>
                <GrabBox>
                  <Heading as="h3" size="3" mb="1">
                    Scroll Area
                  </Heading>
                  <Text as="p" size="2" color="gray">
                    Supports custom cross-browser styling while maintaining the browser's native
                    scroll behavior.
                  </Text>
                </GrabBox>
              </CarouselSlide>

              <CarouselSlide>
                <FocusArea
                  aria-label="Tabs component demo"
                  onKeyDown={onFocusAreaKeyDown}
                  onFocus={onFocusAreaFocus}
                >
                  <DemoContainer
                    aria-hidden
                    css={{
                      background: 'linear-gradient(120deg, $gold5, $tomato5)',
                      '.dark &, .dark-theme &': {
                        background: 'linear-gradient(120deg, $gold4, $crimson4)',
                      },
                    }}
                  >
                    <PrimitivesHeroTabs />
                  </DemoContainer>
                </FocusArea>
                <GrabBox>
                  <Heading as="h3" size="3" mb="1">
                    Tabs
                  </Heading>
                  <Text as="p" size="2" color="gray">
                    Supports arrow key navigation, horizontal/vertical orientation, controlled or
                    uncontrolled.
                  </Text>
                </GrabBox>
              </CarouselSlide>

              <CarouselSlide>
                <FocusArea
                  aria-label="Accordion component demo"
                  onKeyDown={onFocusAreaKeyDown}
                  onFocus={onFocusAreaFocus}
                >
                  <DemoContainer
                    aria-hidden
                    css={{
                      background: 'linear-gradient(120deg, $tomato5, $indigo7)',
                      '.dark &, .dark-theme &': {
                        background: 'linear-gradient(120deg, $crimson4, $indigo5)',
                      },
                    }}
                  >
                    <PrimitivesHeroAccordion />
                  </DemoContainer>
                </FocusArea>
                <GrabBox>
                  <Heading as="h3" size="3" mb="1">
                    Accordion
                  </Heading>
                  <Text as="p" size="2" color="gray">
                    Supports one or multiple items open at the same time, keyboard navigation,
                    collapse and expand animation.
                  </Text>
                </GrabBox>
              </CarouselSlide>

              <CarouselSlide>
                <FocusArea
                  aria-label="Radio group component demo"
                  onKeyDown={onFocusAreaKeyDown}
                  onFocus={onFocusAreaFocus}
                >
                  <DemoContainer
                    aria-hidden
                    css={{
                      background: 'linear-gradient(120deg, $indigo7, $cyan3)',
                      '.dark &, .dark-theme &': {
                        background: 'linear-gradient(120deg, $indigo5, $cyan7)',
                      },
                    }}
                  >
                    <PrimitivesHeroRadioGroup />
                  </DemoContainer>
                </FocusArea>
                <GrabBox>
                  <Heading as="h3" size="3" mb="1">
                    Radio Group
                  </Heading>
                  <Text as="p" size="2" color="gray">
                    With arrow key navigation, horizontal/vertical orientation support, controlled
                    or uncontrolled.
                  </Text>
                </GrabBox>
              </CarouselSlide>

              <CarouselSlide>
                <FocusArea
                  aria-label="Toggle group component demo"
                  onKeyDown={onFocusAreaKeyDown}
                  onFocus={onFocusAreaFocus}
                >
                  <DemoContainer
                    aria-hidden
                    css={{
                      background: 'linear-gradient(120deg, $cyan3, $mint5)',
                      '.dark &, .dark-theme &': {
                        background: 'linear-gradient(120deg, $cyan7, $teal6)',
                      },
                    }}
                  >
                    <PrimitivesHeroToggleGroup />
                  </DemoContainer>
                </FocusArea>
                <GrabBox>
                  <Heading as="h3" size="3" mb="1">
                    Toggle Group
                  </Heading>
                  <Text as="p" size="2" color="gray">
                    A set of two-state buttons that can be toggled on or off. Supports single and
                    multiple pressed buttons.
                  </Text>
                </GrabBox>
              </CarouselSlide>

              <CarouselSlide>
                <FocusArea
                  aria-label="Switch component demo"
                  onKeyDown={onFocusAreaKeyDown}
                  onFocus={onFocusAreaFocus}
                >
                  <DemoContainer
                    aria-hidden
                    css={{
                      background: 'linear-gradient(120deg, $mint5, $red3)',
                      '.dark &, .dark-theme &': {
                        background: 'linear-gradient(120deg, $teal6, $plum4)',
                      },
                    }}
                  >
                    <PrimitivesHeroSwitch />
                  </DemoContainer>
                </FocusArea>
                <GrabBox>
                  <Heading as="h3" size="3" mb="1">
                    Switch
                  </Heading>
                  <Text as="p" size="2" color="gray">
                    Allows the user to toggle between checked and not checked.
                  </Text>
                </GrabBox>
              </CarouselSlide>

              <CarouselSlide>
                <FocusArea onKeyDown={onFocusAreaKeyDown} onFocus={onFocusAreaFocus}>
                  <DemoContainer
                    css={{
                      backgroundColor: '$whiteA6',
                      boxShadow: '0 0 0 1px $colors$slateA5',
                      '.dark &, .dark-theme &': {
                        backgroundColor: '$blackA4',
                      },
                    }}
                  >
                    <Flex align="center" direction="column" gap="2">
                      <Text size="2" color="gray">
                        See more components in the docs
                      </Text>
                      <Text size="3">
                        <NextLink href="/primitives/docs/overview/getting-started" passHref>
                          <Link css={{ display: 'inline-flex', alignItems: 'center' }}>
                            View docs
                            <ArrowRightIcon />
                          </Link>
                        </NextLink>
                      </Text>
                    </Flex>
                  </DemoContainer>
                </FocusArea>
              </CarouselSlide>
            </CarouselSlideList>
          </Box>

          <Box
            style={{
              position: 'absolute',
              top: 'calc(50% - $7)',
              left: '15px',
            }}
          >
            <CarouselPrevious
              aria-label="Show previous demo"
              tabIndex={-1}
              as={CarouselArrowButton}
            >
              <ArrowLeftIcon />
            </CarouselPrevious>
          </Box>
          <Box
            style={{
              position: 'absolute',
              top: 'calc(50% - $7)',
              right: '15px',
            }}
          >
            <CarouselNext aria-label="Show next demo" tabIndex={-1} as={CarouselArrowButton}>
              <ArrowRightIcon />
            </CarouselNext>
          </Box>
        </Carousel>
      </Box>
    </Section>
  );
};

const CarouselArrowButton = styled('button', {
  unset: 'all',
  outline: 0,
  margin: 0,
  border: 0,
  padding: 0,

  display: 'flex',
  position: 'relative',
  zIndex: 1,
  ai: 'center',
  jc: 'center',
  bc: '$panel',
  br: '$round',
  width: '$7',
  height: '$7',
  color: 'var(--gray-12)',

  boxShadow: '$colors$blackA11 0px 2px 12px -5px, $colors$blackA5 0px 1px 3px',
  willChange: 'transform, box-shadow, opacity',
  transition: 'all 100ms',

  '@hover': {
    '&:hover': {
      boxShadow: '$colors$blackA10 0px 3px 16px -5px, $colors$blackA5 0px 1px 3px',
      transform: 'translateY(-1px)',

      // Fix a bug when hovering at button edges would cause the button to jitter because of transform
      '&::before': {
        content: '',
        inset: -2,
        br: '$round',
        position: 'absolute',
      },
    },
  },
  '&:focus': {
    boxShadow: `
      $colors$blackA10 0px 3px 16px -5px,
      $colors$blackA5 0px 1px 3px,
      $colors$blue9 0 0 0 2px
    `,
    transform: 'translateY(-1px)',
  },
  '&:focus:not(:focus-visible)': {
    boxShadow: '$colors$blackA11 0px 2px 12px -5px, $colors$blackA5 0px 1px 3px',
  },
  '&:active:not(:focus)': {
    boxShadow: '$colors$blackA11 0px 2px 12px -5px, $colors$blackA5 0px 1px 3px',
  },
  '&:active': {
    transform: 'none',
    transition: 'opacity 100ms',
  },
  '&:disabled': {
    opacity: 0,
  },
  '@media (hover: none) and (pointer: coarse)': {
    display: 'none',
  },
});

const GrabBox = styled('div', {
  cursor: 'grab',
  '&:active': { cursor: 'grabbing' },

  // Fill in spaces between slides
  marginRight: 'calc(-1 * var(--space-5))',
  paddingRight: 'var(--space-5)',
});
