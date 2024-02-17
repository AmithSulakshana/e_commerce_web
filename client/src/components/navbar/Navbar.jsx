import React, { useState } from 'react';
import searchIcon from './assest/Vector.png';
import { IoMdMenu } from "react-icons/io";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Avatar from '../avatar/Avatar';
import Dropdownmen from '../dropdown/Dropdownmen';



const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {pathname} = useLocation();
  let subPage = pathname.split('/')?.[1];
  const user = useSelector(store=>store.userSlice)
  const navigate = useNavigate();
  const [avatarDropdownVisible, setAvatarDropdownVisible] = useState(false);


  function Linkness(type=null){
    if(subPage=== ''){
      subPage = 'home'
    }
    
    let classes = ''
    if(type===subPage){
      classes = '2px solid black';
    }

    else{
       classes=''
    }

    return classes
  }

  const handleLoging = () =>{
      navigate("/login")
  }

  const handleAvatarMouseEnter = () => {
    setAvatarDropdownVisible(true);
  };

  const handleAvatarMouseLeave = () => {
    setAvatarDropdownVisible(false);
  };


  return (
    <div className='nav-main'>
        <div className='nav-main-div'>
          <div className='offcanva-main'>
              <IoMdMenu onClick={handleShow} className='offcanva-menu' size="32px"/>
              <Offcanvas show={show} onHide={handleClose} className='nav-offcanva-main' style={{width:"60%"}}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title style={{fontSize:"30px"}}>SHOP.COM</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body style={{paddingTop:"2px"}}>
                  <div>
                    <Dropdown>
                      <Dropdown.Toggle style={{backgroundColor:"transparent",color:"black",border:"none",paddingLeft:"0px",fontSize:"24px"}}>Shop</Dropdown.Toggle>
                      <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <span style={{fontSize:"24px",margin:"2px"}}>On Sale</span><br/>
                    <span style={{fontSize:"24px",margin:"2px"}}>new Arrivals</span><br/>
                    <span style={{fontSize:"24px",margin:"2px"}}>Brand</span><br/>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
          </div>
            <Link to='/' className='nav-main-span1' >SHOP.CO</Link>
            <Dropdown className='nav-dropdown'>
                <Dropdown.Toggle variant="success" id="dropdown-basic" className='drop-toggle'>
                  <span style={{ borderBottom:Linkness('shop') }}>Shop</span>
                </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1"><Link to='shop/men'>Men</Link></Dropdown.Item>
                <Dropdown.Item href="#/action-2">Women</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link to='onsale' className='nav-main-span2' style={{ borderBottom:Linkness('onsale') }}>On Sale</Link>
            <Link to ='newarriaval' className='nav-main-span3' style={{ borderBottom:Linkness('newarriaval') }}>New Arrivals</Link>
            <Link to='brand' className='nav-main-span4' style={{ borderBottom:Linkness('brand') }}>Brand</Link>
            
        </div>

        <div className='nav-div2'>
            <img className='nav-search-icon' src={searchIcon} alt=''/>
            <input className='nav-input' placeholder='search for product'/>
           
        </div>

        <div className='nav-div3'>
            <img className='nav-search-icoo-small' src={searchIcon} alt=''/>
            <FaShoppingCart className='nav-cart'/>
                {user.authStatus ? (
                  <>
                      <Avatar
                        name={user.userName}
                        onMouseEnter={handleAvatarMouseEnter} 
                        onMouseLeave={handleAvatarMouseLeave} 

                      />
                    
                    {avatarDropdownVisible && <Dropdownmen
                         onMouseEnter={handleAvatarMouseEnter} 
                         onMouseLeave={handleAvatarMouseLeave} 
                    />}
                     
                  </>
              
                  ):(
                    <button className='nav-loging' onClick={handleLoging}>Loging</button>
                  )}   
        </div>
    </div>
  )
}

export default Navbar;
