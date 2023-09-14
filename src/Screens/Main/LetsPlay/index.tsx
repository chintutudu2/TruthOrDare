import Components from '@components/index';
import React, {memo} from 'react';
import {styles} from '@screens/Main/LetsPlay/styles';
import {Image} from 'react-native';
import Constants from '@constants/index';
import {ButtonIcon, ButtonText} from '@components/Buttons';
import {RowView} from '@components/Flexs';

const LetsPlay = memo(function LetsPlay(props) {
  return (
    <Components.Layouts.AppLayout
      hasScrollView={false}
      contentContainerStyle={styles.contentContainer}>
      <Image source={Constants.Images.TruthDareGameLogo} style={styles.logo} />
      <Image source={Constants.Images.SpinnerLogo} style={styles.spinner} />
      <RowView style={styles.buttonContainer}>
        <ButtonIcon
          style={styles.iconButton}
          isValid
          Icon={<Image source={Constants.Images.PlayIcon} />}
        />
        <ButtonText
          isValid
          Icon={<Image source={Constants.Images.LetsPlayText} />}
        />
      </RowView>
      <RowView style={styles.buttonContainer}>
        <ButtonIcon
          style={styles.iconButton}
          isValid
          Icon={<Image source={Constants.Images.SettingIcon} />}
        />
        <ButtonText
          isValid
          Icon={<Image source={Constants.Images.SettingText} />}
        />
      </RowView>
      <RowView style={styles.buttonContainer}>
        <ButtonIcon
          style={styles.iconButton}
          isValid
          Icon={<Image source={Constants.Images.StarIcon} />}
        />
        <ButtonText
          isValid
          Icon={<Image source={Constants.Images.RateUsText} />}
        />
      </RowView>
    </Components.Layouts.AppLayout>
  );
});

export {LetsPlay};
