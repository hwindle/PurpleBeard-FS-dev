import React, {useState} from 'react';
import ImageContainer from '../components/ImageContainer/ImageContainer';
import TextInput from '../components/TextInput/TextInput';

const SearchImages = () => {
  const [queryValue, setQueryValue] = useState('');
  const [submitFlag, setSubmitFlag] = useState(false);

  function onQueryChange(e) {
    const value = e.target.value.toLowerCase();
    setQueryValue(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('hi');
    setSubmitFlag(true);
  }

  return (
    <section>
      <h2>Search Images</h2>
      <TextInput onChangeHandler={onQueryChange}
        onSubmitHandler={handleSubmit} />
      {submitFlag ? 
        <ImageContainer searchWord={queryValue} gallery={true} />
      : null }
    </section>
    
  );
};

export default SearchImages;