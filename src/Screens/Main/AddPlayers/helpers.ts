import Constants from '@constants/index';
import {pop, push} from '@helpers/NavigatorHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import hapticFeedback from '@utils/HapticUtils';

function onPressBack() {
  hapticFeedback.triggerImpactHeavy();
  pop();
}

function onPressPlay() {
  hapticFeedback.triggerImpactHeavy();
  push(Constants.NavRoutes.Game);
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

// Add new player to async storage on clicking plus icon
async function addPlayerToAsync(
  value: string,
  setPlayers: React.Dispatch<React.SetStateAction<string[]>>,
  setValue: React.Dispatch<React.SetStateAction<string>>,
) {
  try {
    const updatedPlayers = await addPlayerToAsyncStorage(value);
    setValue('');
    setPlayers(updatedPlayers);
  } catch (e) {
    console.log(e);
  }
}
async function addPlayerToAsyncStorage(value: string): Promise<string[]> {
  try {
    const existingPlayers = await AsyncStorage.getItem(
      Constants.AsyncKeys.players,
    );
    const parsedPlayers = existingPlayers ? JSON.parse(existingPlayers) : [];
    let isPlayerPresent = false;
    parsedPlayers.forEach((element: string) => {
      if (element.toLowerCase() == value.toLowerCase()) {
        isPlayerPresent = true;
      }
    });
    let updatedPlayers = [...parsedPlayers];
    if (!isPlayerPresent) {
      updatedPlayers.push(value);
      const jsonValue = JSON.stringify(updatedPlayers);
      await AsyncStorage.setItem(Constants.AsyncKeys.players, jsonValue);
    }
    return updatedPlayers;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Delete player from async storage on clicking trash icon
async function deletePlayerFromAsync(
  value: string,
  setPlayers: React.Dispatch<React.SetStateAction<string[]>>,
) {
  try {
    const updatedPlayers = await deletePlayerFromAsyncStorage(value);
    setPlayers(updatedPlayers);
  } catch (e) {
    console.log(e);
  }
}
async function deletePlayerFromAsyncStorage(value: string): Promise<string[]> {
  try {
    const existingPlayers = await AsyncStorage.getItem(
      Constants.AsyncKeys.players,
    );
    const parsedPlayers: string[] = existingPlayers
      ? JSON.parse(existingPlayers)
      : [];
    const updatedPlayers = parsedPlayers.filter(player => {
      return player !== value;
    });
    const jsonValue = JSON.stringify(updatedPlayers);
    await AsyncStorage.setItem(Constants.AsyncKeys.players, jsonValue);

    return updatedPlayers;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export {
  onPressBack,
  onPressPlay,
  getPlayersFromAsync,
  addPlayerToAsync,
  deletePlayerFromAsync,
};
