import Constants from '@constants/index';
import {pop, push} from '@helpers/NavigatorHelper';
import hapticFeedback from '@utils/HapticUtils';

function onPressAge(ageGroup: string) {
  hapticFeedback.triggerImpactHeavy();
  switch (ageGroup) {
    case Constants.Strings.kids:
      push(Constants.NavRoutes.AddPlayers);
      break;
    case Constants.Strings.teens:
      push(Constants.NavRoutes.AddPlayers);
      break;
    case Constants.Strings.adults:
      push(Constants.NavRoutes.AddPlayers);
      break;
  }
}

function onPressBack() {
  hapticFeedback.triggerImpactHeavy();
  pop();
}

export {onPressAge, onPressBack};
