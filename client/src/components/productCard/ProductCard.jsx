import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import StarRating from './StarRating';

const ProductCard = (props) => {
   const {productIm,productName,rating,price,newPrice}=props
   const rate = Math.floor(((newPrice - price) / price) * 100);


  return (
    <div className='product-card-main'>
       <Row className='product-card-main-row1'>
          <img src={productIm} alt=''/>
       </Row>
       <Row className='product-card-main-row2'>
          <p className='product-card-para'>{productName}</p>
       </Row>
       <Row className='product-card-main-row3'>
            <div>
                <StarRating
                  rating={rating}

                />
           </div>
       </Row>
       <Row className='product-card-main-row4'>
          {newPrice ? (
             <div className='row4-div1'>
                   <p className='row4-div1-para1'>${newPrice} </p>
                   <p className='row4-div1-para2'>${price}</p>
                   <p className='row4-div1-para3'>{rate}%</p>
             </div>
          ):(
            <p>{price}</p>
          )}
          
       </Row>
    </div>
  )
}

export default ProductCard;
