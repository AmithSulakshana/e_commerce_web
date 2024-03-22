import React, { useState } from 'react';
import Hnb from './assests/HnbLogo.jpg';
import masterCard from './assests/masterCard.jpg';
import VisaCard from './assests/VisaCard.png';
import cvn from './assests/cvn.jpg';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addTotalPrice } from '../../store/reducers/CartSlice';

function CheckOut() {
  const [mastercardChecked, setMastercardChecked] = useState(false);
  const [visaCardChecked, setVisaCardChecked] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [cvnNumber, setCvnNumber] = useState('');
  const [cardNumberError, setCardNumberError] = useState(false);
  const [expirationMonthError, setExpirationMonthError] = useState(false);
  const [expirationYearError, setExpirationYearError] = useState(false);
  const [cvnError, setCvnError] = useState(false);
  const totalPrice = useSelector(store=>store.cartSlice.totalPrice)
  const dispatch = useDispatch()

  const handleMastercardChange = () => {
    setMastercardChecked(!mastercardChecked);
    if (!mastercardChecked) {
      setVisaCardChecked(false);
    }
    };

  const handleVisaCardChange = () => {
    setVisaCardChecked(!visaCardChecked);
    if (!visaCardChecked) {
      setMastercardChecked(false);
    }
    };

    const handleCardNumberChange = (event) => {
        const { value } = event.target;
        setCardNumber(value);
        setCardNumberError(false);
    };
    
      const handleExpirationMonthChange = (event) => {
        const { value } = event.target;
        setExpirationMonth(value);
        setExpirationMonthError(false);
      };
    
      const handleExpirationYearChange = (event) => {
        const { value } = event.target;
        setExpirationYear(value);
        setExpirationYearError(false);
      };
    
      const handleCvnChange = (event) => {
        const { value } = event.target;
        setCvnNumber(value);
        setCvnError(false);
      };
    
      const handlePay = () => {
        if (cardNumber === '') {
          setCardNumberError(true);
        }
        if (expirationMonth === '') {
          setExpirationMonthError(true);
        }
        if (expirationYear === '') {
          setExpirationYearError(true); 
        }
        if (cvnNumber === '') {
          setCvnError(true);
        }
       

        if (!cardNumberError && !expirationMonthError && !expirationYearError && !cvnError) {
            axios.delete("http://localhost:3001/cart/clear",{
                headers: { accessToken: localStorage.getItem("accessToken") }
            }).then((res) => {
              dispatch(addTotalPrice({totalPrice:0}))
              dispatch(addToCart({quntity:0})) 
              alert("Payment Successfully")
              
            }).catch((error) => {
              console.error("API call failed:", error);
              
            });
        }

        setCardNumber('')
        setCvnNumber('')
        setExpirationMonth('')
        setExpirationYear('')
        
      };

  return (
    <div className='check-out-main'>
      <div className='check-out-main-row1'>
         <p className='check-out-main-para1'>SHOP.COM</p>
         <img className='check-out-im1' src={Hnb} alt=''/>
      </div>
      <div className='check-out-row2'>
          <div className='check-row2-div1'>
              <p className='check-row2-div1-para1'>Payment Details</p>
              <hr style={{marginBottom:"10px"}}/>
              <p className='check-row2-div1-para2'>*Required field</p>
              <div className='check-row2-div1-row3'>
                  <div className='check-crd-type'>Card Type *</div>
                  <div className='check-input1'>
                    <label>
                      <input 
                        type="checkbox" 
                        checked={mastercardChecked} 
                        onChange={handleMastercardChange} 
                      />
                       <img className='check-input-im ms-1' src={VisaCard} alt=''/>
                    </label>
                    <label>
                      <input 
                        type="checkbox" 
                        checked={visaCardChecked} 
                        onChange={handleVisaCardChange} 
                      />
                      <img className='check-input-im ms-1'src={masterCard} alt=''/>
                    </label>
                  </div>
              </div>
              <div className='check-row2-div1-row4'>
                   <div className='check-crd-num'>Card Number *</div>
                   <input
                        value={cardNumber} 
                        onChange={handleCardNumberChange}
                        className={`check-crd-input ${cardNumberError ? 'error' : ''}`}
                    />       
              </div>
              {cardNumberError && <div className="error-message">Card number is required</div>}
              <div className='check-row2-div1-row5'>
                   <div className='check-crd-month'>Expiration Month *</div>
                   <div className='d-flex gap-2'>
                   <select 
                        className={`check-input2 ${expirationMonthError ? 'error1' : ''}`}
                        value={expirationMonth}
                        onChange={handleExpirationMonthChange}
                    >
                      <option>Month</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                      <option>05</option>
                      <option>06</option>
                      <option>07</option>
                      <option>08</option>
                      <option>09</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                   </select>
                   <div className='check-crd-detail'>Expiration Year *</div>
                   <select 
                      className={`check-input2 ${expirationYearError ? 'error1' : ''}`}
                      value={expirationYear}
                      onChange={handleExpirationYearChange}
                   >
                      <option>Year</option>
                      <option>2024</option>
                      <option>2025</option>
                      <option>2025</option>
                      <option>2025</option>
                      <option>2026</option>
                      <option>2027</option>
                      <option>2027</option>
                      <option>2028</option>
                      <option>2029</option>
                      <option>2030</option>
                      <option>2031</option>
                      <option>2032</option>
                   </select>

                   </div>
                  
              </div>
              {expirationMonthError && <span className="error-message">Expiration month is required</span>}
              {expirationYearError && <span className="error-message2">Expiration year is required</span>}
              <div className='check-row2-div1-row6'>
                   This code is a three or four digit number printed on the back or front of credit cards.
              </div>
              <div className='check-row2-div1-row7'>
                     <div className='check-cvn'>CVN *</div>
                     <input 
                        className={`check-input3 ${cvnError ? 'error3' : ''}`}
                        value={cvnNumber}
                        onChange={handleCvnChange}
                     />
                     <img className='check-cvn-img' src={cvn} alt=''/>        
              </div>
              {cvnError && <span className="error-message">CVN is required</span>}
              <div className='check-row2-div1-row8'>
                     <button className='check-cancel'>Cancel</button>
                     <button className='check-pay' onClick={handlePay}>Pay</button>
              </div>
          </div>

          <div className='check-row2-div2'>
                <p className='check-row2-div2-para1'>Your Order</p>
                <hr/>
                <div className='check-price'>
                     <p className='check-total'>Total Amount</p>
                     <p className='check-total-price'>${totalPrice}</p>
                </div>
          </div>
      </div>
    </div>
  );
}

export default CheckOut;
