import React from 'react';
import {TextField, Box} from '@mui/material';

const InterviewQuestion = ({ question, index, onAnswer }) => {

  const handleAnswer = (event) => {
    onAnswer(event.target.value, index);
  };

  return (
    <Box
      sx={{
        marginBottom: '20px',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#f8f8f8',
      }}
    >
      <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>{question}</p>
      <TextField
        label="Your answer"
        variant="outlined"
        fullWidth
        onChange={handleAnswer}
      />
    </Box>
  );
};

export default InterviewQuestion;