import {ReactNode} from 'react';
import {TouchableOpacityProps, ViewStyle} from 'react-native';

export interface ButtonTextProps {
  style?: ViewStyle;
  Icon?: ReactNode;
  isValid?: boolean;
  onPress?: TouchableOpacityProps['onPress'];
}
