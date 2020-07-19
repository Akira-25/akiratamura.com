// import React from 'react';
import { useDimensions } from '@react-native-community/hooks';

export default function useIsWindow() {
  const { height, width } = useDimensions().window;
  const windowsHeight = height;
  const windowsWidth = width;

  return ({
    isTallWindow: height >= 800,
    isTooShortWindow: height <= 500,
    isWideWindow: width >= 1050,
    windowsHeight,
    windowsWidth,
  });
}

/*
export function useIsTallScreen()
*/
/*
export function useScreenSize();
  const { width, height, scale } = useDimensions().window;
*/
