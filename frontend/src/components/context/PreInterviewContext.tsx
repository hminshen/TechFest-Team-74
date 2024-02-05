
import React, { createContext, useContext, useState } from 'react';
import { PreInterviewFormType } from '../interview/types';

interface PreInterviewContextProps {
    preInterviewInfo: PreInterviewFormType;
    setPreInterviewInfo: React.Dispatch<React.SetStateAction<PreInterviewFormType>>;
  }

const PreInterviewContext = createContext<PreInterviewContextProps | undefined>({
    preInterviewInfo: {
        job_type: "",
        experience_level: "",
        skills: [],
        job_description: "",
        resume: "",
        cover_letter: "",
        focus_areas: [],
    },
    setPreInterviewInfo: (preInterviewInfo : PreInterviewFormType) => {},
});

export default PreInterviewContext;

export const PreInterviewInfoProvider = ({ children }) => {
  const [preInterviewInfo, setPreInterviewInfo] = useState<PreInterviewFormType>({
        job_type: "",
        experience_level: "",
        skills: [],
        job_description: "",
        resume: "",
        cover_letter: "",
        focus_areas: [],
  });

  return (
    <PreInterviewContext.Provider value={{ preInterviewInfo, setPreInterviewInfo }}>
      {children}
    </PreInterviewContext.Provider>
  );
};


export function usePreInterviewInfoContext() {
    return useContext(PreInterviewContext);
}