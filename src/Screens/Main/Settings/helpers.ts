import {pop} from '@helpers/NavigatorHelper';
import hapticFeedback from '@utils/HapticUtils';

function onPressBack() {
  hapticFeedback.triggerImpactHeavy();
  pop();
}

export {onPressBack};
