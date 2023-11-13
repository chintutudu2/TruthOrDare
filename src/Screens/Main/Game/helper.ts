import Constants from '@constants/index';
import {ModalType} from '@interfaces/ModalInterfaces';
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
  isModalVisible: boolean,
  setIsModalVisible: {
    (value: SetStateAction<boolean>): void;
    (arg0: () => boolean): void;
  },
) {
  hapticFeedback.triggerImpactHeavy();
  setIsModalVisible(() => {
    return !isModalVisible;
  });
}

//TODO: Move bottle number to constant
function onPressBottle(
  bottleNumber: number,
  setBottleNumber: {
    (value: SetStateAction<number>): void;
    (arg0: () => number): void;
  },
) {
  hapticFeedback.triggerImpactHeavy();
  let updatedBottleNumber = bottleNumber > 12 ? 1 : bottleNumber + 1;
  setBottleNumber(() => {
    return updatedBottleNumber;
  });
}

function onPressPrimaryButton(
  type: ModalType,
  isModalVisible: boolean,
  setIsModalVisible: {
    (value: SetStateAction<boolean>): void;
    (arg0: () => boolean): void;
  },
) {
  switch (type) {
    case ModalType.Select:
      setIsModalVisible(() => {
        return !isModalVisible;
      });
      break;
    case ModalType.Question:
      setIsModalVisible(() => {
        return !isModalVisible;
      });
      break;
    case ModalType.Score:
      setIsModalVisible(() => {
        return !isModalVisible;
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

export {
  onPressScore,
  onPressSound,
  onPressPrimaryButton,
  onPressBottle,
  getPlayersFromAsync,
};
