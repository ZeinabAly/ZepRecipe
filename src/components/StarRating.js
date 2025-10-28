import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

const StarRating = () => {
  const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    if (rating === index) {
      // Si on clique sur l'étoile actuellement sélectionnée, on réinitialise la note
      setRating(rating-1);
    } else {
      // Sinon, on met à jour la note
      setRating(index);
    }
    
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <FontAwesomeIcon
            key={index}
            icon={index <= (rating) ? solidStar : regularStar}
            onClick={() => handleClick(index)}
            
            style={{
              color: index <= (rating) ? 'orange' : 'black',
              cursor: 'pointer', marginRight: '3px', fontSize: '13px'
            }}
            className="icon"
          />
        );
      })}
      <p style={{fontSize: '14px'}}> <span>Note :</span> {rating}</p>
    </div>
  );
};

export default StarRating;