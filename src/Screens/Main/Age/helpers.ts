import Constants from '@constants/index';
import {pop, push} from '@helpers/NavigatorHelper';
import {RatingType} from '@interfaces/GlobalInterfaces';
import AsyncStorage from '@react-native-async-storage/async-storage';
import hapticFeedback from '@utils/HapticUtils';

async function onPressAge(rating: RatingType) {
  hapticFeedback.triggerImpactHeavy();
  push(Constants.NavRoutes.AddPlayers);
  try {
    await AsyncStorage.setItem(Constants.AsyncKeys.rating, rating);
  } catch (e) {
    console.log(e);
  }
}

function onPressBack() {
  hapticFeedback.triggerImpactHeavy();
  pop();
}

export {onPressAge, onPressBack};
