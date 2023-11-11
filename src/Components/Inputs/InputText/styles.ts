import {Colors} from '@constants/Colors';
import {Fonts} from '@constants/Fonts';
import {dimension, fontSize} from '@utils/ScalingUtils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: dimension.inputHeight,
    width: dimension.inputWidth,
  },
  textInputStyle: {
    flex: 1,
    width: '100%',
    color: Colors.blue,
    paddingHorizontal: dimension.margin40,
    fontFamily: Fonts.familyName.bold,
    fontSize: fontSize.headerTextSize,
  },
});
