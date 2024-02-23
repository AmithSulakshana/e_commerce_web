import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PathNarrow from '../../components/pathNarraror/PathNarrow';
import axios from 'axios';
import ProductDetails from '../../components/productDetails/ProductDetails';

const MenShirt = () => {
    const{id} = useParams();
    const[product,setProduct] = useState([]);
    const [blueColour, setBlueColour] = useState([]);
    const [redColour, setredColour] = useState([]);

    useEffect(() => {
      axios.get(`http://localhost:3001/product/byId/${id}`).then((res) => {
          setProduct(res.data);
      }).catch(error => {
          console.error('Error fetching product:', error);
      });
    }, [id]);

    useEffect(() => {
      const blueProducts = product.filter(item => item.colour === "blue");
      setBlueColour(blueProducts);

      const redProducts = product.filter(item => item.colour === "red");
      setredColour(redProducts)
  }, [product]); 
    console.log(redColour)
  
  return (
    <div>
      <PathNarrow/>
       {redColour.map((val,index)=>{
        return(
          <div key={index}>
               <ProductDetails
                 backImg={val.backImage}
                 frontImg = {val.frontImage}
                 sideImg={val.sideImage}
                 price = {val.Price}
                 newPrice = {val.newPrice}
                 productName ={val.ProductsName}
                 rating={4.5}
               />
          </div>
        )
       })}
    </div>
  )
}

export default MenShirt;
