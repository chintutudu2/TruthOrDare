import hapticFeedback from '@utils/HapticUtils';
import {push} from '@helpers/NavigatorHelper';
import Constants from '@constants/index';

function onPressLetsPlay() {
  hapticFeedback.triggerImpactHeavy();
  push(Constants.NavRoutes.Age);
}

export {onPressLetsPlay};
