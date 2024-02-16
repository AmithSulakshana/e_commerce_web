import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mailicon from './assest/mailicon.png';
import gpay from './assest/gpay.png';
import ipay from './assest/ipay.png';
import master from './assest/master.png';
import paypal from './assest/paypal.png';
import visa from './assest/visa.png';
import twitter from './assest/twitter.png';
import facebook from './assest/facebook.png';
import insta from './assest/insta.png';
import git from './assest/git.png';

const Footer = () => {
  return (
    <div className='footer-main'>
        <Row className='footer-row1'>
            <Col lg={7}>
                 <p  className='footer-row1-col1-heder'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</p>
            </Col>
            <Col lg={5}>
                <div className='footer-row1-col2'>
                    <div className='footer-row1-col2-div1'>
                         <img className='footer-mail-icon' src={mailicon} alt=''/> 
                         <input className='footer-input' placeholder='Enter your email address' />
                    </div>

                    <div className='footer-row1-col2-div2'>
                        <span className='footer-row1-col2-div2-button' >Subscribe to Newsletter</span>
                    </div>
                </div>
            </Col>
        </Row>

        <Row className='footer-row2'>
            <div className='footer-row2-div1'>
                <Row className='footer-row2-div1-row1'>
                   <Col lg={4}>
                      <span className='footer-row2-div1-row1-heder'>SHOP.CO</span>
                      <p className='footer-para2'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                      <div className='d-flex gap-2 pt-3'>
                          <img src={twitter} alt='' style={{width:'28px',height:'28px'}} />
                          <img src={facebook} alt='' style={{width:'28px',height:'28px'}} />
                          <img src={insta} alt='' style={{width:'28px',height:'28px'}} />
                          <img src={git} alt='' style={{width:'28px',height:'28px'}} />
                      </div>
                   </Col>
                   <Col lg={8}>
                      <Row>
                         <Col className='footer-list'>
                            <ul style={{listStyle:"none",padding:"0px"}}>
                                <li className='footer-list-1'>COMPANY</li>
                                <li className='footer-list-2'>About</li>
                                <li className='footer-list-2'>Features</li>
                                <li className='footer-list-2'>Works</li>
                                <li className='footer-list-2'>Career</li>
                            </ul>
                            

                            <ul style={{listStyle:"none",padding:"0px"}}>
                                <li className='footer-list-1'>HELP</li>
                                <li className='footer-list-2'>Customer Support</li>
                                <li className='footer-list-2'>Delivery Details</li>
                                <li className='footer-list-2'>Terms & Conditions</li>
                                <li className='footer-list-2'>Privacy Policy</li>
                            </ul>
                         </Col>
                        


                         <Col className='footer-list2'>
                         <ul style={{listStyle:"none",padding:"0px"}}>
                                <li className='footer-list2-1'>FAQ</li>
                                <li className='footer-list2-2'> Account</li>
                                <li className='footer-list2-2'>Manage Deliveries</li>
                                <li className='footer-list2-2'>Orders</li>
                                <li className='footer-list2-2'>Payments</li>
                            </ul>
                            
                            <ul style={{listStyle:"none",padding:"0px"}}>
                                <li className='footer-list2-1'>Resources</li>
                                <li className='footer-list2-2'>Free eBooks</li>
                                <li className='footer-list2-2'>Development Tutorial</li>
                                <li className='footer-list2-2'>How to - Blog</li>
                                <li className='footer-list2-2'>Youtube Playlist</li>
                            </ul>
                         </Col>
                      </Row>
                   </Col>
                </Row>
                
            </div>
            <hr style={{width:"80%",height:"2px",margin:'0 auto',marginTop:"-15px"}}/> 

            <Row className='footer-div2-row2'>
                   <Col lg={4}>
                     <p className='footer-div2-span1'>Shop.co © 2000-2023, All Rights Reserved</p>
                   </Col>

                   <Col lg={{ span: 4, offset: 4 }} className='d-flex'>
                      <img src={visa} alt='' className='footer-soim' />
                      <img src={master} alt='' className='footer-soim'/>
                      <img src={paypal} alt='' className='footer-soim'/>
                      <img src={ipay} alt='' className='footer-soim'/>
                      <img src={gpay} alt='' className='footer-soim'/>
                   </Col>   
            </Row>  
             
        </Row>
        
    </div>
  )
}

export default Footer;
