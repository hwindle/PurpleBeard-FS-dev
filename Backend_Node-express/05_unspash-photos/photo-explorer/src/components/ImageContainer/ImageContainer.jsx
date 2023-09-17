import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import SmallPhotoCard from '../SmallPhotoCard/SmallPhotoCard';
import BigImage from '../BigImage/BigImage';
import ImageList from '@mui/material/ImageList';
import shortID from 'shortid';
import axios from 'axios';


const ImageContainer = ({searchWord, gallery}) => {
  const [imageData, setImageData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let url = '';

  if (searchWord && (searchWord.length > 15 || searchWord.length <= 2)) {
    return (<h2>search term too small</h2>);
  } else {
    url = 'http://localhost:3055/searchImage?title=' + searchWord;
  }

  useEffect(() => {
    if (url === null) return;

    (async function () {
      try {
        setLoading(true);
        const res = await axios.get(url);
        // console.log(res.data);
        setImageData(res.data);
      } catch (error) {
        console.log("Error from search Images fetch", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);


  return (
    <Container maxWidth="md">
      {gallery ? <ImageList
        sx={{ width: 1000, height: 1000 }}
        variant="woven" cols={1} gap={5}
        >
          {imageData?.map((image) => (<SmallPhotoCard photo={image} id={shortID.generate()} />))}
        </ImageList>
      : <BigImage photo={imageData} />}
    </Container>
  );
};

export default ImageContainer;