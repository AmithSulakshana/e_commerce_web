import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../../components/productCard/ProductCard';
import { useNavigate } from 'react-router';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


const NewArrival = (props) => {
    const{headline} = props;
    const[product,setProduct] = useState([])
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:3001/product").then((res)=>{
           setProduct(res.data)
        })
     },[])
     
     const handleClick = (val) =>{
         if(val.gender==="male"){
            if(val.ProductsType==="T-shirt"){
               navigate(`/men/shirt/${val.id}`)
            }
         }
         else{
            console.log(val.gender)
         }
     }
  return (
    <div className='newArrival-main'>
      <Row className='newArrival-main-row'>
        <p className='row1-para1'>{headline}</p>
      </Row>

      <Row className='newArrival-main-row2'>
        {product.slice(-4).map((val,index)=>{
          return(
            <Col lg={3} xs={12} md={6} key={index} onClick={()=>handleClick(val)}>
               <ProductCard
                productIm={val.frontImage}
                productName={val.ProductsName}
                rating={4.5}
                price={val.Price}
                newPrice={val.newPrice} 
              />
            </Col>
          )
        })}
      </Row>

      <Row className='newArrival-main-row3'>
        <p className='newArrival-para1-buton'>View All</p>
      </Row>
      <hr/>

    </div>
  )
}

export default NewArrival;
