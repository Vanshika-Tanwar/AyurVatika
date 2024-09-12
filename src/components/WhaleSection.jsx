import React from 'react';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import herbs from '../assets/herbs.jpeg';

const riseUpAnimation = `
  @keyframes riseUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const WhaleSection = () => {
  return (
    <section
      className="flex items-center justify-center text-center py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${herbs})` }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center" style={{ animation: 'riseUp 0.5s ease-out' }}>
      <div className="max-w-lg" style={{ color: '#7E362A', textShadow: '3px 2px 2px white' }}>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Medicinal Victory!</h1>
          <p className="text-lg lg:text-xl mb-8">
          An interactive 3D model incorporated Virtual Herbal Garden, Welcome to Ayur Vatika!
          </p>
        </div>
        <Link to="/log-in">
          <Button outline gradientDuoTone="greenToBlue" pill>
            Explore Herbs!
          </Button>
        </Link>
      </div>
      <style>{riseUpAnimation}</style>
    </section>
  );
};

export default WhaleSection;
