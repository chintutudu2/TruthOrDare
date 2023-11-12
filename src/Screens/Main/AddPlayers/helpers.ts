import Constants from '@constants/index';
import {pop, push} from '@helpers/NavigatorHelper';
import hapticFeedback from '@utils/HapticUtils';

function onPressBack() {
  hapticFeedback.triggerImpactHeavy();
  pop();
}

function onPressPlay() {
  hapticFeedback.triggerImpactHeavy();
  push(Constants.NavRoutes.Game);
}

export {onPressBack, onPressPlay};
