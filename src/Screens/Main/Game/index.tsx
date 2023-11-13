import Components from '@components/index';
import React, {memo, useEffect, useState} from 'react';
import {styles} from '@screens/Main/Game/styles';
import {Image, View} from 'react-native';
import Constants from '@constants/index';
import {ButtonIcon} from '@components/Buttons';
import {RowView} from '@components/Flexs';
import {ModalType} from '@interfaces/ModalInterfaces';
import {ImageContainer} from '@components/Containers';
import {Spinner} from '@components/Spinners';
import {
  getPlayersFromAsync,
  onPressBottle,
  onPressPrimaryButton,
  onPressScore,
  onPressSound,
} from '@screens/Main/Game/helper';

const Game = memo(function Game(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [bottleNumber, setBottleNumber] = useState(1);
  const [players, setPlayers] = useState<string[]>([]);

  useEffect(() => {
    getPlayersFromAsync(setPlayers);
  }, []);

  return (
    <Components.Layouts.AppLayout
      background={Constants.Images.AppBackground_3}
      hasScrollView={false}
      contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <ImageContainer width={260} height={52} style={styles.logoContainer}>
          <Image
            source={Constants.Images.TruthDareGameLogo}
            style={styles.logo}
          />
        </ImageContainer>
        <View style={styles.spinnerContainer}>
          <Spinner
            playersCount={players.length}
            playersName={players}
            bottleNumber={bottleNumber}
          />
        </View>
      </View>
      <RowView style={styles.footerContainer}>
        <ButtonIcon
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
          onPress={() => onPressSound(isSoundOn, setIsSoundOn)}
        />
        <ButtonIcon
          isValid
          Icon={<Image source={Constants.Images.RankIcon} />}
          onPress={() => onPressScore(isModalVisible, setIsModalVisible)}
        />
        <ButtonIcon
          isValid
          Icon={<Image source={Constants.Images.BottleIcon} />}
          onPress={() => onPressBottle(bottleNumber, setBottleNumber)}
        />
      </RowView>
      <Components.Modals.GameModal
        isModalVisible={isModalVisible}
        modalType={ModalType.Score}
        question="If you Could have brought any
        special  gift for a birthday party
        what would it be?"
        onPressPrimaryButton={() =>
          onPressPrimaryButton(
            ModalType.Score,
            isModalVisible,
            setIsModalVisible,
          )
        }
      />
    </Components.Layouts.AppLayout>
  );
});

export {Game};
