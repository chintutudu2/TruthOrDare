import {GameModelType, RatingModelType} from '@interfaces/GlobalInterfaces';

export type GameQuestion = {
  id: string;
  type: GameModelType;
  rating: RatingModelType;
  question: string;
};
