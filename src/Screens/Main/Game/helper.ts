import hapticFeedback from '@utils/HapticUtils';
import {SetStateAction} from 'react';

function onPressScore(
  isModalVisible: boolean,
  setIsModalVisible: {
    (value: SetStateAction<boolean>): void;
    (arg0: () => boolean): void;
  },
) {
  hapticFeedback.triggerImpactHeavy();
  setIsModalVisible(() => {
    return !isModalVisible;
  });
}

export {onPressScore};
