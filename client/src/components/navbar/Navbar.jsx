import React, { useState } from 'react';
import searchIcon from './assest/Vector.png';

const Navbar = () => {
    const [showSaleDropdown, setShowSaleDropdown] = useState(false);
  return (
    <div className='nav-main'>
        <div className='d-flex nav-main-div'>
            <span className='nav-main-span1'>SHOP.CO</span>
            <span className='nav-main-span1' onClick={() => setShowSaleDropdown(!showSaleDropdown)}>On Sale</span>
        {showSaleDropdown && (
          <ul className='nav-ui dropdown'>
            <li>Sale Option 1</li>
            <li>Sale Option 2</li>
            <li>Sale Option 3</li>
            {/* Add more dropdown items as needed */}
          </ul>
        )}
            <span>On Sale</span>
            <span>New Arrivals</span>
            <span>Brand</span>
            
        </div>

        <div className='d-flex'>
            <input className='rounded-4' placeholder='search'/>
            <img src={searchIcon} alt=''/>

        </div>
    </div>
  )
}

export default Navbar;
