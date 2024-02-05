import { useState, useEffect } from 'react';
import { PreInterviewFormType } from '../types';
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
  } from '@mui/material';
import bardService from '../../../services/bard';
import { PreInterviewFormDiv, PreInterviewFormrH1 } from './style';
import { useRouter } from 'next/router';
import { useQuestionContext } from '../../context/QuestionContext';
import { usePreInterviewInfoContext } from '../../context/PreInterviewContext';

const PreInterviewForm = () => {
    const router = useRouter();
    const { questions, setQuestions } = useQuestionContext();
    const { preInterviewInfo, setPreInterviewInfo } = usePreInterviewInfoContext();
    const [formData, setFormData] = useState<PreInterviewFormType>({ 
        job_type: '',
        experience_level: '',
        skills: [],
        job_description: '',
        resume: '',
        cover_letter: '',
        focus_areas: [], 
    });

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
          ...prevData,
          [field]: value,
        }));
      };

    const handleResetClick = () => {
        // Reset form fields after canceling the popup
        setFormData({
            job_type: '',
            experience_level: '',
            skills: [],
            job_description: '',
            resume: '',
            cover_letter: '',
            focus_areas: [], 
        });
    };

    const handleSkillsChange = (event: React.SyntheticEvent, value: string[]) => {
        handleChange('skills', value);
    };

    const handleSubmit = async () => {
        try {
            console.log(formData);
            setPreInterviewInfo(formData);
            // Make an API call to sign out
            const response = await bardService.getQuestions(formData)
            .then((res) => {
                setQuestions(res["questions"]);
                console.log("Questions:" + questions);
                router.push('/interview');
            }).catch((err) => {
                console.error('Error retrieving questions:' + err);
            });
        } catch (error) {
            // Handle any network or API call errors
            console.error('API call error:', error);
        }
        };
    
    const [isLoading, setIsLoading] = useState(false);

    return (
        <PreInterviewFormDiv 
            style={{ position: 'relative', top: '-30px', 
            background: 'url("https://img.freepik.com/free-vector/watercolour-light-blue-background_78370-3537.jpg?w=1800&t=st=1707145567~exp=1707146167~hmac=108d71759136dd8c182d2733e8f996a97e15ff7cf064c93d0eb3205c8bd22ee5")', // Adjust the path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            }}>

          <PreInterviewFormrH1 style={{ fontFamily: 'Calibri', fontSize: '33px' }}>Job Interview Simulation Information Form</PreInterviewFormrH1>
    
          <FormControl fullWidth margin="normal" style={{ backgroundColor: 'white', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', border: '1px solid black', width: '1300px'}}>
            <TextField
                value={formData.job_type}
                label="Job Type"
                onChange={(e) => handleChange('job_type', e.target.value)}
                style={{ fontFamily: 'Calibri', fontSize: '14px' }}
            />
        </FormControl>

        <FormControl fullWidth margin="normal" style={{ backgroundColor: 'white', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', border: '1px solid black', width: '1300px'}}>
            <TextField
                value={formData.experience_level}
                label="Experience Level"
                onChange={(e) => handleChange('experience_level', e.target.value)}
                style={{ fontFamily: 'Calibri', fontSize: '16px' }}
            />
        </FormControl>

        <FormControl fullWidth margin="normal" style={{ backgroundColor: 'white', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', border: '1px solid black' , width: '1300px'}}>
            <Autocomplete
                multiple
                value={formData.skills}
                onChange={handleSkillsChange}
                options={top30skills.map((option) => option.name)}
                freeSolo
                renderTags={(value, getTagProps) =>
                    value.map((option, index) => (
                        <Chip label={option} {...getTagProps({ index })} />
            ))
          }
          renderInput={(params) => <TextField {...params} label="Skills"style={{ fontFamily: 'Calibri', fontSize: '16px' }} />}
        />
        </FormControl>

        <FormControl fullWidth margin="normal" style={{ backgroundColor: 'white', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', border: '0.5px solid black', width: '1300px'}}>
            <TextareaAutosize
            minRows={4}
            placeholder="Job Description"
            maxRows={4}
            value={formData.job_description}

            onChange={(e) => handleChange('job_description', e.target.value)}
            style={{ 
                fontFamily: 'Calibri, sans-serif', 
                fontSize: '16px', display: 'flex', lineHeight: 'normal', height: '100px' }}
            />
        </FormControl>

        <FormControl fullWidth margin="normal" style={{ backgroundColor: 'white', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', border: '1px solid black', width: '1300px'}}>
            <TextField
            value={formData.resume}
            label="Resume"
            onChange={(e) => handleChange('resume', e.target.value)}
            style={{ fontFamily: 'Calibri', fontSize: '16px' }}
            />
        </FormControl>

        <FormControl fullWidth margin="normal" style={{ backgroundColor: 'white', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', border: '0.5px solid black', width: '1300px'}}>
            <InputLabel>Cover Letter</InputLabel>
            <TextareaAutosize
            minRows={4}
            value={formData.cover_letter}
            onChange={(e) => handleChange('cover_letter', e.target.value)}
            style={{ fontFamily: 'Calibri', fontSize: '16px' }}
            />
        </FormControl>

        <FormControl fullWidth margin="normal" style={{ backgroundColor: 'white', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', border: '1px solid black', width: '1300px'}}>
            <TextField
            value={formData.focus_areas.join(', ')}
            label="Focus Areas"
            onChange={(e) => handleChange('focus_areas', e.target.value.split(', '))}
            style={{ fontFamily: 'Calibri', fontSize: '16px' }}
            />
        </FormControl>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', marginTop: '20px', gap: '30px' }}>
            <Button variant="contained" color="primary" onClick={handleResetClick} style={{ textAlign: 'center' }}>
                <div style={{ maxWidth: '10px', maxHeight: '70px', minWidth: '0px', minHeight: '30px' }} />
                Reset
            </Button>

            <Button variant="contained" color="primary" onClick={handleSubmit} style={{ textAlign: 'center' }}>
                <div style={{ maxWidth: '10px', maxHeight: '70px', minWidth: '0px', minHeight: '30px' }} />
                Submit Information
            </Button>
        </div>
        
            </PreInterviewFormDiv>
        );
}

export default PreInterviewForm;


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