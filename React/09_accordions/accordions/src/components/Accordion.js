import React from 'react';
import { questions } from '../data';
import { AccordionSection } from './AccordionSection.js';

const Accordion = () => {
  return (
    <ul className="accordion">
      {questions.map((question, index) => (
        <AccordionSection key={index} question={question} />
      ))}
    </ul>
  );  
};

export default Accordion;
