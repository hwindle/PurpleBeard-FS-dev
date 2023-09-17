import React, { useState } from 'react';

const AddTaskForm = ({ addTask }) => {
  // the state for the user input in the text input element
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const alphaNumeric = /[a-zA-Z0-9 _-]/;
    if (inputValue && inputValue.match(alphaNumeric)) {
      addTask(inputValue);
    } else {
      // else setValue to empty string
      setInputValue('debugging');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={inputValue}
        placeholder='Enter a task'
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button type='submit'>+</button>
    </form>
  );
};

export default AddTaskForm;