import Components from '@components/index';
import React, {memo} from 'react';
import {styles} from '@screens/Main/LetsPlay/styles';
import {Image} from 'react-native';
import Constants from '@constants/index';
import {ButtonIcon, ButtonText} from '@components/Buttons';
import {RowView} from '@components/Flexs';
import {onPressLetsPlay} from '@screens/Main/LetsPlay/helper';
import {ImageContainer} from '@components/Containers';

const LetsPlay = memo(function LetsPlay(props) {
  return (
    <Components.Layouts.AppLayout
      hasScrollView={false}
      contentContainerStyle={styles.contentContainer}>
      <ImageContainer width={260} height={52} style={styles.logoContainer}>
        <Image
          source={Constants.Images.TruthDareGameLogo}
          style={styles.logo}
        />
      </ImageContainer>
      <ImageContainer width={256} height={256} style={styles.spinnerContainer}>
        <Image source={Constants.Images.SpinnerLogo_1} style={styles.spinner} />
      </ImageContainer>
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
