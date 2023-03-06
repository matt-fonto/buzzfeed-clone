import React from "react";
import { QuizData } from "../../interfaces";

const Title = ({
  title,
  subtitle,
}: {
  title: QuizData["title"] | undefined;
  subtitle: QuizData["subtitle"] | undefined;
}) => {
  return (
    <div>
      <h2 className="text-4xl text-center p-10 font-bold text-purple-500">
        {title}
      </h2>
      <h4 className="text-2xl text-center p-5 font-bold">{subtitle}</h4>
    </div>
  );
};

export default Title;
