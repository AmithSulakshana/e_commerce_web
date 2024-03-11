import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import casual from './assest/casual.png';
import formal from './assest/formal.png';
import gym from './assest/gym.png';
import party from './assest/party.png';

function DressStyle() {
  return (
    <div className='dress-main'>
       <p className='dress-main-header'>BROWSE BY DRESS STYLE</p>
       <Row className='dress-row1'>
            <Col xl={5} lg={5}>
               <img className='dress-im1' src={casual} alt=''/>
            </Col>
            <Col xl={7} lg={7}>
                <img className='dress-im2' src={formal} alt=''/> 
            </Col>
       </Row>

       <Row className='dress-row2'>
            <Col xl={7} lg={7}>
               <img className='dress-im3' src={party} alt=''/>  
            </Col>
            <Col xl={5} lg={5}>
               <img className='dress-im4' src={gym} alt=''/>
            </Col>
       </Row>
    </div>
  )
}

export default DressStyle;
