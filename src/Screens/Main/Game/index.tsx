import Components from '@components/index';
import React, {memo, useEffect, useState} from 'react';
import {styles} from '@screens/Main/Game/styles';
import {Image, View} from 'react-native';
import Constants from '@constants/index';
import {ButtonIcon} from '@components/Buttons';
import {RowView} from '@components/Flexs';
import {ModalType, SelectQuestionType} from '@interfaces/ModalInterfaces';
import {ImageContainer} from '@components/Containers';
import {Spinner} from '@components/Spinners';
import {
  getBottleFromAsync,
  getPlayersFromAsync,
  getRatingFromAsync,
  getSoundSettingFromAsync,
  onPressBack,
  onPressBottle,
  onPressPrimaryButton,
  onPressSecondaryButton,
  onPressSound,
  openSelectModal,
} from '@screens/Main/Game/helper';
import {questionApi} from '@api/index';
import {RatingType} from '@interfaces/GlobalInterfaces';

const Game = memo(function Game(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(ModalType.Select);
  const [selectQuestionType, setSelectQuestionType] =
    useState<SelectQuestionType>(SelectQuestionType.Truth);
  const [rating, setRating] = useState<string | null>(RatingType.Kids);
  const [question, setQuestion] = useState<any>(null);
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [bottleNumber, setBottleNumber] = useState<number>(1);
  const [players, setPlayers] = useState<string[]>([]);

  useEffect(() => {
    getPlayersFromAsync(setPlayers);
    getRatingFromAsync(setRating);
    getBottleFromAsync(setBottleNumber);
    getSoundSettingFromAsync(setIsSoundOn);
  }, []);

  useEffect(() => {
    if (!isModalVisible && modalType == ModalType.Question) {
      questionApi(selectQuestionType, rating, setQuestion, setIsModalVisible);
    }
  }, [modalType, isModalVisible]);

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
            openSelectModal={() =>
              openSelectModal(setIsModalVisible, setModalType)
            }
          />
        </View>
      </View>
      <RowView style={styles.footerContainer}>
        <ButtonIcon
          isValid
          Icon={<Image source={Constants.Images.BackIcon} />}
          onPress={() => onPressBack()}
        />
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
          onPress={() => onPressSound(setIsSoundOn)}
        />
        {/* TODO: add this if score needs to be implemented */}
        {/* <ButtonIcon
          isValid
          Icon={<Image source={Constants.Images.RankIcon} />}
          onPress={() => onPressScore(setIsModalVisible, setModalType)}
        /> */}
        <ButtonIcon
          isValid
          Icon={<Image source={Constants.Images.BottleIcon} />}
          onPress={() => onPressBottle(setBottleNumber)}
        />
      </RowView>
      <Components.Modals.GameModal
        isModalVisible={isModalVisible}
        modalType={modalType}
        question={question?.question}
        players={players}
        onPressPrimaryButton={() =>
          onPressPrimaryButton(
            modalType,
            setIsModalVisible,
            setSelectQuestionType,
            setModalType,
          )
        }
        onPressSecondaryButton={() =>
          onPressSecondaryButton(
            modalType,
            setIsModalVisible,
            setSelectQuestionType,
            setModalType,
          )
        }
      />
    </Components.Layouts.AppLayout>
  );
});

export {Game};
