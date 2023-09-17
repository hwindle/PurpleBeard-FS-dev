import React from 'react';
import './Card.css';

const Card = (props) => {
  const {avatar, firstName, description, friendsNo} = props.bio;
  return (
    <div className="ui raised card">
      <div className="image">
        <img src={ avatar } alt={ firstName } />
      </div>
      <div className="content">
        <a className="header" href="#">{ firstName }</a>
        <div className="meta">
          <span className="date">Joined in 2013</span>
        </div>
        <div className="description">
          { firstName + ' is an ' + description }
        </div>
      </div>
      <div className="extra content">
        <a>
          <i className="fa-solid fa-user"></i>
          { friendsNo } Friends
        </a>
      </div>
    </div>
  );
};

export default Card;