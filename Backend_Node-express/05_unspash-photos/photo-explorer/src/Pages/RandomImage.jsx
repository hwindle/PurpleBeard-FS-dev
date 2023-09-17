import React, {useState, useEffect} from 'react';
import BigImage from '../components/BigImage/BigImage';
import axios from 'axios';

const RandomImage = () => {
  const [error, setError] = useState('');
  const [randomPic, setRandomPic] = useState([]);

  // just get one picture
  const url = 'http://localhost:3055/randomImage';
  
  useEffect(() => {
    (async function () {
      try {
        const res = await axios.get(url);
        // console.log(res.data);
        setRandomPic(res.data);
      } catch (error) {
        console.log("Error from random image fetch", error);
        setError(error);
      } 
    })();
  }, [url]);

  return (
    <section>
      <h2>Random Image</h2>
      <BigImage photo={randomPic} />
    </section>
  );
};

export default RandomImage;
