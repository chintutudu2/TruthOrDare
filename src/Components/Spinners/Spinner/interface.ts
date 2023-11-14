import {ImageStyle} from 'react-native';

export interface SpinnerProps {
  style?: ImageStyle;
  playersCount?: number;
  playersName?: string[];
  bottleNumber?: number;
  openSelectModal: React.Dispatch<React.SetStateAction<boolean>>;
}
