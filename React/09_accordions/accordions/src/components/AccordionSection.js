import React from 'react';

const AccordionSection = ({question}) => {
  const {header, content} = question;
  return (
    <li className="accordion_item">
      <button className="button">
        {header}
        <span className="control">—</span>
      </button>
      <div className="answer_wrapper">
        <div className="answer">{content}</div>
      </div>
    </li>
  );
};

export default AccordionSection;
