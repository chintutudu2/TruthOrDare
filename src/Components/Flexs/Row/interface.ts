import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

export interface RowViewProps {
  style?: ViewStyle | ViewStyle[];
  children?: ReactNode;
}
