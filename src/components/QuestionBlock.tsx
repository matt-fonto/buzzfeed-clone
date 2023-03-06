import React from "react";
import { Question } from "../../interfaces";
import { AiOutlineCamera } from "react-icons/ai";

const QuestionBlock = ({
  //props
  quizItemId,
  question,
  chosenAnswerItems,
  setChosenAnswerItems,
  unansweredQuestionIds,
  setUnansweredQuestionIds,
}: {
  //types
  quizItemId: number;
  question: Question;
  chosenAnswerItems: string[];
  setChosenAnswerItems: Function;
  unansweredQuestionIds: number[] | undefined;
  setUnansweredQuestionIds: Function;
}) => {
  function handleClick() {
    setChosenAnswerItems((prevState: string[]) => [
      ...prevState,
      question.text,
    ]);

    setUnansweredQuestionIds(
      unansweredQuestionIds?.filter((id: number) => id !== quizItemId)
    );
  }

  const validPick =
    !chosenAnswerItems?.includes(question.text) &&
    !unansweredQuestionIds?.includes(quizItemId);

  return (
    <div className="flex justify-center mb-4">
      <button className="px-2" onClick={handleClick}>
        <img
          className="rounded-lg hover:-translate-y-2 duration-500"
          src={question.image}
          alt={question.alt}
        />
        <div className="flex justify-center items-center">
          <h3 className="text-purple-300 p-2">{question.text}</h3>
        </div>
        <p>
          <div className="flex justify-center items-center gap-x-2">
            <AiOutlineCamera />
            <a href={question.image}>{question.credit} </a>
          </div>
          <a href="https://www.unsplash.com" className="text-gray-500">
            Unsplash
          </a>
        </p>
      </button>
    </div>
  );
};

export default QuestionBlock;
