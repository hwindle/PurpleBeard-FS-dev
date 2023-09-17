import React from 'react';

const CustomerInformation = (props) => {
  const {firstName, lastName} = props.info;
  return (
    <section>
      <span className="first">{ firstName }</span>
      <span className="last">{ lastName }</span>
    </section>
  )
};

export default CustomerInformation;