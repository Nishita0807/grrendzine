import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/Group 3.png";
import "../styles/loginpage.css"; // Import CSS file for styling

function LoginPage({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Reset input fields and error state when the component mounts
  useEffect(() => {
    setEmail('');
    setPassword('');
    setLoginError('');
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setLoginError(''); // Clear login error when typing in email field
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setLoginError(''); // Clear login error when typing in password field
  };

  const validateEmail = (email) => {
    // Regular expression to validate email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setLoginError('Please fill in all fields'); // Show error if any field is empty
    } else if (!validateEmail(email)) {
      setLoginError('Please enter a valid email'); // Show error if email format is invalid
    } else if (password !== 'admin') {
      setLoginError('Invalid login credentials'); // Show error if password is incorrect
    } else {
      onLogin({ email, password }, navigate); // Pass navigate function here
    }
  };

  const handleForgotPassword = () => {
    // Implement forgot password functionality here
    alert('Forgot Password functionality');
  };

  return (
    <div className="login-page">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className={`input-group ${emailFocused ? 'focused' : ''}`}>
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={handleEmailChange}
            onFocus={() => {
              setEmailFocused(true);
              setLoginError(''); // Clear login error when focusing on email field
            }}
            onBlur={() => setEmailFocused(false)}
          />
        </div>
        <div className={`input-group ${passwordFocused ? 'focused' : ''}`}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            onFocus={() => {
              setPasswordFocused(true);
              setLoginError(''); // Clear login error when focusing on password field
            }}
            onBlur={() => setPasswordFocused(false)}
          />
        </div>
        {loginError && <div className="error-message">{loginError}</div>} {/* Show error message if login is not correct */}
        <button type="submit" className='login'>Login</button>
      </form>
      <div onClick={handleForgotPassword} className='forgot-pass'>Forgot Password?</div>
    </div>
  );
}

export default LoginPage;
