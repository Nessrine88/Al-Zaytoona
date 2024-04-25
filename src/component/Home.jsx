import React from 'react';
import background from '../assets/images.jpeg';

const Home = () => {
  return (
    <div className="relative w-screen h-screen">
      <img src={background} alt="backgroundImage" className="absolute inset-0 w-full h-full object-fill" />
      <h1 className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 text-3xl text-white">Welcome!</h1>
    </div>
  );
};

export default Home;
