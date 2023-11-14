import {ModalType} from '@interfaces/ModalInterfaces';
import {TouchableOpacityProps} from 'react-native';

export interface GameModalProps {
  isModalVisible?: boolean;
  modalType?: ModalType;
  question?: string;
  players?: string[];
  onPressPrimaryButton?: TouchableOpacityProps['onPress'];
  onPressSecondaryButton?: TouchableOpacityProps['onPress'];
}
