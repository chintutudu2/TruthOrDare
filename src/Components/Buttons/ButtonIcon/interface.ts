import {ReactNode} from 'react';
import {TouchableOpacityProps, ViewStyle} from 'react-native';

export interface ButtonIconProps {
  style?: ViewStyle;
  Icon?: ReactNode;
  isValid?: boolean;
  onPress?: TouchableOpacityProps['onPress'];
}
