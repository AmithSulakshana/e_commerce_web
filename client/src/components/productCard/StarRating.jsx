import React from 'react';
import halfstar from './assest/halfstar.png';
import star from './assest/starfull.png';

const StarRating = ({ rating }) => {
    
    const roundedRating = Math.round(rating * 2) / 2; 

    const fullStars = Math.floor(roundedRating);
    const hasHalfStar = roundedRating % 1 !== 0;

    let stars = [];

    
    for (let i = 0; i < fullStars; i++) {
        stars.push(<img style={{width:"18.49px",height:"18.49px"}} key={i} src={star} alt="Full star" />);
    }

    
    if (hasHalfStar) {
        stars.push(<img style={{width:"18.49px",height:"18.49px"}} key="half" src={halfstar} alt="Half star" />);
    }


    // const emptyStars = 5 - Math.ceil(roundedRating);

    // for (let i = 0; i < emptyStars; i++) {
    //     stars.push(<img key={`empty${i}`} src={star} alt="Empty star" />);
    // }

    return (
        <div className='d-flex'>
            {stars}
            <p className='m-0 ' style={{fontSize:"14px",fontWeight:"400"}}>{roundedRating}/5</p>
        </div>
    );
}

export default StarRating;
