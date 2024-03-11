import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import heroImg from './assest/hero.png';
import HeroFooter from '../heroFooter/HeroFooter';

function HeroBody() {
  return (
    <>
    <div className='hero-main'>
       <Row className='hero-main-row'>
           <Col lg={6} className='hero-main-row-col1'>
               <p className='hero-para1'>FIND CLOTHES THAT MATCHES YOUR STYLE</p>
               <p className='hero-para2'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
               <p className='hero-para3'>Shop Now</p>
               <Row className='hero-para4'>
                  <Col lg={4} xs={6}  md={4} className='hero-para4-col1'>
                      <p className='para4-col1-para1'>200+</p>
                      <p className='para4-col1-para2'>International Brands</p>
                  </Col>
                  <Col lg={4} xs={6}  md={4} className='hero-para4-col2'>
                      <p className='para4-col2-para1'>2,000+</p>
                      <p className='para4-col2-para2'>High-Quality Products</p>
                  </Col>
                  <Col lg={4} xs={12}  md={4} className='hero-para4-col3'>
                      <p className='para4-col3-para1'>30,000+</p>
                      <p className='para4-col3-para2'>Happy Customers</p>
                  </Col>
               </Row>
           </Col>

           <Col lg={6} className='hero-main-row-col2'>
               <img className='hero-main-img' src={heroImg} alt=''/>
           </Col>
       </Row>
    </div>

    <HeroFooter/>
    </>
  )
}

export default HeroBody;
