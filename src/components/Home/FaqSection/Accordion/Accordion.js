import React from 'react';
import AccordionState from '../AccordionState/AccordionState';
import { accordionData } from '../AccordionData/AccordionData';

const Accordion = () => {
  return (
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <AccordionState key={Math.random()} title={title} content={content} />
        ))}
      </div>
  );
};

export default Accordion;
