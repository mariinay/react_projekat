import React from 'react';
import OneAdvertisement from './OneAdvertisement';

const Advertisements = ({advertisements, onAdd, onRemove, readMore}) => {


  return (
    <div className='all-adv'>
        {advertisements.map((advertisement)=> (
            <OneAdvertisement advertisement={advertisement} key={advertisement.id} onAdd={onAdd} onRemove={onRemove} readMore={readMore}/>
        ))}
    </div>
  );
};

export default Advertisements;
