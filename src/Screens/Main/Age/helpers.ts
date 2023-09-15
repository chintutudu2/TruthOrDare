import hapticFeedback from '@utils/HapticUtils';

function onPressKids() {
  hapticFeedback.triggerImpactHeavy();
}

export {onPressKids};
