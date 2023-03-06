//Interface the whole data in our quiz = answers(combination) + content(title + picture)
interface QuizData {
  title: string; //of the quiz
  subtitle: string; //This quiz isn't cheesy or anything like that...
  quizId: string;
  content: Content[]; //3 set of questions + questions[text + image]
  answers: Answer[]; //all the possible combination of answers [image + the cheese you're]
}

//Interface for the content
//QuizData -> Content -> Question
interface Content {
  id: number;
  text: string;
  questions: Question[];
}

interface Question {
  text: string;
  credit: string;
  image: string;
  alt: string;
}

//QuizData -> Answer
interface Answer {
  alt: string;
  image: string;
  text: string;
  combination: string[];
}

export type { QuizData, Content, Question, Answer };
