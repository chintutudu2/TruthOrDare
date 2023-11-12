import {dimension} from '@utils/ScalingUtils';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logoContainer: {
    marginTop: dimension.appMargin,
  },
  logo: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerContainer: {
    width: dimension.appViewWidth,
    justifyContent: 'space-between',
    paddingHorizontal: dimension.margin10,
    marginBottom: dimension.appMargin,
  },
});
