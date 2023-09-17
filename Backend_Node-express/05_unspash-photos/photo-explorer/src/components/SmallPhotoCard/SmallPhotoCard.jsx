import React from 'react';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const SmallPhotoCard = ({photo, id}) => {
  
  return (
    <ImageListItem className='SmallPhotoCard' key={id}>
      <img
        src={photo?.imageUrl}
        alt={photo?.description}
      />
      <ImageListItemBar
            title={photo?.description}
            subtitle={<span>by: {photo?.name}</span>}
            position="below"
          />
    </ImageListItem>
  );
};

export default SmallPhotoCard;