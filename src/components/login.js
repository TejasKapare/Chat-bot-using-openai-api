import React, {useState} from 'react';
import './login.scss';
import {useNavigate} from 'react-router-dom';
 
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const navigate = useNavigate()
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Validate the form fields
      if (!email || !password) {
        setError('Please fill in all fields');
        return;
      }
  
      // Perform additional validation if needed
      // ...
  
      // Clear the form and handle successful login
      setEmail('');
      setPassword('');
      setError('');
      handleLogin();
    };
  
      // Logic for handling the login process
      // ...
      const handleLogin = () => {
        // Check if email and password match the desired credentials
        if (email === 'admin@gmail.com' && password === 'password') {
          console.log('Logged in successfully');
          navigate('/home')

        } else {
          setError('Invalid email or password');
        }
      };
      
  
      console.log('Logged in successfully');


  
    return(
        <div className='form-container'>
        <div className='form-wrapper'>
            <span className="Logo">Chat Bot</span>
            <span className="title">Login</span>
            <form className='form_login' onSubmit={handleSubmit}>
              
                <input className='input_ele' type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input className='input_ele' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button>Sign in</button>
                {error && <p>{error}</p>}
                {/* {err && <span>Something Went Wrong</span>} */}
            </form>
            {/* <p>You dont have an account? <Link to="/register">Register</Link></p> */}
        </div>
    </div>
    )
    };

export default LoginForm;



