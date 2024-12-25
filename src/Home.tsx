import React from 'react';
import { useNavigate } from 'react-router-dom';
const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate('/login')}>Log In</button>
      <button onClick={() => navigate('/register')}>Register</button>
    </div>
  );
};

export default Home;