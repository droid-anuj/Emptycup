import React from 'react';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const Rating = ({ value, maxRating = 5 }) => {
  const starComponents = [];

  for (let i = 1; i <= maxRating; i++) {
    if (value >= i) {
      starComponents.push(<BsStarFill key={i} />);
    } else if (value + 0.5 === i) {
      starComponents.push(<BsStarHalf key={i} />);
    } else {
      starComponents.push(<BsStar key={i} />);
    }
  }

  return <div className="rating">{starComponents}</div>;
};

export default Rating;
