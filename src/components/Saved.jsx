import React from 'react';
import OneAdvertisement from './OneAdvertisement';

const Saved = ({savedAdvertisements, onAdd, onRemove}) => {
  return (
    <div className='saved-container'>
      <h1>Saved advertisements:</h1>
      <div className='saved-adv'>
        {savedAdvertisements.map((adv) => (<OneAdvertisement advertisement={adv} key={adv.id} onAdd={onAdd} onRemove={onRemove}/>))}
      </div>
      
  </div>
  
  );
};

export default Saved;
