import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../../components/productCard/ProductCard';
import { useNavigate } from 'react-router';


const NewArrival = () => {
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
    <div className='d-flex'>
      {product.slice(-4).map((val,index)=>{
        return(
            <div key={index} onClick={()=>handleClick(val)}>
              <ProductCard
                productIm={val.frontImage}
                productName={val.ProductsName}
                rating={4.5}
                price={val.Price}
                //newPrice={val.newPrice}
              />

        </div>
        );
        
      })}
    </div>
  )
}

export default NewArrival;
