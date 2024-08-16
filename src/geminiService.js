// src/geminiService.js
import axios from 'axios';

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';
const GEMINI_API_KEY = 'AIzaSyAYn_21WrVP-Vb-7jZ4ImcGZwiUrJjAikw'; // Replace with your actual API key

const geminiService = axios.create({
  baseURL: GEMINI_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAccountBalance = async () => {
  try {
    const response = await geminiService.get('/account/balance'); // Update this endpoint if needed
    return response.data;
  } catch (error) {
    console.error('Error fetching balance:', error);
    throw error;
  }
};

export const sendMessage = async (message) => {
  try {
    const response = await geminiService.post(`?key=${GEMINI_API_KEY}`, {
      contents: [
        {
          parts: [
            {
              text: message,
            },
          ],
        },
      ],
    });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};
