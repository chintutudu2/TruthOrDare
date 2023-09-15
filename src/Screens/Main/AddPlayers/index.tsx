import Components from '@components/index';
import React, {memo} from 'react';
import {styles} from '@screens/Main/AddPlayers/style';
import {Image, View} from 'react-native';
import Constants from '@constants/index';
import {ButtonIcon, ButtonText} from '@components/Buttons';
import {RowView} from '@components/Flexs';

const AddPlayers = memo(function AddPlayers(props) {
  return (
    <Components.Layouts.AppLayout
      background={Constants.Images.AppBackground_3}
      hasScrollView={false}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.viewContainer}>
        <Image source={Constants.Images.AddPlayersText} style={styles.logo} />
        <RowView style={styles.buttonContainer}>
          <ButtonText
            background={Constants.Images.ButtonTextBgBlue}
            style={styles.buttonTextContainer}
            isValid
            Icon={<Image source={Constants.Images.KidsText} />}
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
          style={styles.iconButton}
          isValid
          Icon={<Image source={Constants.Images.BackIcon} />}
        />
        <ButtonIcon
          style={styles.iconButton}
          isValid
          Icon={<Image source={Constants.Images.PlayIcon} />}
        />
      </RowView>
    </Components.Layouts.AppLayout>
  );
});

export {AddPlayers};
