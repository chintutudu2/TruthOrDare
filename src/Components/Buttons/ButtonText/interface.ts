import {ReactNode} from 'react';
import {TouchableOpacityProps, ViewStyle} from 'react-native';

export interface ButtonTextProps {
  background?: any;
  style?: ViewStyle;
  text?: string;
  isValid?: boolean;
  onPress?: TouchableOpacityProps['onPress'];
}
