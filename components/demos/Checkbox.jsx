import React from 'react';
import { styled } from '@modulz/design-system';
import { violet, blackA } from '@radix-ui/colors';
import { CheckIcon } from '@radix-ui/react-icons';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  backgroundColor: 'white',
  width: 25,
  height: 25,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: violet.violet3 },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator, {
  color: violet.violet11,
});

// Exports
const Checkbox = StyledCheckbox;
const CheckboxIndicator = StyledIndicator;

// Your app...
const Flex = styled('div', { display: 'flex' });
const Label = styled('label', {
  color: 'white',
  fontSize: 15,
  lineHeight: 1,
  userSelect: 'none',
});

export const CheckboxDemo = () => (
  <form>
    <Flex css={{ alignItems: 'center' }}>
      <Checkbox defaultChecked id="c1">
        <CheckboxIndicator>
          <CheckIcon />
        </CheckboxIndicator>
      </Checkbox>
      <Label css={{ paddingLeft: 15 }} htmlFor="c1">
        Accept terms and conditions.
      </Label>
    </Flex>
  </form>
);

export default CheckboxDemo;
