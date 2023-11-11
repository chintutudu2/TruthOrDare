import Constants from '@constants/index';
import {pop, push} from '@helpers/NavigatorHelper';
import hapticFeedback from '@utils/HapticUtils';

function onPressKids() {
  hapticFeedback.triggerImpactHeavy();
  push(Constants.NavRoutes.AddPlayers);
}

function onPressBack() {
  hapticFeedback.triggerImpactHeavy();
  pop();
}

export {onPressKids, onPressBack};
