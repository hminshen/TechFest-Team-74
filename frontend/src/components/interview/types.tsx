export interface PreInterviewFormType {
  job_type: string;
  experience_level: string;
  skills: string[];
  job_description: string;
  resume: string;
  cover_letter: string;
  focus_areas: string[];
}

export interface Question {
  question: string;
  type: string;
}

export interface PostInterviewFormType {
  [key: string]: {
    [key: string]: any;
  };
}