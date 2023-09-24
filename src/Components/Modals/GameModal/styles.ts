import {Colors} from '@constants/Colors';
import {Fonts} from '@constants/Fonts';
import {dimension, fontSize} from '@utils/ScalingUtils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectModal: {
    width: dimension.selectModalWidth,
    height: dimension.selectModalHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalHeading: {
    width: dimension.buttonWidth,
    height: dimension.buttonHeight,
    position: 'absolute',
    top: -dimension.buttonHeight / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalHeadingText: {
    fontFamily: Fonts.familyName.bold,
    fontSize: fontSize.headerTextSize,
    color: Colors.white,
  },
  selectButton: {
    width: dimension.buttonWidth209,
    height: dimension.buttonHeight56,
    marginTop: dimension.margin16,
  },
  questionModal: {
    width: dimension.questionModalWidth,
    height: dimension.questionModalHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  question: {
    fontFamily: Fonts.familyName.bold,
    fontSize: fontSize.bodyTextSizeSmall,
    color: Colors.white,
    textAlign: 'center',
    marginHorizontal: dimension.margin40,
  },
  questionButtonContainer: {
    marginTop: dimension.margin18,
  },
  questionLeftButton: {
    width: dimension.buttonWidth122,
    height: dimension.buttonHeight49,
    marginRight: dimension.margin13,
  },
  questionRightButton: {
    width: dimension.buttonWidth122,
    height: dimension.buttonHeight49,
    marginLeft: dimension.margin13,
  },
});
