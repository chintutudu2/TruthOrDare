import {Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const {width, height} = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 411;
const guidelineBaseHeight = 823;

export const getPercentage = (size: number) =>
  (size / guidelineBaseWidth) * 100;
export const scale = (size: number) =>
  (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (longDimension / guidelineBaseHeight) * size;
export const sizeScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export const getScaleSizeHeight = (size: number) => {
  return hp(getPercentage(size) + '%');
};
export const getScaleSizeWidth = (size: number) => {
  return wp(getPercentage(size) + '%');
};

export const dimension = {
  appViewWidth: getScaleSizeWidth(375),

  appMargin: getScaleSizeWidth(18),

  buttonHeight: getScaleSizeWidth(73),
  buttonWidth: getScaleSizeWidth(211),

  buttonHeight56: getScaleSizeWidth(56),
  buttonWidth209: getScaleSizeWidth(209),

  buttonHeight49: getScaleSizeWidth(49),
  buttonWidth122: getScaleSizeWidth(122),

  buttonLongHeight: getScaleSizeWidth(68),
  buttonLongWidth: getScaleSizeWidth(301),

  buttonCircleHeight: getScaleSizeWidth(68),
  buttonCircleWidth: getScaleSizeWidth(68),

  inputHeight: getScaleSizeWidth(68),
  inputWidth: getScaleSizeWidth(305),

  spinnerWidth: getScaleSizeWidth(375),
  spinnerHeight: getScaleSizeWidth(377),

  spinnerInnerCircleWidth: getScaleSizeWidth(265),

  selectModalWidth: getScaleSizeWidth(298),
  selectModalHeight: getScaleSizeWidth(258),

  questionModalWidth: getScaleSizeWidth(354),
  questionModalHeight: getScaleSizeWidth(264),

  scoreModalWidth: getScaleSizeWidth(354),
  scoreModalHeight: getScaleSizeWidth(306),

  margin1: getScaleSizeWidth(1),
  margin2: getScaleSizeWidth(2),
  margin3: getScaleSizeWidth(3),
  margin4: getScaleSizeWidth(4),
  margin5: getScaleSizeWidth(5),
  margin6: getScaleSizeWidth(6),
  margin7: getScaleSizeWidth(7),
  margin8: getScaleSizeWidth(8),
  margin9: getScaleSizeWidth(9),
  margin10: getScaleSizeWidth(10),
  margin12: getScaleSizeWidth(12),
  margin13: getScaleSizeWidth(13),
  margin14: getScaleSizeWidth(14),
  margin16: getScaleSizeWidth(16),
  margin18: getScaleSizeWidth(18),
  margin20: getScaleSizeWidth(20),
  margin30: getScaleSizeWidth(30),
  margin40: getScaleSizeWidth(40),
};

export const fontSize = {
  largeHeaderTextSize: wp('8%'),
  bigHeaderTextSize: wp('6.5%'),
  mediumHeaderTextSize: wp('6.3%'),
  headerTextSize: wp('5.5%'),
  bodyTextSizeLarge: wp('4.75%'),
  bodyTextSize: wp('4.6%'),
  bodyTextSizeSmall: wp('4.3%'),
  labelTextSize: wp('4%'),
  miniLabelTextSize: wp('3.5%'),
};
