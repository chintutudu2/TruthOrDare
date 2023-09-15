import {ReactNode} from 'react';
import {TouchableOpacityProps, ViewStyle} from 'react-native';

export interface ButtonIconProps {
  background?: any;
  style?: ViewStyle;
  Icon?: ReactNode;
  isValid?: boolean;
  onPress?: TouchableOpacityProps['onPress'];
}
