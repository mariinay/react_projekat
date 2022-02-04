import React from 'react';
import OneAdvertisement from './OneAdvertisement';

const Advertisements = ({advertisements}) => {
    
    const position = 'Position';
    const company = 'Company';
    const description = "Description";

  return (
    <div className='all-adv'>
        {advertisements.map((advertisement)=> (
            <OneAdvertisement advertisement={advertisement} />
        ))}
    </div>
  );
};

export default Advertisements;
