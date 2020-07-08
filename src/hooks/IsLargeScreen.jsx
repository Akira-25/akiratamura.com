// import React from 'react';
import { useDimensions } from '@react-native-community/hooks';

export default function useIsLargeScreen() {
  return (
    useDimensions().window.width >= 1050
  );
}
/*
export function useScreenSize();
  const { width, height, scale } = useDimensions().window;
*/
