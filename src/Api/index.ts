import {SelectQuestionType} from '@interfaces/ModalInterfaces';

export const questionApi = async (
  game: SelectQuestionType,
  rating: string | null,
  setQuestion: React.Dispatch<React.SetStateAction<any>>,
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  try {
    const res = await fetch(
      `https://api.truthordarebot.xyz/v1/${game}?rating=${rating}`,
    );
    const data = await res.json();
    setQuestion(data);
    setIsModalVisible(true);
  } catch (err) {
    console.log(err);
  }
};
