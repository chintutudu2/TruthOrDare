import Components from '@components/index';
import React, {memo} from 'react';
import {styles} from '@screens/Main/AddPlayers/style';
import {Image, View} from 'react-native';
import Constants from '@constants/index';
import {ButtonIcon, ButtonText} from '@components/Buttons';
import {RowView} from '@components/Flexs';
import {ImageContainer} from '@components/Containers';
import {onPressBack, onPressPlay} from '@screens/Main/AddPlayers/helpers';
import {InputText} from '@components/Inputs';

const AddPlayers = memo(function AddPlayers(props) {
  return (
    <Components.Layouts.AppLayout
      background={Constants.Images.AppBackground_3}
      hasScrollView={false}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <ImageContainer width={183} height={52} style={styles.logoContainer}>
          <Image source={Constants.Images.AddPlayersText} style={styles.logo} />
        </ImageContainer>
        <RowView style={styles.nameRow}>
          <InputText />
          <ButtonIcon
            style={styles.iconButton}
            isValid
            Icon={<Image source={Constants.Images.PlusIcon} />}
          />
        </RowView>
        <RowView style={styles.nameRow}>
          <ButtonText
            background={Constants.Images.ButtonTextBgBlue}
            style={styles.buttonTextContainer}
            text={'Lissa'}
          />
          <ButtonIcon
            background={Constants.Images.ButtonIconBgRed}
            style={styles.iconButton}
            isValid
            Icon={<Image source={Constants.Images.DeleteIcon} />}
          />
        </RowView>
        <RowView style={styles.nameRow}>
          <ButtonText
            background={Constants.Images.ButtonTextBgBlue}
            style={styles.buttonTextContainer}
            text={'Sharlo'}
          />
          <ButtonIcon
            background={Constants.Images.ButtonIconBgRed}
            style={styles.iconButton}
            isValid
            Icon={<Image source={Constants.Images.DeleteIcon} />}
          />
        </RowView>
        <RowView style={styles.nameRow}>
          <ButtonText
            background={Constants.Images.ButtonTextBgBlue}
            style={styles.buttonTextContainer}
            text={'jack'}
          />
          <ButtonIcon
            background={Constants.Images.ButtonIconBgRed}
            style={styles.iconButton}
            isValid
            Icon={<Image source={Constants.Images.DeleteIcon} />}
          />
        </RowView>
      </View>
      <RowView style={styles.footerContainer}>
        <ButtonIcon
          isValid
          Icon={<Image source={Constants.Images.BackIcon} />}
          onPress={onPressBack}
        />
        <ButtonIcon
          isValid
          Icon={<Image source={Constants.Images.PlayIcon} />}
          onPress={onPressPlay}
        />
      </RowView>
    </Components.Layouts.AppLayout>
  );
});

export {AddPlayers};
