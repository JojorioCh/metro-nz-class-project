import React from 'react';
import star from '../../srcAssets/IconsPics/star.png';
import '../../styles/HomeSection3.css';
// import person1 from '../../srcAssets/section3Imgs/person1.png';
import quote from '../../srcAssets/IconsPics/quote.png';

interface HomeCardPeopleProps {
  name: string;
  city: string;
  image: string;
  text: string;
}
const HomeCardPeople: React.FC<HomeCardPeopleProps> = ({ name, city, image, text }) => {
  return (
    <div className="homePCardContainer">
      {/* <header className="homePCardHeader"> */}

      <section className="homePCardHeaderStarsContainer">
        <div className="homePCardHeaderStars">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
      </section>
      <img className="quote-img" src={quote} alt="quote" />
      <section className="homePCardImgTitle">
        <div className="homePCardImg">
          <img src={image} alt="person" />
        </div>
        <div className="homePCardTitle">
          <p className="hpcName">{name}</p>
          <p className="hpcCity">{city}</p>
        </div>
      </section>

      {/* </header> */}
      <p className="hpcText">
        {text}
      </p>
    </div>
  );
};

export default HomeCardPeople;
