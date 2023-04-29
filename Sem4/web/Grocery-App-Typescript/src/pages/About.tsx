import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const About = (props: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/grocery');
  };
  return (
    <div className='page-style'>
      <h1>About</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default About;
