import React, { useState } from 'react';
import axios from 'axios';
import { IconButton, Box, TextareaAutosize, Button, Typography, Fade } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';

const ChatButton = styled(IconButton)({
  position: 'fixed',
  bottom: '16px',
  right: '16px',
  backgroundColor: '#0071e3',
  color: 'white',
  borderRadius: '50%',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  transition: 'background-color 0.3s, transform 0.3s',
  '&:hover': {
    backgroundColor: '#005bb5',
    transform: 'scale(1.1)',
  },
});

const ChatBox = styled(Box)({
  position: 'fixed',
  bottom: '80px',
  right: '16px',
  width: '350px',
  maxWidth: '90%',
  backgroundColor: 'white',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  borderRadius: '10px',
  padding: '16px',
  zIndex: 1000,
  animation: 'slideIn 0.3s ease-out',
});

const ChatContent = styled(Box)({
  marginTop: '16px',
  padding: '12px',
  backgroundColor: '#f5f5f5',
  borderRadius: '8px',
});

const Chat = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  async function generateAnswer() {
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBXag2hpgeLE0tUig9VPdVFQYayAmlvaXE",
        method: "post",
        data: { "contents": [{ "parts": [{ "text": '${question} in single string chat without comments' }] }] },
      });
      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error generating answer:", error);
    }
  }

  return (
    <div>
      <ChatButton
        color="primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <CloseIcon /> : <ChatIcon />}
      </ChatButton>
      <Fade in={isOpen}>
        <ChatBox>
          <Typography variant="h6" component="div" gutterBottom>
            Chat Box
          </Typography>
          <TextareaAutosize
            minRows={4}
            placeholder="Type your question here..."
            style={{ width: '100%', fontSize: '16px', padding: '8px', borderRadius: '8px', border: '1px solid #ddd' }}
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={generateAnswer}
            style={{ marginTop: '12px', borderRadius: '20px' }}
          >
            Send
          </Button>
          {answer && (
            <ChatContent>
              <Typography variant="body1">{answer}</Typography>
            </ChatContent>
          )}
        </ChatBox>
      </Fade>
    </div>
  );
};

export default Chat;