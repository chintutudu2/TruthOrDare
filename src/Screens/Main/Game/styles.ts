import {dimension} from '@utils/ScalingUtils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  logo: {
    marginTop: dimension.margin30,
  },
  footerContainer: {
    width: dimension.appViewWidth,
    justifyContent: 'space-between',
    paddingHorizontal: dimension.margin10,
  },
});
