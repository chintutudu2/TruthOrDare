import {withRepeat, withSequence, withSpring} from 'react-native-reanimated';
import hapticFeedback from '@utils/HapticUtils';

function onPressSpin(animation: {value: number}) {
  hapticFeedback.triggerImpactHeavy();
  const randomStopAngle = Math.random() * 360;
  animation.value = withRepeat(
    withSequence(
      withSpring(randomStopAngle, {damping: 2, stiffness: 80, velocity: 5}),
    ),
    1,
    false,
  );
}

export {onPressSpin};
