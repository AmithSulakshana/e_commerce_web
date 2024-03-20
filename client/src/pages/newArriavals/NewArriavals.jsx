import React, { useEffect, useState } from 'react';
import PathNarrow from '../../components/pathNarraror/PathNarrow';
import Pagination from '@mui/material/Pagination';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import axios from 'axios';
import ProductCard from '../../components/productCard/ProductCard';
import { useNavigate } from 'react-router-dom';

const NewArriavals = () => {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:3001/product")
      .then((res) => {
        setProduct(res.data.reverse());
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = product?.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleClick = (val) => {
    if (val.gender === "male" && val.ProductsType === "T-shirt") {
        navigate(`/men/shirt/${val.id}`);
    } else {
        console.log(val.gender);
    }
};

  return (
    <div className='newarri-main'>
      <PathNarrow />
      <Row className='newarri-row1'>
        {currentProducts.map((val, index) => (
          <Col key={index} xl={3} className='newarri-row1-col1' onClick={()=>handleClick(val)}>
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
      <Pagination
        shape="rounded"
        count={Math.ceil(product.length / productsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default NewArriavals;
