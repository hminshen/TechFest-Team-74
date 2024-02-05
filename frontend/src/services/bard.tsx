import { PostInterviewFormType } from '../components/interview/types';
import { PreInterviewFormType } from '../components/preInterview/types';
import axiosInstance from '../utils/axios'

  const getQuestions = async (item : PreInterviewFormType) => {
    try {
        const createdInfoItem = {
            job_type: item.job_type,
            experience_level: item.experience_level,
            skills: item.skills,
            job_description: item.job_description,
            resume: item.resume,
            cover_letter: item.cover_letter,
            focus_areas: item.focus_areas,
        };
        console.log(createdInfoItem);
      const response = await axiosInstance.post(`/bard/getQuestions`,createdInfoItem)
            .then((res) => {
                return JSON.parse(res.data);
          }).catch((error) => {
              console.log("Getting questions from Bard failed: " + error);
          })
      return response;
  
      }
    catch (error) {
      console.log("Error:" + error);
    }
  };

  const getFeedback = async (item : PostInterviewFormType) => {
    try {
      const response = await axiosInstance.post(`/bard/getFeedback`,item)
            .then((res) => {
                return JSON.parse(res.data);
          }).catch((error) => {
              console.log("Getting questions from Bard failed: " + error);
          })
      return response;
  
      }
    catch (error) {
      console.log("Error:" + error);
    }
  };

  const testBard = async () => {
    try {
      const response = await axiosInstance.get(`/bard/Test`)
            .then((res) => {
                return res.data;
          }).catch((error) => {
              console.log("Bard test failed: " + error);
          })
      return response;
  
      }
    catch (error) {
      console.log("Error:" + error);
    }
  };
const bardService = {
  getQuestions,
  testBard,
  getFeedback
};

export { bardService as default };