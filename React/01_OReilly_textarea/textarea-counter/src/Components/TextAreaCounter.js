import React from 'react';

export class TextAreaCounter extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  // helper method for text change event handler
  onTextChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    const text = 'text' in this.state ? this.state.text : this.props.text;
    return (
      <div>
        <textarea value={text} onChange={event => this.onTextChange(event)} />
        <h3>{text.length}</h3>
      </div>
    );
  }
}

TextAreaCounter.defaultProps = {
  text: 'Count me as I type',
};
