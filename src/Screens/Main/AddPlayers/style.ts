import {dimension} from '@utils/ScalingUtils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
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
});
