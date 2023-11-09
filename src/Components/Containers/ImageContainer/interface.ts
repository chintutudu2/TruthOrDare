import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

export interface ImageContainerProps {
  style?: ViewStyle | ViewStyle[];
  width?: number;
  height?: number;
  children?: ReactNode;
}
