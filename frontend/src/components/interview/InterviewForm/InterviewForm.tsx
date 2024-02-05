import { useState, useEffect } from 'react';
import { PreInterviewFormType, Question } from '../types';
import {
    TextField,
    TextareaAutosize,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Chip,
    Autocomplete,
    Container
  } from '@mui/material';
import bardService from '../../../services/bard';
import { PreInterviewFormDiv, PreInterviewFormrH1 } from './style';
import { useRouter } from 'next/router';
import InterviewQuestion from '../InterviewQuestion/InterviewQuestion';
import { useQuestionContext } from '../../context/QuestionContext';

const InterviewForm = () => {
    const {questions, setQuestions} = useQuestionContext();
    
      const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
      const [userResponses, setUserResponses] = useState([]);
    
      const handleAnswer = (answer) => {
        setUserResponses([...userResponses, answer]);
    
        if (currentQuestionIndex < questions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
      };
    
      const handleInterviewCompletion = () => {
        console.log('Interview Completed!');
        console.log('User Responses:', userResponses);
    
        const interviewData = questions.reduce((acc, question, index) => {
          acc[question.question] = userResponses[index];
          return acc;
        }, {});
    
        console.log('Interview Data (JSON):', JSON.stringify(interviewData, null, 2));
      };
    
      return (
        <Container maxWidth="sm">
          <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>Job Interview Simulation</h1>
            <div>
              {questions.map((question, index) => (
                <InterviewQuestion
                  key={index}
                  question={question.question}
                  onAnswer={(answer) => handleAnswer(answer)}
                />
              ))}
            </div>
            {currentQuestionIndex >= questions.length -1 && (
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleInterviewCompletion}
                >
                  Complete Interview
                </Button>
              </div>
            )}
          </div>
        </Container>
      );
    };

export default InterviewForm;


const top30skills = [
    { "name": "Python programming" },
    { "name": "Data analysis" },
    { "name": "Machine learning" },
    { "name": "JavaScript" },
    { "name": "React.js" },
    { "name": "Node.js" },
    { "name": "SQL" },
    { "name": "HTML" },
    { "name": "CSS" },
    { "name": "Java" },
    { "name": "C++" },
    { "name": "Git" },
    { "name": "Docker" },
    { "name": "AWS" },
    { "name": "RESTful API" },
    { "name": "Linux" },
    { "name": "Redux" },
    { "name": "Vue.js" },
    { "name": "Angular" },
    { "name": "Firebase" },
    { "name": "TensorFlow" },
    { "name": "PyTorch" },
    { "name": "HTML5" },
    { "name": "SASS/SCSS" },
    { "name": "TypeScript" },
    { "name": "GraphQL" },
    { "name": "Kubernetes" },
    { "name": "Jenkins" },
    { "name": "Blockchain" }
  ]