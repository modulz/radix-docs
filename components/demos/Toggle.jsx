import React from 'react';
import { styled } from '@modulz/design-system';
import { violet, mauve, blackA } from '@radix-ui/colors';
import { FontItalicIcon } from '@radix-ui/react-icons';
import * as TogglePrimitive from '@radix-ui/react-toggle';

const StyledToggle = styled(TogglePrimitive.Root, {
  all: 'unset',
  backgroundColor: 'white',
  color: mauve.mauve11,
  height: 35,
  width: 35,
  borderRadius: 4,
  display: 'flex',
  fontSize: 15,
  lineHeight: 1,
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: violet.violet3 },
  '&[data-state=on]': { backgroundColor: violet.violet5, color: violet.violet11 },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

// Exports
const Toggle = StyledToggle;

// Your app...
const ToggleDemo = () => (
  <Toggle>
    <FontItalicIcon />
  </Toggle>
);

export default ToggleDemo;