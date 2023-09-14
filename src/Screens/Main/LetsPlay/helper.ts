import hapticFeedback from '@utils/HapticUtils';

function onPressLetsPlay() {
  hapticFeedback.triggerImpactHeavy();
}

export {onPressLetsPlay};
