import {dimension} from '@utils/ScalingUtils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: dimension.spinnerHeight,
    width: dimension.spinnerWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottle: {
    position: 'absolute',
  },
});
