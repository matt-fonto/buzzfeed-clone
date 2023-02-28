interface QuizData {
  title: string;
  subtitle: string;
  quizId: string;
  content: Content[];
  answer: Answer[];
}

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

interface Answer {
  alt: string;
  image: string;
  text: string;
  combination: string[];
}

export type { QuizData, Content, Question, Answer };
