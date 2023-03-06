import React from "react";
import { Content, Question } from "../../interfaces";
import QuestionBlock from "./QuestionBlock";

const QuestionsBlock = ({
  quizItem,
  chosenAnswerItems,
  setChosenAnswerItems,
  unansweredQuestionIds,
  setUnansweredQuestionIds,
}: {
  quizItem: Content;
  chosenAnswerItems: string[];
  setChosenAnswerItems: Function;
  unansweredQuestionIds: number[] | undefined;
  setUnansweredQuestionIds: Function;
}) => {
  return (
    <>
      <h2
        id={String(quizItem.id)}
        className="text-purple-500 text-2xl underline underline-offset-4 text-center py-4"
      >
        {quizItem.text}
      </h2>
      <div className="py-6 flex flex-wrap justify-center mx-10">
        {" "}
        {quizItem?.questions.map((question: Question, _index: number) => (
          <QuestionBlock
            key={_index}
            quizItemId={quizItem.id}
            question={question}
            chosenAnswerItems={chosenAnswerItems}
            setChosenAnswerItems={setChosenAnswerItems}
            unansweredQuestionIds={unansweredQuestionIds}
            setUnansweredQuestionIds={setUnansweredQuestionIds}
          />
        ))}
      </div>
    </>
  );
};

export default QuestionsBlock;
