import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import ProductCard from '../productCard/ProductCard';

const YouMightLike = (props) => {
    const { category } = props;
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/product")
            .then((res) => {
                const allProducts = res.data;
                let filteredProducts = allProducts;

                
                if (category === "men-tshirt") {
                    filteredProducts = allProducts.filter(product => (
                        product.ProductsType === "T-shirt" && product.gender === "male"
                    ));
                }

                setProduct(filteredProducts);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, [category]); 

    return (
        <div className='you-might-main'>
            <p className='you-might-row1'>YOU MIGHT ALSO LIKE</p>
            <Row className='you-might-row2'>
                {product?.slice(0, 4).map((val, index) => (
                    <Col xl={3} key={index}>
                        <ProductCard
                            productIm={val.frontImage}
                            productName={val.ProductsName}
                            rating={val.rate}
                            price={val.Price}
                            newPrice={val.newPrice}
                        />
                    </Col>
                ))}
            </Row>
            <p className='you-might-row3'>View All</p>
            <hr />
        </div>
    );
}

export default YouMightLike;
