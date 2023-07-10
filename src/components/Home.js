import { Button } from '@carbon/react'
import React from 'react'
import './Home.scss';
import { useNavigate } from 'react-router-dom';



const Home = () => {
    const navigate = useNavigate();

const handleClick=() => {
    navigate('/chatbot')
}
  return (
    <body>
    <div className="page-container">
      <h1 className="heading">Overview of ChatBot</h1>
      <h3 className='head'>Hello! I'm your friendly chatbot, here to assist you. I'm capable of performing various tasks to make your experience smooth and enjoyable. Here's what I can do for you:</h3>

      <div className="card-container">
        <div className="card">
          <img className='image' src="https://miro.medium.com/v2/resize:fit:390/0*Jo9RxBJKxR0uAD5f.png" alt="Image 1" />
          <p>Text Understanding</p>
          <div className='content'>When a user provides input text to a chatbot, the chatbot employs natural language processing NLP techniques to understand the user's intent and generate an appropriate response.Based on the user's input, the chatbot utilizes its underlying knowledge base or trained model to generate a response.</div>
        </div>
        <div className="card">
          <img src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/12/featured1-12.jpg" alt="Image 2" />
          <p>Image Response</p>
          <div></div>
        </div>
        <div className="card">
          <img src="https://media.istockphoto.com/id/1263089161/vector/different-language-speech-bubble-hello-concept-hello-in-different-languages-diverse-cultures.jpg?s=612x612&w=0&k=20&c=M97ztm-OiDvF5ZwVsfEe8nJMckMFMPMMyUPsDszQhZY=" alt="Image 3" />
          <p>Multilingual Responses</p>
          <div></div>
        </div>
      </div>
    <div className='centerbtn'>
    <Button onClick={handleClick}>ChatBot</Button>
    </div>
    </div>
    </body>
  )
}

export default Home;




