import Components from '@components/index';
import React, {memo, useState} from 'react';
import {styles} from '@screens/Main/Game/styles';
import {Image, View} from 'react-native';
import Constants from '@constants/index';
import {ButtonIcon} from '@components/Buttons';
import {RowView} from '@components/Flexs';
import {ModalType} from '@interfaces/ModalInterfaces';
import {ImageContainer} from '@components/Containers';
import {Spinner} from '@components/Spinners';
import {onPressScore} from '@screens/Main/Game/helper';

//FIXME: Will be removed when store is added
const players: string[] = ['Jackson', 'Scarlett', 'Liam'];

const Game = memo(function Game(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function onPressPrimaryButton(type: ModalType) {
    switch (type) {
      case ModalType.Select:
        setIsModalVisible(false);
        break;
      case ModalType.Question:
        setIsModalVisible(false);
        break;
      case ModalType.Score:
        setIsModalVisible(false);
        break;
    }
  }

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
          <Spinner playersCount={players.length} playersName={players} />
        </View>
      </View>
      <RowView style={styles.footerContainer}>
        <ButtonIcon
          isValid
          Icon={<Image source={Constants.Images.SoundIcon} />}
        />
        <ButtonIcon
          isValid
          Icon={<Image source={Constants.Images.RankIcon} />}
          onPress={() => onPressScore(isModalVisible, setIsModalVisible)}
        />
        <ButtonIcon
          isValid
          Icon={<Image source={Constants.Images.BottleIcon} />}
        />
      </RowView>
      <Components.Modals.GameModal
        isModalVisible={isModalVisible}
        modalType={ModalType.Score}
        question="If you Could have brought any
        special  gift for a birthday party
        what would it be?"
        onPressPrimaryButton={() => onPressPrimaryButton(ModalType.Score)}
      />
    </Components.Layouts.AppLayout>
  );
});

export {Game};
