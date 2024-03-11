import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import logo1 from './assest/logo1.png';
import logo2 from './assest/logo2.png';
import logo3 from './assest/logo3.png';
import logo4 from './assest/logo4.png';
import logo5 from './assest/logo5.png';
import Row from 'react-bootstrap/esm/Row';

const HeroFooter = () => {
  return (
    <div className='hero-footer-main'>
      <Row className='hero-footer-main-row'>
        <Col lg={6} className='hero-footer-main-row-col1'>
           <div className='col1-div'>
              <img className='col1-div-im1' src={logo1} alt=''/>
              <img className='col1-div-im1' src={logo2} alt=''/>
              <img className='col1-div-im1' src={logo3} alt=''/>
           </div>
        </Col>

        <Col lg={6} className='hero-footer-main-row-col2'>
            <div className='col2-div'>
              <img className='col2-div-im1' src={logo4} alt=''/>
              <img className='col2-div-im1' src={logo5} alt=''/>
            </div>
        </Col>

      </Row>
    </div>
  )
}

export default HeroFooter;
