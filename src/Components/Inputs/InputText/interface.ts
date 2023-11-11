import {StyleProp, TextInputProps, TextStyle, ViewStyle} from 'react-native';

export interface InputTextProps {
  background?: any;
  style?: ViewStyle;
  textInputStyle?: StyleProp<TextStyle>;
  placeholder?: string;
  placeholderColor?: string;
  value?: string;
  onChangeText?: TextInputProps['onChangeText'];
}
