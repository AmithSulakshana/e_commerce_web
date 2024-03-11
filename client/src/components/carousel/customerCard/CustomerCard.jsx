import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import StarRatings from 'react-star-ratings'
import truemark from './assest/truemark.png';

const CustomerCard = (props) => {
    const {rate,userName,comment,width,date} = props
    const widthdec= {width:width||'100%'}
    
  return (
    <div className='customer-card-main' style={widthdec} >
        <Row>
            <StarRatings 
                rating={rate}
                starDimension="22.5px"
                starRatedColor='#FFC633'
                starEmptyColor='white'
            />
        </Row>

        <Row className='customer-row2'>
            <div className='customer-row2-div1'>
                <p className='customer-row2-div1-para1'>{userName}</p>
                <img className='row2-div1-img' src={truemark} alt=''/>
            </div>
        </Row>

        <Row className='customer-row3'>
            <p className='customer-row3-para'>{comment}</p>
        </Row>
        {date&&
            <p className='m-0'>Posted on {date}</p>
        }
    </div>
  )
}

export default CustomerCard;
