import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Container, Box, TextField, Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'; // Import emailjs

const ChatHeader = styled(AppBar)`
  background-color: #808080;
`;

const ChatContainer = styled(Container)`
  padding: 20px;
  background-color: #f5f5f5;
  min-height: calc(100vh - 64px); /* Account for the AppBar height */
`;

const ChatMessage = styled(Box)`
  background: #fff;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
`;

const ChatWithUs = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  // Handle send message
  const handleSendMessage = () => {
    if (message.trim()) {
      // Sending the message via EmailJS
      const templateParams = {
        to_email: 'ak29arunkumar@gmail.com',
        user_message: message,
      };

      emailjs.send('service_71ejw1k', 'template_otqumzf', templateParams, 'hY_Uo1ewhMwz10cxr')
        .then((response) => {
          alert('Message sent successfully!');
          setMessage(''); // Clear the input field
        })
        .catch((error) => {
          console.error('Error sending email:', error);
          alert('Failed to send message. Please try again later.');
        });
    }
  };

  return (
    <div>
      {/* AppBar with navigation */}
      <ChatHeader position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="back" onClick={() => navigate('/')}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Chat with Us
          </Typography>
        </Toolbar>
      </ChatHeader>

      {/* Main content */}
      <ChatContainer maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Chat with Our Support Team
        </Typography>

        {/* Chat Messages */}
        <Box mb={4}>
          <ChatMessage>
            <Typography variant="body1"><strong>Support:</strong> How can I help you today?</Typography>
          </ChatMessage>
          <ChatMessage>
            <Typography variant="body1"><strong>You:</strong> I have a question about my order.</Typography>
          </ChatMessage>
        </Box>

        {/* Input Area */}
        <Box display="flex" flexDirection="column" alignItems="center">
          <TextField
            label="Type your message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            margin="normal"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
            style={{ marginTop: 10 }}
          >
            Send
          </Button>
        </Box>
      </ChatContainer>
    </div>
  );
};

export default ChatWithUs;
