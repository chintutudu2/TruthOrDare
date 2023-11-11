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
  buttonContainer: {
    marginTop: dimension.margin12,
  },
  iconButton: {
    marginRight: dimension.margin16,
  },
  backButton: {
    marginBottom: dimension.appMargin,
  },
});
