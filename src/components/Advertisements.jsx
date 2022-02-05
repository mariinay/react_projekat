import React from 'react';
import OneAdvertisement from './OneAdvertisement';

const Advertisements = ({advertisements, onAdd, onRemove}) => {


  return (
    <div className='all-adv'>
        {advertisements.map((advertisement)=> (
            <OneAdvertisement advertisement={advertisement} key={advertisement.id} onAdd={onAdd} onRemove={onRemove} />
        ))}
    </div>
  );
};

export default Advertisements;
