import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus  } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import './AccordionState.css';


const AccordionState = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item-vuhu  wow animate__animated animate__slideInRight" data-wow-duration="2s" >
      <div className="accordin-header bg-violet" onClick={() => setIsActive(!isActive)}>
        <div className="row">
            <div className="col-11">
                <h2 className="accordion-title">
                {title}
                </h2>
            </div>
            <div className="accordion-header-icon col-1 text-end">
               {isActive ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} /> }
            </div>
        </div>
      </div>
      {
      isActive && 
        <div className="accordin-info-body bg-grey-2">
            <p className="accordion-desc">
            {content}
            </p>
        </div>
     }
    </div>
  );
};

export default AccordionState;