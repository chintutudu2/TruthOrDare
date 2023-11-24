import Components from '@components/index';
import React, {memo, useEffect, useState} from 'react';
import {styles} from '@screens/Main/AddPlayers/style';
import {Image, View} from 'react-native';
import Constants from '@constants/index';
import {ButtonIcon, ButtonText} from '@components/Buttons';
import {RowView} from '@components/Flexs';
import {ImageContainer} from '@components/Containers';
import {
  getPlayersFromAsync,
  onPressBack,
  onPressPlay,
  addPlayerToAsync,
  deletePlayerFromAsync,
} from '@screens/Main/AddPlayers/helpers';
import {InputText} from '@components/Inputs';

const AddPlayers = memo(function AddPlayers(props) {
  const [players, setPlayers] = useState<string[]>([]);
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    getPlayersFromAsync(setPlayers);
  }, []);

  return (
    <Components.Layouts.AppLayout
      background={Constants.Images.AppBackground_3}
      hasScrollView={false}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <ImageContainer width={183} height={52} style={styles.logoContainer}>
          <Image source={Constants.Images.AddPlayersText} style={styles.logo} />
        </ImageContainer>
        {players && players.length < 6 && (
          <RowView style={styles.nameRow}>
            <InputText value={value} onChangeText={setValue} />
            <ButtonIcon
              style={styles.iconButton}
              isValid={value.trim().length > 0}
              Icon={<Image source={Constants.Images.PlusIcon} />}
              onPress={() => addPlayerToAsync(value, setPlayers, setValue)}
            />
          </RowView>
        )}
        {players?.map((player, index) => {
          return (
            <RowView style={styles.nameRow} key={index}>
              <ButtonText
                background={Constants.Images.ButtonTextBgBlue}
                style={styles.buttonTextContainer}
                text={player}
              />
              <ButtonIcon
                background={Constants.Images.ButtonIconBgRed}
                style={styles.iconButton}
                isValid
                Icon={<Image source={Constants.Images.DeleteIcon} />}
                onPress={() => deletePlayerFromAsync(player, setPlayers)}
              />
            </RowView>
          );
        })}
      </View>
      <RowView style={styles.footerContainer}>
        <ButtonIcon
          isValid
          Icon={<Image source={Constants.Images.BackIcon} />}
          onPress={onPressBack}
        />
        <ButtonIcon
          isValid={players ? players.length > 1 : false}
          Icon={<Image source={Constants.Images.PlayIcon} />}
          onPress={onPressPlay}
        />
      </RowView>
    </Components.Layouts.AppLayout>
  );
});

export {AddPlayers};
