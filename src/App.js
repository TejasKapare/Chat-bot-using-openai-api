// import React from 'react';
// import ChatBot from './components/Chatbot.js';
// import './styles.css';
// import Login from './components/login.js';
// import ChatApp from './components/Chatbot.js';

// const App = () => {
//   return (
//     <div>
//       <ChatBot />

//     </div>
//   );
// };

// export default App;

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "./components/login.js";
import ChatBot from "./components/Chatbot.js";
import Home from "./components/Home.js"
function App() {

  // const {currentUser}=useContext(AuthContext)
  // const ProtectedRoute = ({children})=>{
  //   if(!currentUser){
  //     return <Navigate to="/login"/>
  //   }
  //   return children
  // };

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LoginForm/>} />
          <Route path="chatbot" element={<ChatBot/>} />
          <Route path="home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
