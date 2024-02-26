import React from 'react';
import deleticon from '../assest/Frame.png';
import minus from '../assest/minus.png';
import plus from '../assest/plus.png';

const ShoppingCard = (props) => {
    const{itemImg,itemName,price,size,colour,quntity,clickMinus,clickPlus,clickdelete} =props;
  return (
    <div className='shopping-card-main'>
        <div className='shopping-card-div1'>
           <img className='shopping-card-div1-img' src={itemImg} alt=''/>
        </div>

        <div className='shopping-card-div2'>
            <div className='shopping-card-div2-div1'>
                 <p className='shopping-card-para1'>{itemName}</p>
                 <p className='shopping-card-para2'>size: <span className='size-col'>{size}</span></p>
                 <p className='shopping-card-para3'>colour: <span className='color-col'>{colour}</span></p>
                 <p className='shopping-card-para4'>${price}</p>
            </div>

            <div className='shopping-card-div2-div2'>
               <img src={deleticon} style={{width:"24px",height:"24px"}} onClick={clickdelete} alt=''/>
               <div className='quntity-box'>
                  <img onClick={clickMinus} style={{width:"20px",height:"20px"}} src={minus} alt='' />
                  <span>{quntity}</span>
                  <img onClick={clickPlus} style={{width:"20px",height:"20px"}}  src={plus} alt=''/>
               </div>
            </div>
        </div>
       
      
    </div>
  )
}

export default ShoppingCard;
