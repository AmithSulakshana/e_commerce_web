import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PathNarrow from '../../components/pathNarraror/PathNarrow';
import axios from 'axios';
import ProductDetails from '../../components/productDetails/ProductDetails';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../store/reducers/ProductSlice';
import { addToCart } from '../../store/reducers/CartSlice';
import Review from '../../components/review/Review';

const MenShirt = () => {
    const{id} = useParams();
    const[product,setProduct] = useState();
    const dispatch = useDispatch()
    const quan = useSelector(store=>store.productSlice.quantity)
    const color = useSelector(store=>store.productSlice.colour)
    const size = useSelector(store=>store.productSlice.size)
    const numOfItems = useSelector(store=>store.cartSlice.numberOfItem)

    useEffect(()=>{
      axios.get(`http://localhost:3001/product/detailsearch/${id}`,{
            params:{color:color,size:size}
          }).then((res)=>{
            const updatedProduct = res.data;
                setProduct(updatedProduct);
                  
          })
    },[color,size])
 

    useEffect(() => {
      axios.get(`http://localhost:3001/product/byId/${id}`).then((res) => {
          setProduct(res.data);
          dispatch(addProduct({product:res.data}))
      
      }).catch(error => {
          console.error('Error fetching product:', error);
      });
    }, []);

    const handleAddToCart = () => {
      axios.post("http://localhost:3001/cart", {
          ProductId: product.id,
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

    if (!product) {
      return <div>Loading...</div>;
    }
   
 console.log(product)
    
  return (
    <div>
      <PathNarrow padinLeft='50px'/>
          <div>
               <ProductDetails
                 backImg={product.backImage}
                 frontImg = {product.frontImage}
                 sideImg={product.sideImage}
                 price = {product.Price}
                 newPrice = {product.newPrice}
                 productName ={product.ProductsName}
                 rating={product.rate}
                 colour={product.colour}
                 size={product.size}
                 clickAddToCart={handleAddToCart}
               />
          </div>
          <Review/>
        
     
    </div>
  )
}

export default MenShirt;
