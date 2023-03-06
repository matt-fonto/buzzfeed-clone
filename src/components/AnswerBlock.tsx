import React, { useState, useEffect } from "react";
import { Answer } from "../../interfaces";

const AnswerBlock = ({
  answerOptions,
  chosenAnswers,
}: {
  answerOptions: Answer[] | undefined;
  chosenAnswers: string[];
}) => {
  const [result, setResult] = useState<Answer | null>();

  //check if the answers we have match the combination in the database
  useEffect(() => {
    //answerOptions = coming from the database
    answerOptions?.forEach((answer: Answer) => {
      if (
        //chosenAnswers = the array we've got from the client
        chosenAnswers.includes(answer.combination[0]) &&
        chosenAnswers.includes(answer.combination[1]) &&
        chosenAnswers.includes(answer.combination[2])
      ) {
        setResult(answer);
      }
    });
  }, [chosenAnswers]);

  console.log(result);

  return (
    <div
      id="answer-block"
      className="flex flex-wrap mx-[20%] justify-evenly items-center h-[30vh]"
    >
      <h2 className="text-center text-2xl pr-4 md:pr-0">
        You are a{" "}
        <span className="text-purple-400 font-bold">{result?.text}</span>
      </h2>
      <img
        src={result?.image}
        alt={result?.text}
        className="border border-purple-400 rounded h-max"
      />
    </div>
  );
};

export default AnswerBlock;
