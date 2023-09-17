import React from 'react';
import './Dog.css';

class Dog extends React.Component {
  constructor() {
    super();
    this.state = { dog: '' };
    this.getDog = this.getDog.bind(this);
  }

  componentDidMount() {
    // get an initial dog
    this.getDog();
  }

  getDog() {
    // fetch random dog
    fetch('https://dog.ceo/api/breeds/image/random').then((response) => {  
      return response.json();
    }).then((data) => {
      // update state to random dog pic
      this.setState({ dog: data });
    });
  }

  render() {
    return (
      <section className="card">
        <img className="dog-img" src={this.state.dog.message} alt="a dog" />
        <button onClick={this.getDog}>Get Another Dog</button>
      </section>
    );
  }
}

export default Dog;