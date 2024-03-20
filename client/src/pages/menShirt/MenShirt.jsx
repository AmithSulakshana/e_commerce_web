import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PathNarrow from '../../components/pathNarraror/PathNarrow';
import axios from 'axios';
import ProductDetails from '../../components/productDetails/ProductDetails';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../store/reducers/ProductSlice';
import { addToCart } from '../../store/reducers/CartSlice';
import Review from '../../components/review/Review';
import NewArriavals from '../home/newArrival/NewArrival';
import YouMightLike from '../../components/youmightlike/YouMightLike';

const MenShirt = () => {
    const{id} = useParams();
    const dispatch = useDispatch()
    const quan = useSelector(store=>store.productSlice.quantity)
    const prod = useSelector(store=>store.productSlice.product)
    const numOfItems = useSelector(store=>store.cartSlice.numberOfItem)

   
    useEffect(() => {
      axios.get(`http://localhost:3001/product/byId/${id}`).then((res) => {
          dispatch(addProduct({product:res.data}))
      
      }).catch(error => {
          console.error('Error fetching product:', error);
      });
    }, []);

    const handleAddToCart = () => {
      axios.post("http://localhost:3001/cart", {
          ProductId: prod.id,
          quntity:quan
      }, {
          headers: {
              accessToken: localStorage.getItem("accessToken")
          }
      }).then((res) => {
          console.log(res.data);
          dispatch(addToCart({quntity:numOfItems+quan}))
      }).catch((error) => {
          console.error('Error adding to cart:', error);
      });
    };

    if (!prod) {
      return <div>Loading...</div>;
    }
   
 
    
  return (
    <div>
      <PathNarrow padinLeft='50px'/>
          <div>
               <ProductDetails
                 backImg={prod.backImage}
                 frontImg = {prod.frontImage}
                 sideImg={prod.sideImage}
                 price = {prod.Price}
                 newPrice = {prod.newPrice}
                 productName ={prod.ProductsName}
                 rating={prod.rate}
                 colour={prod.colour}
                 size={prod.size}
                 clickAddToCart={handleAddToCart}
               />
              
          </div>
          <Review/>
          <YouMightLike
            catagory="men-tshirt"
          />
        
     
    </div>
  )
}

export default MenShirt;
