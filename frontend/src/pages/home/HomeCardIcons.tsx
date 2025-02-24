import React from 'react';
// import redimg from '../../srcAssets/s2hands.jpg';

interface HomeCardIconsProps {
  image: string;
  text: string;
}

const HomeCardIcons: React.FC<HomeCardIconsProps> = ({ image, text }) => {
  return (
    <div className="hsiContainer">
      <img src={image} alt="redimg" className="hsiContainer__image" />
      <p className='hsiContainer__text'>{text}</p>
    </div>
  );
};

export default HomeCardIcons;
