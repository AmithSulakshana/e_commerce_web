import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PathNarrow from '../../components/pathNarraror/PathNarrow';
import axios from 'axios';

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
       {redColour.length > 0 && (
                <div>
                    <h1>{redColour[0].ProductsName}</h1>
                    <h1>{redColour[0].colour}</h1>
                    <button>-</button>
                    <button>+</button>
                    <button>Add to cart</button>
                </div>
            )}
    </div>
  )
}

export default MenShirt;
