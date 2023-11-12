import Components from '@components/index';
import React, {memo} from 'react';
import {styles} from '@screens/Main/Age/styles';
import {Image, View} from 'react-native';
import Constants from '@constants/index';
import {ButtonIcon, ButtonText} from '@components/Buttons';
import {RowView} from '@components/Flexs';
import {onPressBack, onPressAge} from '@screens/Main/Age/helpers';
import {ImageContainer} from '@components/Containers';

const Age = memo(function Age(props) {
  return (
    <Components.Layouts.AppLayout
      background={Constants.Images.AppBackground_2}
      hasScrollView={false}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <ImageContainer width={260} height={52} style={styles.logoContainer}>
          <Image
            source={Constants.Images.TruthDareGameLogo}
            style={styles.logo}
          />
        </ImageContainer>
        <ImageContainer
          width={256}
          height={256}
          style={styles.spinnerContainer}>
          <Image
            source={Constants.Images.SpinnerLogo_1}
            style={styles.spinner}
          />
        </ImageContainer>
        <RowView style={styles.buttonContainer}>
          <ButtonIcon
            style={styles.iconButton}
            isValid
            Icon={<Image source={Constants.Images.KidsIcon} />}
            onPress={() => onPressAge(Constants.Strings.kids)}
          />
          <ButtonText
            isValid
            text={Constants.Strings.kids}
            onPress={() => onPressAge(Constants.Strings.kids)}
          />
        </RowView>
        <RowView style={styles.buttonContainer}>
          <ButtonIcon
            style={styles.iconButton}
            isValid
            Icon={<Image source={Constants.Images.TeensIcon} />}
            onPress={() => onPressAge(Constants.Strings.kids)}
          />
          <ButtonText
            isValid
            text={Constants.Strings.teens}
            onPress={() => onPressAge(Constants.Strings.kids)}
          />
        </RowView>
        <RowView style={styles.buttonContainer}>
          <ButtonIcon
            style={styles.iconButton}
            isValid
            Icon={<Image source={Constants.Images.AdultsIcon} />}
            onPress={() => onPressAge(Constants.Strings.kids)}
          />
          <ButtonText
            isValid
            text={Constants.Strings.adults}
            onPress={() => onPressAge(Constants.Strings.kids)}
          />
        </RowView>
      </View>
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
