import './App.css';
import React, { useEffect, useState } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('');

  // Get the API data on the first load/reload
  // Replaces componentDidMount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        setMonsters(() => {
          return users;
        })
      );
  }, []);

  const onSearchChange = (event) => {
    const currentSearch = event.target.value.toLocaleLowerCase();
    setSearchField(currentSearch);
  };

  const filterMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Index</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeHolder='Search Monsters'
        className='monsters-search-box'
      />
      <CardList monsters={filterMonsters} />
    </div>
  );
}

export default App;
