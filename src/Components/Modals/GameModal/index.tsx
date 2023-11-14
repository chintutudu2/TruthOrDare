import {ButtonIcon, ButtonText} from '@components/Buttons';
import {RowView} from '@components/Flexs';
import {GameModalProps} from '@components/Modals/GameModal/interface';
import {styles} from '@components/Modals/GameModal/styles';
import {Colors} from '@constants/Colors';
import Constants from '@constants/index';
import {ModalType} from '@interfaces/ModalInterfaces';
import React, {memo} from 'react';
import {ImageBackground, View, Text, Image} from 'react-native';
import Modal from 'react-native-modal';

const GameModal = memo(function GameModal(props: GameModalProps) {
  const {
    isModalVisible,
    modalType,
    question,
    players,
    onPressPrimaryButton,
    onPressSecondaryButton,
  } = props;

  return (
    <Modal
      isVisible={isModalVisible}
      backdropColor={Colors.white}
      backdropOpacity={0.7}>
      <View style={styles.modalContainer}>
        {modalType == ModalType.Select && (
          <ImageBackground
            source={Constants.Images.SelectModalBackground}
            resizeMode="cover"
            style={styles.selectModal}>
            <ImageBackground
              source={Constants.Images.ModalHeadingBackground}
              resizeMode="cover"
              style={styles.modalHeading}>
              <Text style={styles.modalHeadingText}>Jack's Turn</Text>
            </ImageBackground>
            <ButtonText
              style={styles.selectButton}
              isValid
              background={Constants.Images.GreenModalButtonBg}
              text={Constants.Strings.truth}
              onPress={onPressPrimaryButton}
            />
            <ButtonText
              style={styles.selectButton}
              isValid
              background={Constants.Images.YellowModalButtonBg}
              text={Constants.Strings.dare}
              onPress={onPressSecondaryButton}
            />
          </ImageBackground>
        )}
        {modalType == ModalType.Question && (
          <ImageBackground
            source={Constants.Images.QuestionModalBackground}
            resizeMode="cover"
            style={styles.questionModal}>
            <ImageBackground
              source={Constants.Images.ModalHeadingBackground}
              resizeMode="cover"
              style={styles.modalHeading}>
              <Text style={styles.modalHeadingText}>Jack's Turn</Text>
            </ImageBackground>
            {question && <Text style={styles.question}>{question}</Text>}
            <RowView style={styles.questionButtonContainer}>
              <ButtonText
                style={styles.questionLeftButton}
                isValid
                background={Constants.Images.GreenModalButtonHlfBg}
                text={Constants.Strings.forfeit}
                onPress={onPressPrimaryButton}
              />
              <ButtonText
                style={styles.questionRightButton}
                isValid
                background={Constants.Images.YellowModalButtonHlfBg}
                text={Constants.Strings.done}
                onPress={onPressSecondaryButton}
              />
            </RowView>
          </ImageBackground>
        )}
        {modalType == ModalType.Score && (
          <ImageBackground
            source={Constants.Images.SelectModalBackground}
            resizeMode="cover"
            style={styles.scoreModal}>
            <ImageBackground
              source={Constants.Images.ModalHeadingBackground}
              resizeMode="cover"
              style={styles.modalHeading}>
              <Text style={styles.modalHeadingText}>Score Card</Text>
            </ImageBackground>
            <View style={styles.nameContainer}>
              {players?.map((player, index) => {
                return (
                  <RowView key={index}>
                    <Text style={[styles.modalHeadingText, styles.playerName]}>
                      {player}
                    </Text>
                    <Text style={[styles.modalHeadingText, styles.playerScore]}>
                      03
                    </Text>
                  </RowView>
                );
              })}
            </View>
            <View style={styles.backContainer}>
              <ButtonIcon
                isValid
                Icon={<Image source={Constants.Images.BackIcon} />}
                onPress={onPressPrimaryButton}
              />
            </View>
          </ImageBackground>
        )}
      </View>
    </Modal>
  );
});

export {GameModal};
