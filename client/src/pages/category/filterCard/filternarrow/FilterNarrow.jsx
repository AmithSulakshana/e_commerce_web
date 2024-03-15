import React, { useState } from 'react';
import arrow1 from '../assest/arrow1.png';
import arrowup from '../assest/arrowup.png';

const FilterNarrow = (props) => {
    const{heder}=props
    const[display,setDisplay] = useState(false);

    const handleToggle = () =>{
        setDisplay(!display)
    }

  return (
    <div className='filter-narrow-main'>
         <div className='filter-row2'>
            <p className='filter-row2-para1'>{heder}</p>
            <img className='filter-row2-im1' src={!display ? arrow1 : arrowup} alt='' onClick={handleToggle}/>
         </div>
         { display &&
            <div className='filter-narrow-para'>
                <p>Men</p>
                <p>Women</p>
            </div>
         }
         
    </div>
  )
}

export default FilterNarrow;
