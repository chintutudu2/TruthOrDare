import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

export interface AppLayoutProps {
  background?: any;
  children?: ReactNode;
  hasScrollView?: boolean;
  disableScroll?: boolean;
  contentContainerStyle?: ViewStyle;
}
