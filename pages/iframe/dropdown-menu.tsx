import React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { darkTheme, Flex, globalCss, styled } from '@modulz/design-system';
import {
  CaretDownIcon,
  CaretRightIcon,
  CheckIcon,
  GitHubLogoIcon,
  ModulzLogoIcon,
  StitchesLogoIcon,
} from '@radix-ui/react-icons';
import { DemoButton } from '@components/marketing/DemoButton';

const DropdownMenuArrow = styled(DropdownMenuPrimitive.Arrow, {
  fill: '$loContrast',
});

const DropdownMenuContent: any = styled(DropdownMenuPrimitive.Content, {
  bc: '$loContrast',
  br: '$2',
  p: '$1',
  boxShadow: '0px 5px 30px -5px rgba(0, 0, 0, 0.1), 0 1px 3px -1px rgba(0, 0, 0, 0.2)',
});

const DropdownMenuSeparator = styled(DropdownMenuPrimitive.Separator, {
  bc: '$slate4',
  height: 1,
  my: '$1',
  ml: '$5',
  mr: '$1',
});

const itemCss = {
  display: 'flex',
  alignItems: 'center',
  fontFamily: '$untitled',
  fontSize: '$1',
  fontVariantNumeric: 'tabular-nums',
  lineHeight: '1',
  cursor: 'default',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  height: '$5',
  color: '$hiContrast',
  minWidth: 90,
  pl: '$4',
  pr: '$3',
  br: '$1',

  '&[data-state="open"]': {
    backgroundColor: '$slate3',
  },

  // &:active for touch devices
  '&:focus, &:active': {
    outline: 0,
    backgroundColor: '$indigo9',
    color: 'white',
  },
};

const DropdownMenuItem = styled(DropdownMenuPrimitive.Item, itemCss);
const DropdownMenuTriggerItem = styled(DropdownMenuPrimitive.TriggerItem, itemCss);
const DropdownMenuCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, itemCss);

export default function DropdownMenuDemo() {
  const refToFocus = React.useRef<HTMLDivElement>(null);

  // We prevent the initial auto focus because it's a demo rather than a real UI,
  // so the parent page focus is not stolen.
  const initialAutoFocusPrevented = React.useRef(false);
  const [showToolbar, setShowToolbar] = React.useState(true);
  const [showUrls, setShowUrls] = React.useState(false);

  // Let upstream document know that we are ready
  React.useEffect(() => {
    requestAnimationFrame(() => window.top.postMessage({ key: 'dropdown' }, '*'));
  });

  return (
    <Flex
      css={{
        ai: 'center',
        jc: 'center',
        position: 'relative',
        color: '$hiContrast',
        height: '100vh',
        width: '100vw',
      }}
    >
      <DropdownMenuPrimitive.Root modal={false} defaultOpen>
        <DropdownMenuPrimitive.Trigger asChild>
          <DemoButton css={{ marginBottom: 120, gap: 3 }}>
            Dropdown <CaretDownIcon style={{ marginRight: -5 }} />
          </DemoButton>
        </DropdownMenuPrimitive.Trigger>
        <DropdownMenuContent
          data-test
          ref={refToFocus}
          sideOffset={5}
          onInteractOutside={(event) => event.preventDefault()}
          onOpenAutoFocus={(event) => {
            // We prevent the initial auto focus because it's a demo rather than a real UI,
            // so the parent page focus is not stolen.
            if (initialAutoFocusPrevented.current === false) {
              event.preventDefault();
              initialAutoFocusPrevented.current = true;
            }

            // Some Safari “love”.
            // When focus is changed programmatically in an iframe, Safari may jerk parent page scroll position.
            // This means there's a brutal scroll shift when interactive primitives focus stuff on open.
            // This is purely a Safari bug that's not related to how primitives are implemented.
            if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
              // Cancel default focus
              event.preventDefault();

              // Refocus the element manually, updating scroll.
              // iOS Safari is unfixable, so we won't refocus the element for it.
              if (navigator.maxTouchPoints === 0) {
                const { scrollTop } = parent.document.documentElement;
                setTimeout(() => {
                  refToFocus.current?.focus();
                  parent.document.documentElement.scrollTop = scrollTop;
                });
              }
            }
          }}
        >
          <DropdownMenuArrow />
          <DropdownMenuItem>New Tab</DropdownMenuItem>
          <DropdownMenuItem>New Window</DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuPrimitive.Root>
            <DropdownMenuTriggerItem>
              Favorites
              <CaretRightIcon style={{ marginLeft: 'auto', marginRight: -5 }} />
            </DropdownMenuTriggerItem>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <GitHubLogoIcon style={{ marginLeft: -15, marginRight: 10 }} />
                GitHub
              </DropdownMenuItem>
              <DropdownMenuItem>
                <StitchesLogoIcon style={{ marginLeft: -15, marginRight: 10 }} />
                Stitches
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ModulzLogoIcon style={{ marginLeft: -15, marginRight: 10 }} />
                Modulz
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuPrimitive.Root>

          <DropdownMenuItem>Downloads</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem checked={showToolbar} onCheckedChange={setShowToolbar}>
            <DropdownMenuPrimitive.ItemIndicator>
              <CheckIcon style={{ marginLeft: -18, marginRight: 0 }} />
            </DropdownMenuPrimitive.ItemIndicator>
            Show Toolbar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={showUrls} onCheckedChange={setShowUrls}>
            <DropdownMenuPrimitive.ItemIndicator>
              <CheckIcon style={{ marginLeft: -18, marginRight: 0 }} />
            </DropdownMenuPrimitive.ItemIndicator>
            Show Full URLs
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenuPrimitive.Root>
    </Flex>
  );
}
