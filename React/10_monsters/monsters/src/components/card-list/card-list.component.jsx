import React from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';

// pass in whole props, destructure monsters in function argument.
const CardList = ({monsters}) => {
  console.dir(monsters);
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        // passing 1 monster each as props to the card component
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;