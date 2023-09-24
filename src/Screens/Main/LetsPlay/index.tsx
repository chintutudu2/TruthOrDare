import Components from '@components/index';
import React, {memo} from 'react';
import {styles} from '@screens/Main/LetsPlay/styles';
import {Image} from 'react-native';
import Constants from '@constants/index';
import {ButtonIcon, ButtonText} from '@components/Buttons';
import {RowView} from '@components/Flexs';
import {onPressLetsPlay} from '@screens/Main/LetsPlay/helper';

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
          text={Constants.Strings.lets_play}
          onPress={onPressLetsPlay}
        />
      </RowView>
      <RowView style={styles.buttonContainer}>
        <ButtonIcon
          style={styles.iconButton}
          isValid
          Icon={<Image source={Constants.Images.SettingIcon} />}
        />
        <ButtonText isValid text={Constants.Strings.setting} />
      </RowView>
      <RowView style={styles.buttonContainer}>
        <ButtonIcon
          style={styles.iconButton}
          isValid
          Icon={<Image source={Constants.Images.StarIcon} />}
        />
        <ButtonText isValid text={Constants.Strings.rate_us} />
      </RowView>
    </Components.Layouts.AppLayout>
  );
});

export {LetsPlay};
