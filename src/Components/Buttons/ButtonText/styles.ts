import {Colors} from '@constants/Colors';
import {Fonts} from '@constants/Fonts';
import {dimension, fontSize} from '@utils/ScalingUtils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  backgroundStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: dimension.buttonHeight,
    width: dimension.buttonWidth,
  },
  textStyle: {
    fontFamily: Fonts.familyName.bold,
    fontSize: fontSize.headerTextSize,
    color: Colors.white,
  },
});
