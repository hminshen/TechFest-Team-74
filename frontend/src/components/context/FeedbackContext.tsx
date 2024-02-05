
import React, { createContext, useContext, useState } from 'react';

interface FeedbackContextProps {
    feedback: string;
    setFeedback: React.Dispatch<React.SetStateAction<string>>;
  }

const FeedbackContext = createContext<FeedbackContextProps | undefined>({
    feedback: "",
    setFeedback: (feedback : string) => {},
});

export default FeedbackContext;

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState<string>("");

  return (
    <FeedbackContext.Provider value={{ feedback, setFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};


export function useFeedbackContext() {
    return useContext(FeedbackContext);
}