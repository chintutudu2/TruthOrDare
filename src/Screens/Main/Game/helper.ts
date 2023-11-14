import Constants from '@constants/index';
import {RatingType} from '@interfaces/GlobalInterfaces';
import {ModalType, SelectQuestionType} from '@interfaces/ModalInterfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';
import hapticFeedback from '@utils/HapticUtils';
import {SetStateAction} from 'react';

function onPressSound(
  isSoundOn: boolean,
  setIsSoundOn: {
    (value: SetStateAction<boolean>): void;
    (arg0: () => boolean): void;
  },
) {
  hapticFeedback.triggerImpactHeavy();
  setIsSoundOn(() => {
    return !isSoundOn;
  });
}

function onPressScore(
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
  setModalType: React.Dispatch<React.SetStateAction<ModalType>>,
) {
  hapticFeedback.triggerImpactHeavy();
  setModalType(ModalType.Score);
  setIsModalVisible(prevState => {
    return !prevState;
  });
}

async function onPressBottle(
  setBottleNumber: React.Dispatch<React.SetStateAction<number>>,
) {
  hapticFeedback.triggerImpactHeavy();
  const updatedBottleNumber = await updateBottleNumberAsync();
  setBottleNumber(updatedBottleNumber);
}
async function updateBottleNumberAsync(): Promise<number> {
  try {
    const existingBottle = await AsyncStorage.getItem(
      Constants.AsyncKeys.bottle,
    );
    const parsedBottle = existingBottle ? parseInt(existingBottle) : 1;
    let updatedBottle = parsedBottle > 12 ? 1 : parsedBottle + 1;
    await AsyncStorage.setItem(
      Constants.AsyncKeys.bottle,
      updatedBottle.toString(),
    );
    return updatedBottle;
  } catch (error) {
    console.error(error);
    return 1;
  }
}

function onPressPrimaryButton(
  type: ModalType,
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
  setSelectQuestionType: React.Dispatch<
    React.SetStateAction<SelectQuestionType>
  >,
  setModalType: React.Dispatch<React.SetStateAction<ModalType>>,
) {
  switch (type) {
    case ModalType.Select:
      setIsModalVisible(prevState => {
        return !prevState;
      });
      setModalType(ModalType.Question);
      setSelectQuestionType(SelectQuestionType.Truth);
      break;
    case ModalType.Question:
      setIsModalVisible(prevState => {
        return !prevState;
      });
      setModalType(ModalType.Select);
      break;
    case ModalType.Score:
      setIsModalVisible(prevState => {
        return !prevState;
      });
      break;
  }
}

function onPressSecondaryButton(
  type: ModalType,
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
  setSelectQuestionType: React.Dispatch<
    React.SetStateAction<SelectQuestionType>
  >,
  setModalType: React.Dispatch<React.SetStateAction<ModalType>>,
) {
  switch (type) {
    case ModalType.Select:
      setIsModalVisible(prevState => {
        return !prevState;
      });
      setModalType(ModalType.Question);
      setSelectQuestionType(SelectQuestionType.Dare);
      break;
    case ModalType.Question:
      setIsModalVisible(prevState => {
        return !prevState;
      });
      setModalType(ModalType.Select);
      break;
    case ModalType.Score:
      setIsModalVisible(prevState => {
        return !prevState;
      });
      break;
  }
}

// Update state in initial render
async function getPlayersFromAsync(
  setPlayers: React.Dispatch<React.SetStateAction<string[]>>,
) {
  try {
    const jsonValue = await AsyncStorage.getItem(Constants.AsyncKeys.players);
    const parsedValue = jsonValue ? JSON.parse(jsonValue) : [];
    setPlayers(parsedValue);
  } catch (e) {
    console.log(e);
  }
}
async function getRatingFromAsync(
  setRating: React.Dispatch<React.SetStateAction<string | null>>,
) {
  try {
    const rating = await AsyncStorage.getItem(Constants.AsyncKeys.rating);
    setRating(rating);
  } catch (e) {
    console.log(e);
  }
}
async function getBottleFromAsync(
  setBottleNumber: React.Dispatch<React.SetStateAction<number>>,
) {
  try {
    const bottle = await AsyncStorage.getItem(Constants.AsyncKeys.bottle);
    setBottleNumber(bottle ? parseInt(bottle) : 1);
  } catch (e) {
    console.log(e);
  }
}

function openSelectModal(
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
  setModalType: React.Dispatch<React.SetStateAction<ModalType>>,
) {
  setIsModalVisible(true);
  setModalType(ModalType.Select);
}

export {
  onPressScore,
  onPressSound,
  onPressPrimaryButton,
  onPressSecondaryButton,
  onPressBottle,
  getPlayersFromAsync,
  getRatingFromAsync,
  getBottleFromAsync,
  openSelectModal,
};
