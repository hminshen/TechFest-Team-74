
import React, { createContext, useContext, useState } from 'react';
import { Question } from '../interview/types';

interface QuestionContextProps {
    questions: Question[];
    setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
  }

const QuestionContext = createContext<QuestionContextProps | undefined>({
    questions: [],
    setQuestions: (questions : Question[]) => {},
});

export default QuestionContext;

export const QuestionProvider = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);

  return (
    <QuestionContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionContext.Provider>
  );
};


export function useQuestionContext() {
    return useContext(QuestionContext);
}