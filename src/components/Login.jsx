import React from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin(); // Update login state in App
    navigate('/home'); // Navigate to Home page after login
  };

  return (
    <div>
      <h1>Login Page</h1>
      <p>Please login to access the Home and About pages.</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
