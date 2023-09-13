import {dimension} from '@utils/ScalingUtils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {
    paddingHorizontal: dimension.appMargin,
  },
});
