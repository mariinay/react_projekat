import React from 'react';
import {BsBookmarkHeart} from 'react-icons/bs'
import {BsBookmarkHeartFill} from 'react-icons/bs'


const AdvDetails = ({advertisement, onAdd, onRemove}) => {
  return (
  <div className='adv-details'>
      <img className='adv-details-img' src={advertisement.img} alt="Advertisement"/>
        <div className='adv-details-body'>
            <h3 className='adv-position'>{advertisement.position}</h3>
            <h5 className='adv-company'>{advertisement.company}</h5>
            <p className='adv-description'>{advertisement.description}</p>
        
            {advertisement.saved === false ? (
                    
                    <button className='adv-btn-save'onClick={()=> onAdd(advertisement.id)}>
                        <span>Save </span>  
                        <span><BsBookmarkHeart/></span>
                    </button>
                    
                ):
                (
                    
                    <button className='adv-btn-remove'onClick={()=> onRemove(advertisement.id)}>
                        <span>Remove </span>  
                        <span><BsBookmarkHeartFill/></span>
                    </button>
                
                )
            }
        </div>

    </div>
)};

export default AdvDetails;
