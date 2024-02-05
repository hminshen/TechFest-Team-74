import { useEffect, useState } from 'react';
import {
    Button,
    Container
  } from '@mui/material';
import InterviewQuestion from '../InterviewQuestion/InterviewQuestion';
import { useQuestionContext } from '../../context/QuestionContext';
import { usePreInterviewInfoContext } from '../../context/PreInterviewContext';
import bardService from '../../../services/bard';
import router from 'next/router';
import merge from 'lodash';
import { useFeedbackContext } from '../../context/FeedbackContext';
import { PostInterviewFormType } from '../types';

function mergeDeep(target, source) {
  for (const key in source) {
    if (typeof source[key] === 'object' && source[key] !== null) {
      target[key] = mergeDeep(target[key] || {}, source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}
const InterviewForm = () => {
      const {questions, setQuestions} = useQuestionContext();
      /*
      const questions = [
        {"question":"Tell me about a project you've worked on that involved collecting and processing data.", "type":"behavioral"},
        {"question":"Describe your experience with developing and implementing APIs.", "type":"technical"},
        {"question":"How do you approach the task of designing software for maintainability and scalability?", "type":"technical"},
        {"question":"Can you walk me through your understanding of containerization technologies like Docker?", "type":"technical"},
        {"question":"Do you have any experience with stream processing technologies like Kafka?", "type":"technical"},
        {"question":"What is your experience with designing and developing software in a test-driven environment?", "type":"technical"},     
        {"question":"Tell me about a time you had to collaborate with others to achieve a common goal.", "type":"behavioral"},
        {"question":"Why are you interested in working at DSTA's Information Programme Centre?", "type":"motivational"},
        {"question":"What are your salary expectations?", "type":"negotiation"},
        {"question":"Do you have any questions for me?", "type":"meta"}
      ];*/
      const { preInterviewInfo, setPreInterviewInfo } = usePreInterviewInfoContext();
      const { feedback, setFeedback } = useFeedbackContext();
      const [userResponses, setUserResponses] = useState(Array(questions.length).join(".").split("."));

      const handleAnswer = (answer, index) => {
        setUserResponses((prevResponses) => {
          const updatedResponses = [...prevResponses];
          updatedResponses[index] = answer;
          return updatedResponses;
        });
      };
    
      const handleInterviewCompletion = async () => {
        console.log('Interview Completed!');

        const interviewData = questions.reduce((acc, question, index) => {
          acc[question.question] = userResponses[index];
          return acc;
        }, {});

        const final_interview_data = interviewData

        console.log(final_interview_data);
        const consolidatedRequest : PostInterviewFormType = {
          "pre_info": mergeDeep({}, preInterviewInfo),
          "interview_answers": mergeDeep({}, final_interview_data),
        }
        console.log("consolidatedRequest")
        console.log(consolidatedRequest);
        try {
          // Make an API call to sign out
          const response = await bardService.getFeedback(consolidatedRequest)
          .then((res) => {
              setFeedback(res);
              console.log("Feedback:" + feedback);
              router.push('/feedback');
          }).catch((err) => {
              console.error('Error retrieving feedback:' + err);
          });
      } catch (error) {
          // Handle any network or API call errors
          console.error('API call error:', error);
      }

      };
    
      return (
        <Container maxWidth="sm">
          <div style={{ padding: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>Job Interview Simulation</h1>
            <div>
              {questions.map((question, index) => (
                <InterviewQuestion
                  key={`question_${index}`}
                  index={index}
                  question={question.question}
                  onAnswer={(answer) => handleAnswer(answer,index)}
                />
              ))}
            </div>
            { (
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