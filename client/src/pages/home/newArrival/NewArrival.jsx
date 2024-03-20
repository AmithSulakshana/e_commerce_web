import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProductCard from '../../../components/productCard/ProductCard';
import { useNavigate } from 'react-router';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';


const NewArrival = (props) => {
    const { headline } = props;
    const [product, setProduct] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3001/product")
            .then((res) => {
                setProduct(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    useEffect(() => {
        const sortedProducts = [...product].sort((a, b) => b.rate - a.rate);
        setFiltered(sortedProducts);
    }, [product]);

    const handleClick = (val) => {
        if (val.gender === "male" && val.ProductsType === "T-shirt") {
            navigate(`/men/shirt/${val.id}`);
        } else {
            console.log(val.gender);
        }
    };

    const handleViewNewAvailable = () =>{
        navigate('/newarriaval')
    }

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className='newArrival-main'>
            <Row className='newArrival-main-row'>
                <p className='row1-para1'>{headline}</p>
            </Row>

            <Row className='newArrival-main-row2'>
                {headline === "NEW ARRIVALS" && product.slice(-4).map((val, index) => (
                    <Col lg={3} xs={12} md={6} key={index} onClick={() => handleClick(val)}>
                        <ProductCard
                            productIm={val.frontImage}
                            productName={val.ProductsName}
                            rating={val.rate}
                            price={val.Price}
                            newPrice={val.newPrice}
                        />
                    </Col>
                ))}
                {headline === "TOP SELLING" && filtered.slice(0,4).map((val, index) => (
                    <Col lg={3} xs={12} md={6} key={index} onClick={() => handleClick(val)}>
                        <ProductCard
                            productIm={val.frontImage}
                            productName={val.ProductsName}
                            rating={val.rate}
                            price={val.Price}
                            newPrice={val.newPrice}
                        />
                    </Col>
                ))}

                {headline === "YOU MIGHT ALSO LIKE" && filtered.slice(0,4).map((val, index) => (
                    <Col lg={3} xs={12} md={6} key={index} onClick={() => handleClick(val)}>
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

            <Row className='newArrival-main-row3' onClick={handleViewNewAvailable}>
                <p className='newArrival-para1-buton'>View All</p>
            </Row>
            <hr />
        </div>
    );
};

export default NewArrival;
