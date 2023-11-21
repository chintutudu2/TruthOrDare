import Components from '@components/index';
import React, {memo, useEffect, useState} from 'react';
import {styles} from '@screens/Main/Settings/styles';
import {Image, View} from 'react-native';
import Constants from '@constants/index';
import {ButtonIcon, ButtonText} from '@components/Buttons';
import {RowView} from '@components/Flexs';
import {
  getSoundSettingFromAsync,
  onPressBack,
  onPressSound,
} from '@screens/Main/Settings/helpers';
import {ImageContainer} from '@components/Containers';

const Settings = memo(function Settings(props) {
  const [isSoundOn, setIsSoundOn] = useState<boolean>(true);

  useEffect(() => {
    getSoundSettingFromAsync(setIsSoundOn);
  }, []);

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
        {/* TODO: Add when server is added */}
        {/* <RowView style={styles.buttonContainer}>
          <ButtonIcon
            style={styles.iconButton}
            isValid
            Icon={<Image source={Constants.Images.PlusIcon} />}
          />
          <ButtonText isValid text={Constants.Strings.add_truth} />
        </RowView>
        <RowView style={styles.buttonContainer}>
          <ButtonIcon
            style={styles.iconButton}
            isValid
            Icon={<Image source={Constants.Images.PlusIcon} />}
          />
          <ButtonText isValid text={Constants.Strings.add_dare} />
        </RowView> */}
        <RowView style={styles.buttonContainer}>
          <ButtonIcon
            style={styles.iconButton}
            isValid
            Icon={
              <Image
                source={
                  isSoundOn
                    ? Constants.Images.SoundIcon
                    : Constants.Images.SoundIconDisabled
                }
              />
            }
            onPress={() => onPressSound(setIsSoundOn)}
          />
          <ButtonText
            isValid
            text={
              isSoundOn
                ? Constants.Strings.sound_on
                : Constants.Strings.sound_off
            }
            onPress={() => onPressSound(setIsSoundOn)}
          />
        </RowView>
        <RowView style={styles.buttonContainer}>
          <ButtonIcon
            style={styles.iconButton}
            Icon={<Image source={Constants.Images.ShareIcon} />}
          />
          <ButtonText text={Constants.Strings.share} />
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

export {Settings};
