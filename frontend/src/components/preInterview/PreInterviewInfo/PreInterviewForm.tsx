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

const PreInterviewForm = () => {
    const router = useRouter();
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
            // Make an API call to sign out
            const response = await bardService.getQuestions(formData)
            .then((res) => {
                console.log("Success");
                console.log(res);
                //router.push('/home');
                //router.reload();
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
        <PreInterviewFormDiv>
          <PreInterviewFormrH1>Job interview simulation information Form</PreInterviewFormrH1>
    
          <FormControl fullWidth margin="normal">
            <TextField
                value={formData.job_type}
                label="Job Type"
                onChange={(e) => handleChange('job_type', e.target.value)}
            />
        </FormControl>

        <FormControl fullWidth margin="normal">
            <TextField
            value={formData.experience_level}
            label="Experience Level"
            onChange={(e) => handleChange('experience_level', e.target.value)}
            />
        </FormControl>

        <FormControl fullWidth margin="normal">
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
          renderInput={(params) => <TextField {...params} label="Skills"/>}
        />
        </FormControl>

        <FormControl fullWidth margin="normal">
            <TextareaAutosize
            minRows={4}
            placeholder="Job Description"
            maxRows={4}
            value={formData.job_description}
            
            onChange={(e) => handleChange('job_description', e.target.value)}
            />
        </FormControl>

        <FormControl fullWidth margin="normal">
            <TextField
            value={formData.resume}
            label="Resume"
            onChange={(e) => handleChange('resume', e.target.value)}
            />
        </FormControl>

        <FormControl fullWidth margin="normal">
            <InputLabel>Cover Letter</InputLabel>
            <TextareaAutosize
            minRows={4}
            value={formData.cover_letter}
            onChange={(e) => handleChange('cover_letter', e.target.value)}
            />
        </FormControl>

        <FormControl fullWidth margin="normal">
            <TextField
            value={formData.focus_areas.join(', ')}
            label="Focus Areas"
            onChange={(e) => handleChange('focus_areas', e.target.value.split(', '))}
            />
        </FormControl>

        <Button variant="contained" color="primary" onClick={handleResetClick}>
            Reset
        </Button>

        <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit Information
        </Button>
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