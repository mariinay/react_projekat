import React from 'react';
import {BsBookmarkHeart} from 'react-icons/bs'

const OneAdvertisement = ({advertisement}) => {
  return (
    <div className='adv'>
        <img className='adv-img-top' src={advertisement.img} alt="Advertisement"/>
        <div className='adv-body'>
            <h3 className='adv-position'>{advertisement.position}</h3>
            <h5 className='adv-company'>{advertisement.company}</h5>
            <p className='adv-description'>{advertisement.description}</p>
            <button className='adv-btn'>
                <span>Save </span>  
                <span><BsBookmarkHeart/></span>
            </button>
        </div>
    </div>
  );
};

export default OneAdvertisement;
