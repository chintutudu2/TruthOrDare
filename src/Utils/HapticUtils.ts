import {trigger as triggerHapticFeedback} from 'react-native-haptic-feedback';

class HapticFeedbackSingleton {
  private static instance: HapticFeedbackSingleton | null = null;

  private constructor() {}

  public static getInstance(): HapticFeedbackSingleton {
    if (HapticFeedbackSingleton.instance === null) {
      HapticFeedbackSingleton.instance = new HapticFeedbackSingleton();
    }
    return HapticFeedbackSingleton.instance;
  }

  private options = {
    enableVibrateFallback: true,
    ignoreAndroidSystemSettings: false,
  };

  public triggerImpactLight() {
    triggerHapticFeedback('impactLight', this.options);
  }

  public triggerImpactMedium() {
    triggerHapticFeedback('impactMedium', this.options);
  }

  public triggerImpactHeavy() {
    triggerHapticFeedback('impactHeavy', this.options);
  }
}

const hapticFeedback = HapticFeedbackSingleton.getInstance();
export default hapticFeedback;
