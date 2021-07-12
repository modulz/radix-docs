import React from 'react';
import { styled, keyframes } from '@modulz/design-system';
import { violet, mauve, blackA } from '@radix-ui/colors';
import { MixerHorizontalIcon, Cross2Icon } from '@radix-ui/react-icons';
import * as PopoverPrimitive from '@radix-ui/react-popover';

const show = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const StyledContent = styled(PopoverPrimitive.Content, {
  borderRadius: 4,
  padding: 20,
  width: 260,
  backgroundColor: 'white',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  animation: `${show} 100ms linear`,
  '&:focus': {
    boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px ${violet.violet7}`,
  },
});

const StyledArrow = styled(PopoverPrimitive.Arrow, {
  fill: 'white',
});

const StyledClose = styled(PopoverPrimitive.Close, {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: violet.violet11,
  position: 'absolute',
  top: 5,
  right: 5,

  '&:hover': { backgroundColor: violet.violet4 },
  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

// Exports
export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverContent = StyledContent;
export const PopoverArrow = StyledArrow;
export const PopoverClose = StyledClose;

// Your app...
const Flex = styled('div', { display: 'flex' });

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 35,
  width: 35,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: violet.violet11,
  marginLeft: 20,
  backgroundColor: 'white',

  '&:hover': { backgroundColor: violet.violet3 },
  '&:focus': { boxShadow: `0 0 0 2px black` },
});
const Fieldset = styled('fieldset', {
  all: 'unset',
  display: 'flex',
  gap: 20,
  alignItems: 'center',
});

const Label = styled('label', {
  fontSize: 13,
  color: violet.violet11,
  width: 75,
});

const Input = styled('input', {
  all: 'unset',
  width: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  flex: '1',
  borderRadius: 4,
  padding: '0 10px',
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  height: 25,

  '&:focus': { boxShadow: `0 0 0 2px ${violet.violet8}` },
});

const Text = styled('div', {
  margin: 0,
  color: mauve.mauve12,
  fontSize: 15,
  lineHeight: '19px',
  variants: {
    faded: {
      true: { color: mauve.mauve10 },
    },
    bold: {
      true: { fontWeight: 500 },
    },
  },
});

const PopoverDemo = () => (
  <Popover>
    <PopoverTrigger as={IconButton}>
      <MixerHorizontalIcon />
    </PopoverTrigger>
    <PopoverContent sideOffset={5}>
      <Flex css={{ flexDirection: 'column', gap: 10 }}>
        <Text bold css={{ marginBottom: 10 }}>
          Dimensions
        </Text>
        <Fieldset>
          <Label>Width</Label>
          <Input value="100%" />
        </Fieldset>
        <Fieldset>
          <Label>Max. width</Label>
          <Input value="300px" />
        </Fieldset>
        <Fieldset>
          <Label>Height</Label>
          <Input value="25px" />
        </Fieldset>
        <Fieldset>
          <Label>Max. height</Label>
          <Input value="none" />
        </Fieldset>
      </Flex>
      <PopoverArrow />
      <PopoverClose>
        <Cross2Icon />
      </PopoverClose>
    </PopoverContent>
  </Popover>
);

export default PopoverDemo;
