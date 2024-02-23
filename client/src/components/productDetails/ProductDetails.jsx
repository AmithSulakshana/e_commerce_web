import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import backim from './assest/backim.png';
import frontim from './assest/frontim.png';
import sideim from './assest/sideim.png';
import StarRating from '../productCard/StarRating';

const ProductDetails = (props) => {
    const{backImg,frontImg,sideImg,price,newPrice,rating,productName} = props;
    const rate = Math.floor(((newPrice - price) / price) * 100);
  return (
    <div className='product-details-main'>
        <Row className='product-details-main-row1'>
            <Col lg={6} className='pro-row1-col1'>
               <div className='row1-col1-div1'>
                   <div className='row1-col1-img'>
                       <img className='imge-size1' src={backImg} alt=''/>
                       <img className='imge-size1' src={frontImg} alt=''/>
                       <img className='imge-size1' src={sideImg} alt=''/>
                   </div>
                   <div className='row1-col1-imglarge'>
                       <img className='imge-size2' src={backImg} alt=''/>
                   </div>
               </div>
            </Col>
            <Col lg={6} className='pro-row1-col2'>
                <p className='row1-col2-para1'>{productName}</p>
                <StarRating rating={rating}/>
                <div className='row1-col2-div1'>
                    {newPrice ? (
                       <div className='row4-div1'>
                             <p className='row4-div1-para1'>${newPrice} </p>
                             <p className='row4-div1-para2'>${price}</p>
                             <p className='row4-div1-para3'>{rate}%</p>
                       </div>
                    ):(
                      <p className='row4-div-para1'>${price}</p>
                    )}
          
                </div>
                <p className='row1-col2-para2'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                <hr></hr>
                <p className='row1-col2-para3'>Select Colors</p>
                <div>
                    <button>red</button>
                    <button>blue</button>
                </div>
                <hr></hr>
                <p>Choose Size</p>
                <div>
                    <button>small</button>
                    <button>medium</button>
                    <button>large</button>
                    <button>x-large</button>
                </div>
                <hr></hr>
                <div>
                    <button>-</button>
                    <button>+</button>
                    <button>Add to cart</button>
                </div>
                
            </Col>
        </Row>
    </div>
  )
}

export default ProductDetails;
