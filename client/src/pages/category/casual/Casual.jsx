import React, { useEffect, useState } from 'react';
import FilterCard from '../filterCard/FilterCard';
import PathNarrow from '../../../components/pathNarraror/PathNarrow';
import Pagination from '@mui/material/Pagination';
import axios from 'axios';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import ProductCard from '../../../components/productCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../../store/reducers/FilterSlice';
import { CgMenuGridO } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

const Casual = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;
    const dispatch = useDispatch()
    const filtered = useSelector(store=>store.filterSlice)
    const[menu,setMenu] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:3001/product/catagory").then((res) => {
            
            dispatch(updateFilter({casual:res.data}))
        });
    }, []);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filtered.casual.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePaginationChange = (event, value) => {
        setCurrentPage(value);
    };

    const handleMenu = () =>{
        setMenu(!menu)
    }

    const handleClick = (val) =>{
        if (val.gender === "male" && val.ProductsType === "T-shirt") {
            navigate(`/men/shirt/${val.id}`);
        } else {
            console.log(val.gender);
        }
    }


    return (
        <div className='casual-main'>
            <PathNarrow/>
            <div className='filter-menu' onClick={handleMenu}>
                <CgMenuGridO/>
            </div>
            <div className='casual-div1'>
                {menu &&
                   <FilterCard/>
                }

                <div className='casual-div1-div1'>
                    <p className='casual-div1-para1'>Casual</p>
                    <Row>
                        {currentProducts.map((val, index) => (
                            <Col key={index}  className='mb-4' onClick={()=>handleClick(val)}>
                                <ProductCard
                                    productIm={val.frontImage}
                                    productName={val.ProductsName}
                                    rating={4.5}
                                    price={val.Price}
                                    newPrice={val.newPrice}
                                />
                            </Col>
                        ))}
                    </Row>
                    <div className='mt-3 mb-2'>
                        <Pagination count={Math.ceil(filtered.casual.length / productsPerPage)} shape="rounded" onChange={handlePaginationChange} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Casual;
