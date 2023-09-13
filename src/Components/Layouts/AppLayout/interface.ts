import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

export interface AppLayoutProps {
  children?: ReactNode;
  hasScrollView?: boolean;
  disableScroll?: boolean;
  contentContainerStyle?: ViewStyle;
}
