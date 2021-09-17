import React from 'react';
import { styled } from '@modulz/design-system';
import { violet, blackA } from '@radix-ui/colors';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

const StyledRadio = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  backgroundColor: 'white',
  width: 25,
  height: 25,
  borderRadius: '100%',
  boxShadow: `0 2px 10px ${blackA.blackA7}`,
  '&:hover': { backgroundColor: violet.violet3 },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});

const StyledIndicator = styled(RadioGroupPrimitive.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    display: 'block',
    width: 11,
    height: 11,
    borderRadius: '50%',
    backgroundColor: violet.violet11,
  },
});

// Exports
const RadioGroup = RadioGroupPrimitive.Root;
const RadioGroupRadio = StyledRadio;
const RadioGroupIndicator = StyledIndicator;

// Your app...
const Flex = styled('div', { display: 'flex' });

const Label = styled('label', {
  color: 'white',
  fontSize: 15,
  lineHeight: 1,
  userSelect: 'none',
  paddingLeft: 15,
});

export const CheckboxDemo = () => (
  <form>
    <RadioGroup defaultValue="default" aria-label="View density">
      <Flex css={{ margin: '10px 0', alignItems: 'center' }}>
        <RadioGroupRadio value="default" id="r1">
          <RadioGroupIndicator />
        </RadioGroupRadio>
        <Label htmlFor="r1">Default</Label>
      </Flex>
      <Flex css={{ margin: '10px 0', alignItems: 'center' }}>
        <RadioGroupRadio value="comfortable" id="r2">
          <RadioGroupIndicator />
        </RadioGroupRadio>
        <Label htmlFor="r2">Comfortable</Label>
      </Flex>
      <Flex css={{ margin: '10px 0', alignItems: 'center' }}>
        <RadioGroupRadio value="compact" id="r3">
          <RadioGroupIndicator />
        </RadioGroupRadio>
        <Label htmlFor="r3">Compact</Label>
      </Flex>
    </RadioGroup>
  </form>
);

export default CheckboxDemo;
