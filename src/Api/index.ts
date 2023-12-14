import {SelectQuestionType} from '@interfaces/ModalInterfaces';

export const questionApi = async (
  game: SelectQuestionType,
  rating: string | null,
): Promise<any> => {
  try {
    const res = await fetch(
      `https://api.truthordarebot.xyz/v1/${game}?rating=${rating}`,
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
