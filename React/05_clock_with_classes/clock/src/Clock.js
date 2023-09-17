import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }

  // Update the clock, once per second
  componentDidMount() {
    this.tickID = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tickID);
  }

  render() {
    const hours = this.state.time.getHours();

    return (
      <span className='time'>
        {this.state.time.toLocaleTimeString()}
        {hours >= 12 ? ' PM' : ' AM'}
      </span>
    );
  }
}

export default Clock;
