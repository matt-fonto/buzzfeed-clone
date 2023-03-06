import React, { useEffect, useState } from "react";
import { Content, QuizData } from "../interfaces";
import QuestionsBlock from "./components/QuestionsBlock";
import AnswerBlock from "./components/AnswerBlock";
import Title from "./components/Title";
import { log } from "console";

function App() {
  const [quiz, setQuiz] = useState<QuizData | null>();
  //useState = to add state to the component, <String[]> type annotation in TS to indicate the state will be a an array of strings
  const [chosenAnswerItems, setChosenAnswerItems] = useState<string[]>([]);
  const [unansweredQuestionIds, setUnansweredQuestionIds] = useState<
    number[] | undefined
  >([]); //array of numbers
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  //Function responsible for getting the data
  const fetchData = async () => {
    try {
      //fetch(protocol://adress/path)
      const response = await fetch("http://localhost:4000/");
      const data = await response.json();
      setQuiz(data);
    } catch (error) {
      console.log(error);
    }
  };

  //Call fetchData as soon as the app loads
  useEffect(() => {
    fetchData();
  }, []);

  //Check the group of questions that the user is answering.
  //Since there are, in this case, 3 blocks of questions:
  //"Pick a vacation destination[0]"; "Pick some food[1]; "Pick a home[2]"
  //we want to know which group of questions the user is answering
  useEffect(() => {
    let unansweredIds = quiz?.content?.map(({ id }: Content) => id);
    setUnansweredQuestionIds(unansweredIds);
  }, [quiz]);

  // console.log(chosenAnswerItems);
  // console.log(unansweredQuestionIds);

  //uef = code snippet useEffect
  //usf = code snippet useState
  //scrolling into view from the beginning
  useEffect(() => {
    if (unansweredQuestionIds) {
      if (unansweredQuestionIds.length <= 0 && chosenAnswerItems.length >= 1) {
        setShowAnswer(true);
        const answerBlock = document.getElementById("answer-block");

        answerBlock?.scrollIntoView({ behavior: "smooth" });
      }
      //return the smallest number
      const highestId = Math.min(...unansweredQuestionIds);

      const highestElement = document.getElementById(String(highestId));
      highestElement?.scrollIntoView({ behavior: "smooth" });
    }
  }, [unansweredQuestionIds, chosenAnswerItems, showAnswer]);

  function playAgain() {
    window.location.reload();
  }

  return (
    <div className="text-gray-100">
      <Title title={quiz?.title} subtitle={quiz?.subtitle} />
      {quiz?.content.map((content: Content, id: Content["id"]) => {
        return (
          <QuestionsBlock
            key={id}
            quizItem={content}
            chosenAnswerItems={chosenAnswerItems}
            setChosenAnswerItems={setChosenAnswerItems}
            unansweredQuestionIds={unansweredQuestionIds}
            setUnansweredQuestionIds={setUnansweredQuestionIds}
          />
        );
      })}
      {showAnswer && (
        <div>
          <AnswerBlock
            answerOptions={quiz?.answers}
            chosenAnswers={chosenAnswerItems}
          />

          <button
            className="flex justify-center mx-auto my-4 bg-purple-700 rounded p-2 mb-[10vh]"
            onClick={playAgain}
          >
            Play Again!
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
