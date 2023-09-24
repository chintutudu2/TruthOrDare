import Components from '@components/index';
import React, {memo} from 'react';
import {styles} from '@screens/Main/Age/styles';
import {Image} from 'react-native';
import Constants from '@constants/index';
import {ButtonIcon, ButtonText} from '@components/Buttons';
import {RowView} from '@components/Flexs';
import {onPressKids} from '@screens/Main/Age/helpers';

const Age = memo(function Age(props) {
  return (
    <Components.Layouts.AppLayout
      background={Constants.Images.AppBackground_2}
      hasScrollView={false}
      contentContainerStyle={styles.contentContainer}>
      <Image source={Constants.Images.TruthDareGameLogo} style={styles.logo} />
      <Image source={Constants.Images.SpinnerLogo_1} style={styles.spinner} />
      <RowView style={styles.buttonContainer}>
        <ButtonIcon
          style={styles.iconButton}
          isValid
          Icon={<Image source={Constants.Images.KidsIcon} />}
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
        />
      </RowView>
    </Components.Layouts.AppLayout>
  );
});

export {Age};
