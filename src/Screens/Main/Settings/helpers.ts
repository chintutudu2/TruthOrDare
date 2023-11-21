import Constants from '@constants/index';
import {pop} from '@helpers/NavigatorHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import hapticFeedback from '@utils/HapticUtils';

function onPressBack() {
  hapticFeedback.triggerImpactHeavy();
  pop();
}

async function onPressSound(
  setIsSoundOn: React.Dispatch<React.SetStateAction<boolean>>,
) {
  hapticFeedback.triggerImpactHeavy();
  const updatedSound = await updateSoundAsync();
  setIsSoundOn(updatedSound);
}
async function updateSoundAsync(): Promise<boolean> {
  try {
    const existingSound = await AsyncStorage.getItem(Constants.AsyncKeys.sound);
    if (existingSound == 'false') {
      await AsyncStorage.setItem(Constants.AsyncKeys.sound, 'true');
      return true;
    } else {
      await AsyncStorage.setItem(Constants.AsyncKeys.sound, 'false');
      return false;
    }
  } catch (error) {
    console.error(error);
    return true;
  }
}

// Update state in initial render
async function getSoundSettingFromAsync(
  setIsSoundOn: React.Dispatch<React.SetStateAction<boolean>>,
) {
  try {
    const soundFlag = await AsyncStorage.getItem(Constants.AsyncKeys.sound);
    if (soundFlag == undefined || soundFlag == null) {
      await AsyncStorage.setItem(Constants.AsyncKeys.sound, 'true');
      setIsSoundOn(true);
    } else {
      setIsSoundOn(soundFlag == 'true' ? true : false);
    }
  } catch (e) {
    console.log(e);
  }
}

export {onPressBack, onPressSound, getSoundSettingFromAsync};
