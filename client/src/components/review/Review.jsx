import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Frame from './assest/Frame.png';
import arow from './assest/arow.png';
import { useParams } from 'react-router-dom';
import CustomerCard from '../carousel/customerCard/CustomerCard';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';





const Review = () => {
    const{id} = useParams()
    const[prod,setProd] = useState(false);
    const[rating,setRating] = useState(true)
    const[faq,setFaq] = useState(false);
    const[review,setReview] = useState([]);
    const[com,setCom] = useState(false)
    const [ratingValue, setRatingValue] = useState(2); 
    const[comment,setComment] = useState('')
    const[count,setCount] = useState(0)
    const [displayedComments, setDisplayedComments] = useState(6);
    const today = new Date()

  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue); 
  };

    const handleProductDetails = () =>{
       setProd(true)
       setRating(false)
       setFaq(false)
    }

    const handleRating = () =>{
        setRating(true)
        setProd(false)
        setFaq(false)
        setCom(false)
    }

    const handleFaq = () =>{
        setFaq(true);
        setProd(false)
        setRating(false)
    }

    const handleWriteComment = () =>{
       setRating(false)
       setCom(true)
    }

    const handleAddComment = () =>{
      axios.post('http://localhost:3001/review',{rate:ratingValue,comment:comment,date:getDate(),ProductId:id},
      {
        headers: {
          accessToken: localStorage.getItem("accessToken")
      }
      }
      ).then((res)=>{
        update()
        setCom(false)
        setRating(true)
        axios.put(`http://localhost:3001/product/${id}`).then((res)=>{
          console.log(res.data)
        })
      })
    }

    const getDate =()=> {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const monthName = months[today.getMonth()];
      const year = today.getFullYear();
      const date = today.getDate();
      return `${monthName} ${date}, ${year}`;
    }

    const update = () =>{
      axios.get(`http://localhost:3001/review/${id}`).then((res)=>{
        setReview(res.data.Review)
        setCount(res.data.reviewCount)
        
      })
    }

    const handleShowMore = () => {
      setDisplayedComments(displayedComments + 6);
  };

    useEffect(()=>{
      update();
    },[])
    
    
   
  return (
    <div className='review-main'>
      <Row className='review-main-row1'>
        <Col onClick={handleProductDetails} className={`review-row1-col1 ${prod?'border-bottom':''}`}>Product Details</Col>
        <Col onClick={handleRating} className={`review-row1-col1 ${rating?'border-bottom':''}`}>Rating & Reviews</Col>
        <Col onClick={handleFaq} className={`review-row1-col1 ${faq?'border-bottom':''}`}>FAQs</Col>
      </Row>
      <div className='review-row2'>
         <div className='review-row2-div1'>
            <p className='row2-div1-para1'>All Reviews</p>
            <p className='m-0 pt-2 ps-1'>({count})</p>
         </div>
         <div className='review-row2-div2'>
              <div className='row2-div2-div1'>
                 <img src={Frame} alt='frame'/>
              </div>
              <div className='row2-div2-div2'>
                  <p className='m-0 d-flex justify-content-center align-items-center'>Latest</p>
                  <img className='arow-img' src={arow} alt=''/>
              </div>
              <div className='row2-div2-div3' onClick={handleWriteComment}>
                 Write a Review
              </div>

         </div>
      </div>
      {rating && 
         <Row className='review-row3'>
            {review.slice(0, displayedComments).map((val, index) => {
              return (
                  <Col className='p-1' key={index} xl={6} lg={6}>
                      <CustomerCard
                          rate={val.rate}
                          userName={val.userName}
                          comment={val.comment}
                          date={val.date}
                       />
                  </Col>
              );
            })}

             {review.length > displayedComments && (
                <div className='review-row3-div1' onClick={handleShowMore}>
                    Load More Reviews
                </div>
            )}
      </Row>
      }

      { com && 
         <div className='review-row4'>
         <textarea className='review-row4-input' placeholder='Add Comment' onChange={(e)=>setComment(e.target.value)} ></textarea>
         <Rating
          name="half-rating"
          value={ratingValue} 
          onChange={handleRatingChange} 
          precision={0.5}
        />
        <Button color="secondary" onClick={handleAddComment}>Add Comment</Button>
      </div>
      }
      
     
    </div>
  )
}

export default Review;
