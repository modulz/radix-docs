import React from 'react';
import { styled } from '@modulz/design-system';
import { violet, mauve, blackA, whiteA } from '@radix-ui/colors';
import * as SwitchPrimitive from '@radix-ui/react-switch';

const StyledSwitch = styled(SwitchPrimitive.Root, {
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: blackA.blackA9,
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&[data-state="checked"]': { backgroundColor: 'black' },
});

const StyledThumb = styled(SwitchPrimitive.Thumb, {
  display: 'block',
  width: 21,
  height: 21,
  backgroundColor: 'white',
  borderRadius: '9999px',
  boxShadow: `0 2px 2px ${blackA.blackA7}`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' },
});

// Exports
const Switch = StyledSwitch;
const SwitchThumb = StyledThumb;

// Your app...
const Flex = styled('div', { display: 'flex' });
const Label = styled('label', {
  color: 'white',
  fontSize: 15,
  lineHeight: 1,
  userSelect: 'none',
});

const SwitchDemo = () => (
  <form>
    <Flex css={{ alignItems: 'center' }}>
      <Label htmlFor="s1" css={{ paddingRight: 15 }}>
        Airplane mode
      </Label>
      <Switch defaultChecked id="s1">
        <SwitchThumb />
      </Switch>
    </Flex>
  </form>
);

export default SwitchDemo;
