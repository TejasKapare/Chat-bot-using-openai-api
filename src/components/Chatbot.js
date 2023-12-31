import React, { useState } from 'react';
import { TextInput, Button, Tile } from '@carbon/react';
import axios from 'axios';
import './ChatApp.scss'; // Import the CSS file for styling

const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY)
const ChatApp = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      const userMessage = {
        id: Date.now(),
        text: inputValue,
        sender: 'user',
      };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInputValue('');
    }
  };

  const generateTextResponse = async () => {
    if (inputValue.trim() !== '') {
      try {
        const response = await axios.post(
          'https://api.openai.com/v1/completions',
          {
            prompt: inputValue,
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 1000,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );

        const botResponse = response.data.choices[0].text.trim();
        const botMessage = {
          id: Date.now(),
          text: botResponse,
          sender: 'bot',
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const generateImageResponse = async () => {
    if (inputValue.trim() !== '') {
      try {
        const response = await axios.post(
          'https://api.openai.com/v1/images/generations',
          {
            prompt: `Generate an image of: ${inputValue}`,
            size:"512x512",
            n:1,
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );
          console.log(response);
        const imageURL = response.data.data[0].url;
        console.log(imageURL)
        if (imageURL.startsWith('https://')) {
          const botMessage = {
            id: Date.now(),
            text: imageURL,
            sender: 'bot',
            isImage: true,
          };
          setMessages((prevMessages) => [...prevMessages, botMessage]);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <body>
    <div className="chat-container">
      <div class="main-title">CHAT BOT USING CHAT-GPT</div>
      <div className="chat-messages">
        {messages.map((message) => (
          <Tile
            key={message.id}
            light={message.sender === 'bot'}
            className={`message ${message.sender}`}
          >
            {message.isImage ? (
              <img width="200px" height="200px" src={message.text} alt="Generated" />
            ) : (
              message.text
            )}
          </Tile>
        ))}
      </div>
      {/* <div className='chat-input'> */}
      <form onSubmit={handleSubmit}>
        <TextInput
          id="messageInput"
          value={inputValue}
          onChange={handleInputChange}
          placeholder='Type Your Message'
        />
        <div id='btn-container'>
        <Button type="submit"  onClick={generateTextResponse}>Send</Button>
        <Button type="submit"  onClick={generateImageResponse}>Img</Button>
        </div>
      </form>
      {/* </div> */}
    </div>
    </body>
  );
};

export default ChatApp;

