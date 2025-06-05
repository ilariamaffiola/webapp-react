import React from "react";

const Stars = ({ vote }) => {
  const getStars = () => {
    let starsList = [];
    for (let i = 0; i < 5; i++) {
      if (vote > i) {
        starsList.push(
          <i key={`star-solid-${i}`} className="fa-solid fa-star"></i>
        );
      } else {
        starsList.push(
          <i key={`star-regular-${i}`} className="fa-regular fa-star"></i>
        );
      }
    }

    return starsList;
  };

  return <span>{getStars()}</span>;
};

export default Stars;
