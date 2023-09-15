import {dimension} from '@utils/ScalingUtils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  viewContainer: {
    alignItems: 'center',
  },
  logo: {
    marginTop: dimension.margin30,
  },
  buttonContainer: {
    marginTop: dimension.margin10,
  },
  buttonTextContainer: {
    width: dimension.buttonLongWidth,
    height: dimension.buttonLongHeight,
  },
  iconButton: {
    marginLeft: dimension.margin7,
  },
  footerContainer: {
    width: dimension.appViewWidth,
    justifyContent: 'space-between',
    paddingHorizontal: dimension.margin10,
  },
});
