import Components from '@components/index';
import React, {memo} from 'react';
import {styles} from '@screens/Main/Age/styles';
import {Image} from 'react-native';
import Constants from '@constants/index';
import {ButtonIcon, ButtonText} from '@components/Buttons';
import {RowView} from '@components/Flexs';
import {onPressBack, onPressKids} from '@screens/Main/Age/helpers';
import {ImageContainer} from '@components/Containers';

const Age = memo(function Age(props) {
  return (
    <Components.Layouts.AppLayout
      background={Constants.Images.AppBackground_2}
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
          Icon={<Image source={Constants.Images.KidsIcon} />}
          onPress={onPressKids}
        />
        <ButtonText
          isValid
          text={Constants.Strings.kids}
          onPress={onPressKids}
        />
      </RowView>
      <RowView style={styles.buttonContainer}>
        <ButtonIcon
          style={styles.iconButton}
          isValid
          Icon={<Image source={Constants.Images.TeensIcon} />}
        />
        <ButtonText isValid text={Constants.Strings.teens} />
      </RowView>
      <RowView style={styles.buttonContainer}>
        <ButtonIcon
          style={styles.iconButton}
          isValid
          Icon={<Image source={Constants.Images.AdultsIcon} />}
        />
        <ButtonText isValid text={Constants.Strings.adults} />
      </RowView>
      <RowView style={styles.backButton}>
        <ButtonIcon
          isValid
          Icon={<Image source={Constants.Images.BackIcon} />}
          onPress={onPressBack}
        />
      </RowView>
    </Components.Layouts.AppLayout>
  );
});

export {Age};
