import React from 'react';
import './BigImage.css';

const BigImage = ({photo}) => {


  return (
    <figure className="big-image">
      <img src={photo?.imageUrl} alt={photo?.description} />
      <figcaption>{photo?.description} - {photo?.name}</figcaption>
    </figure>
  );
};

export default BigImage;