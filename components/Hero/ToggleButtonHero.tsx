import React from 'react';
import { Box, styled, css, Flex } from '@modulz/design-system';

const tab1 = css.keyframes({
  '0%': { opacity: '1' },
  '29.9999%': { opacity: '1' },
  '30%': { opacity: '.75' },
  '69.9999%': { opacity: '.75' },
  '70%': { opacity: '1' },
  '100%': { opacity: '1' },
});

const tab2 = css.keyframes({
  '0%': { opacity: '.75' },
  '29.9999%': { opacity: '.75' },
  '30%': { opacity: '1' },
  '69.9999%': { opacity: '1' },
  '70%': { opacity: '.75' },
  '100%': { opacity: '.75' },
});

const cursor = css.keyframes({
  '0%': { transform: 'translate(30px, 30px)' },
  '22%': { transform: 'translate(30px, 30px)' },
  '26%': { transform: 'translate(0, 0)' },
  '74%': { transform: 'translate(0, 0)' },
  '78%': { transform: 'translate(30px, 30px)' },
});

const click = css.keyframes({
  '0%': { boxShadow: '0 0 0 2px black', transform: 'scale(.5)', opacity: '0' },
  '27%': { boxShadow: '0 0 0 3px black', transform: 'scale(.5)', opacity: '0' },
  '29%': { boxShadow: '0 0 0 2px black', opacity: '1' },
  '31%': { boxShadow: '0 0 0 2px black', transform: 'scale(1)', opacity: '0' },

  '67%': { boxShadow: '0 0 0 3px black', transform: 'scale(.5)', opacity: '0' },
  '69%': { boxShadow: '0 0 0 2px black', opacity: '1' },
  '71%': { boxShadow: '0 0 0 2px black', transform: 'scale(1)', opacity: '0' },

  '100%': { boxShadow: '0 0 0 2px black', transform: 'scale(.5)', opacity: '0' },
});

const ToggleButtonContainer = () => {
  return (
    <Box css={{ position: 'relative' }}>

      <Box
        css={{
          position: 'absolute',
          top: 18,
          right: 0,
          transform: 'translate(30px, 30px)',
          animation: `${cursor} 6000ms infinite`,
          animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
          zIndex: '1',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <g clip-path="url(#clip0)">
            <g filter="url(#filter0_d)">
              <path
                d="M7.5 23.1865L4.79423 0.5L23.0885 14.1865L13.5442 15.6554L7.5 23.1865Z"
                fill="black"
              />
              <path
                d="M7.5 23.1865L4.79423 0.5L23.0885 14.1865L13.5442 15.6554L7.5 23.1865Z"
                stroke="white"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="-5.68303"
              y="-5.68302"
              width="31.4545"
              height="32.5526"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
            <clipPath id="clip0">
              <rect width="25" height="25" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <Box
          css={{
            position: 'absolute',
            top: -12,
            right: 0,
            bottom: 0,
            left: -12,
            borderRadius: '50%',
            boxShadow: '0 0 0 3px black',
            opacity: '0',
            transform: 'scale(.5)',
            animation: `${click} 6000ms infinite`,
            animationTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        ></Box>
      </Box>

      <Flex>
        <Box
          css={{
            display: 'flex',
            alignItems: 'center',
            px: '$2',
            height: '$5',
            backgroundColor: 'white',
            borderRadius: '5px',
            width: 50,
            mr: 2,
            animation: `${tab1} 6000ms infinite`,
          }}
        >
          <Box css={{ backgroundColor: 'hsl(206,10%,80%)', height: 4, width: '100%' }}></Box>
        </Box>
      </Flex>
    </Box>
  );
};

export const ToggleButtonHero = () => {
  return <ToggleButtonContainer />;
};
