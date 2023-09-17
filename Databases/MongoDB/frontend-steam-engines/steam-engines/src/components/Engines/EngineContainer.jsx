import { useState, useEffect } from 'react';
import { ContextUpdate } from './EngineContext';
import axios from 'axios';
import SmallPhotoCard from './SmallPhotoCard';


const EngineContainer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // context variables here for state
  const [locoData, setLocoData] = useState([]);
  const [updateEngines, setUpdateEngines] = useState(false);
  const contextValue = {
    update: { updateEngines, setUpdateEngines },
    data: { locoData, setLocoData },
  };

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const res = await axios('http://localhost:3050/allEngines');
        //console.dir(res.data);
        setLocoData(res.data);
      } catch (error) {
        console.log('Error from search engines fetch', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <ContextUpdate.Provider value={contextValue}>
      <section>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading
          ? locoData?.map((item, i) => {
              return (
                <SmallPhotoCard
                  photo={item}
                  id={i}
                />
              );
            })
          : ''}
      </section>
      </ContextUpdate.Provider>
  );
};

export default EngineContainer;
