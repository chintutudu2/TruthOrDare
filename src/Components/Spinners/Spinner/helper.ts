import {
  runOnJS,
  withRepeat,
  withSequence,
  withSpring,
} from 'react-native-reanimated';
import hapticFeedback from '@utils/HapticUtils';
import Constants from '@constants/index';

function onPressSpin(
  animation: {value: number},
  openSelectModal: React.Dispatch<React.SetStateAction<boolean>>,
) {
  hapticFeedback.triggerImpactHeavy();
  const randomStopAngle = Math.random() * 360;
  animation.value = withRepeat(
    withSequence(
      withSpring(randomStopAngle, {damping: 2, stiffness: 80, velocity: 5}),
    ),
    1,
    false,
    () => {
      runOnJS(openSelectModal)(true);
    },
  );
}

function getBottleImageFromNumber(number: number) {
  switch (number) {
    case 1:
      return Constants.Images.Bottle_1;
    case 2:
      return Constants.Images.Bottle_2;
    case 3:
      return Constants.Images.Bottle_3;
    case 4:
      return Constants.Images.Bottle_4;
    case 5:
      return Constants.Images.Bottle_5;
    case 6:
      return Constants.Images.Bottle_6;
    case 7:
      return Constants.Images.Bottle_7;
    case 8:
      return Constants.Images.Bottle_8;
    case 9:
      return Constants.Images.Bottle_9;
    case 10:
      return Constants.Images.Bottle_10;
    case 11:
      return Constants.Images.Bottle_11;
    case 12:
      return Constants.Images.Bottle_12;
    case 13:
      return Constants.Images.Bottle_13;
    default:
      return Constants.Images.Bottle_1;
  }
}

export {onPressSpin, getBottleImageFromNumber};
