import React, { useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import StarRating from '../productCard/StarRating';
import {useDispatch, useSelector } from 'react-redux';
import { addQuantity } from '../../store/reducers/ProductSlice';
import tik from './assest/tik.png';
import minus from '../shoppingCart/assest/minus.png'
import plus from '../shoppingCart/assest/plus.png'

const ProductDetails = (props) => {
    const{backImg,frontImg,sideImg,price,newPrice,rating,productName,colour,size,clickRed,clickBlue,
    clickSmall,clickAddToCart} = props;
    const rate = Math.floor(((newPrice - price) / price) * 100);
    const[lagreImage,setLargeImage] = useState(backImg)
    const[selectedImg,setSelectedImg] = useState(backImg);
    const[selectedColour,setSelectedColour] = useState(colour)
    const[selectedSize,setSelectedSize] = useState(size);

    const quan = useSelector(store=>store.productSlice.quantity)
    const dispatch = useDispatch();
    

    const handleChangeImg = (img) =>{
        setLargeImage(img)
        setSelectedImg(img)
    }

    const handleRed = () =>{
        setSelectedColour("red")
        clickRed()
       
    }

    const handleBlue = () =>{
        setSelectedColour("blue")
        clickBlue()
    }

    const handleSm = () =>{
        setSelectedSize("sm")
        clickSmall()
    }

    const handleReduce = () =>{
        if(quan>1){
          const quant=quan-1;
           dispatch(addQuantity({quantity:quant}))
        }
    }

    const handleIncrease = ()=>{
        const quant = quan+1;
        dispatch(addQuantity({quantity:quant}))
    }
 
  return (
    <div className='product-details-main'>
        <Row className='product-details-main-row1'>
            <Col lg={6} className='pro-row1-col1'>
               <div className='row1-col1-div1'>
                   <div className='row1-col1-img'>
                       <img className={`imge-size1 ${selectedImg===backImg?'imge-size1-border':''}`} src={backImg} alt='' onClick={()=>handleChangeImg(backImg)}/>
                       <img className={`imge-size1 ${selectedImg===frontImg?'imge-size1-border':''}`} src={frontImg} alt='' onClick={()=>handleChangeImg(frontImg)}/>
                       <img className={`imge-size1 ${selectedImg===sideImg?'imge-size1-border':''}`} src={sideImg} alt='' onClick={()=>handleChangeImg(sideImg)}/>
                   </div>
                   <div className='row1-col1-imglarge'>
                       <img className='imge-size2' src={lagreImage} alt=''/>
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
                <div className='col2-div4'>
                    <button className='col2-div4-bt1' style={{background:'red'}} onClick={handleRed}>
                        {selectedColour === 'red' ?  <img src={tik} alt=''/>:'' }
                    </button>
                    <button className='col2-div4-bt1' style={{background:'blue'}} onClick={handleBlue}>
                        {selectedColour === 'blue' ?  <img src={tik} alt=''/>:'' }
                    </button>
                </div>
                <hr></hr>
                <p className='col2-div5'>Choose Size</p>
                <div className='col2-div6'>
                    <button className={`col2-div6-btn1 ${selectedSize==="sm" ? 'col2-div6-btn1-click' :''}`} onClick={handleSm}>Small</button>
                    <button className={`col2-div6-btn1 ${selectedSize==="md" ? 'col2-div6-btn1-click' :''}`} onClick={()=>setSelectedSize("md")}>Medium</button>
                    <button className={`col2-div6-btn1 ${selectedSize==="lg" ? 'col2-div6-btn1-click' :''}`} onClick={()=>setSelectedSize("lg")}>Large</button>
                    <button className={`col2-div6-btn1 ${selectedSize==="xl" ? 'col2-div6-btn1-click' :''}`} onClick={()=>setSelectedSize("xl")}>X-Large</button>
                </div>
                <hr></hr>
                <div className='col2-div7'>
                    <div className='col2-div7-div1'>
                        <img src={minus} alt='' className='col2-div7-div1-btn1' onClick={handleReduce}/>
                           {quan}
                        <img src={plus} alt='' className='col2-div7-div1-btn1' onClick={handleIncrease}/>     
                    </div>

                    <div className='col2-div7-div2' onClick={clickAddToCart}>
                        Add to Cart
                    </div>
                        
                </div>
                
            </Col>
        </Row>
    </div>
  )
}

export default ProductDetails;
