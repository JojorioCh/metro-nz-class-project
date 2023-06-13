import React from 'react';
import star from '../../srcAssets/IconsPics/Star.png';
import '../../styles/HomeSection3.css';
// import person1 from '../../srcAssets/section3Imgs/person1.png';
import quote from '../../srcAssets/IconsPics/Quote.png';

interface HomeCardPeopleProps {
  name: string;
  city: string;
  image: string;
  text: string;
}
const HomeCardPeople: React.FC<HomeCardPeopleProps> = ({
  name,
  city,
  image,
  text,
}) => {
  return (
    <div className="homePCardContainer">
      {/* <header className="homePCardHeader"> */}

      <section className="homePCardsContainer__rating">
        <div className="homePCardsContainer__rating--starIcon">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
      </section>

      <section className="homePCardContainer__profilePic">
        <div className="homePCardContainer__profilePic--photo">
          <img src={image} alt="person" />
        </div>
        <div className="homePCardTitle">
          <p className="hpcName">{name}</p>
          <p className="hpcCity">{city}</p>
        </div>
      </section>

      {/* </header> */}

      <img
        className="homePCardContainer__quote--graph"
        src={quote}
        alt="quote"
      />

      <p className="homePCardContainer__text">{text}</p>
    </div>
  );
};

export default HomeCardPeople;
