import React from 'react';
import ReactMarkdown from 'react-markdown';
import Typography from '@mui/material/Typography';
import { useFeedbackContext } from '../../context/FeedbackContext';

const FeedbackForm: React.FC = () => {
  const { feedback, setFeedback } = useFeedbackContext();
  /*const feedback: string =
    "I can definitely help you improve your mock interview! Here's some honest feedback based on the information you provided:\n\n**Resume and Cover Letter:**\n\n* **Missing:** You haven't mentioned including a resume and cover letter. These are crucial documents for any job application, especially when lacking experience. Highlight your relevant skills, projects, and achievements to showcase your candidacy.\n* **Focus Areas:** Mention specific areas within Big Data Analysis Applications you're interested in to demonstrate initiative and align with the job description.\n\n**Interview Responses:**\n\n* **Specificity:** Your answers are currently too vague. Elaborate on specific projects, skills, and experiences to demonstrate your qualifications. Use the STAR method (Situation, Task, Action, Result) for impactful storytelling.\n* **Project Example:** While your web application project used SQL, focus on projects related to big data analysis if possible. If not, highlight the specific data collection and processing aspects of your project.\n* **Maintainability and Scalability:** Instead of relying on past experience, explain your understanding of design principles for maintainability and scalability (e.g., modularity, loose coupling, documentation).\n* **Motivation:** Don't just say you're \"interested\" in DSTA. Research the company, their mission, and specific aspects of the role that excite you. Connect your skills and aspirations to how you can contribute to their goals.\n* **Salary Expectations:** Research average salaries for entry-level Big Data Software Engineers in your region to have a more informed and data-driven answer. Consider flexibility based on benefits and career growth opportunities.\n* **Questions:** Prepare more insightful questions beyond just work culture. Ask about specific projects, team dynamics, learning opportunities, and challenges you'd face in the role.\n\n**Additional Tips:**\n\n* **Practice:** Conduct mock interviews regularly, record yourself, and analyze your performance for improvement.\n* **Tailor your answers:** Adapt your responses to each specific question and highlight relevant skills and experiences.\n* **Enthusiasm and Confidence:** Show genuine interest, smile, and maintain eye contact to project positivity and confidence.\n* **Thank You Note:** Send a thank-you email after the interview, reiterate your interest, and briefly address any points you want to emphasize.\n\nRemember, preparation is key. By crafting impactful responses, researching the company, and practicing your delivery, you can significantly improve your chances of succeeding in your interview!";
*/
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Interview Feedback
      </Typography>
      <ReactMarkdown>{feedback}</ReactMarkdown>
    </div>
  );
};

export default FeedbackForm;