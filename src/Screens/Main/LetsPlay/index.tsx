import Components from '@components/index';
import React, {memo} from 'react';
import {styles} from '@screens/Main/LetsPlay/styles';
import {Image} from 'react-native';
import Constants from '@constants/index';
import {ButtonText} from '@components/Buttons';

const LetsPlay = memo(function LetsPlay(props) {
  return (
    <Components.Layouts.AppLayout
      hasScrollView={false}
      contentContainerStyle={styles.contentContainer}>
      <Image source={Constants.Images.TruthDareGameLogo} style={styles.logo} />
      <Image source={Constants.Images.SpinnerLogo} style={styles.spinner} />
      <ButtonText
        isValid
        Icon={<Image source={Constants.Images.LetsPlayText} />}
      />
      <ButtonText
        isValid
        Icon={<Image source={Constants.Images.SettingText} />}
      />
      <ButtonText
        isValid
        Icon={<Image source={Constants.Images.RateUsText} />}
      />
    </Components.Layouts.AppLayout>
  );
});

export {LetsPlay};
