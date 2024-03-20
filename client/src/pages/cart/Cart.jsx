import React, { useEffect, useState } from 'react';
import PathNarrow from '../../components/pathNarraror/PathNarrow';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import ShoppingCard from '../../components/shoppingCart/ShoppingCard/ShoppingCard';
import pin from './assest/pin.png';
import apparow from './assest/app-arrow.png';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addTotalPrice } from '../../store/reducers/CartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() {
 const[cart,setCart] = useState([]);
 const[price,setPrice] = useState({});
 const dispatch = useDispatch()
 const user = useSelector(store=>store.userSlice)
 const navigate = useNavigate()
 const deliveryFee=20;
 const discount = 10;

 
  
  const handlereduce = (id) => {
    axios.post(`http://localhost:3001/cart/removeone/${id}`, {}, {
        headers: {
            accessToken: localStorage.getItem("accessToken")
        }
    })
    .then((res) => {
        updateCart()
    })
    .catch(error => {
        console.error('Error removing item from cart:', error);
    });
  }

  const handleIncrease = (id) =>{
   axios.post(`http://localhost:3001/cart/addone/${id}`, {}, {
        headers: {
            accessToken: localStorage.getItem("accessToken")
        }
    })
    .then((res) => {
        updateCart();
    })
    .catch(error => {
        console.error('Error removing item from cart:', error);
    });
  }
 
 
  const handleProductDelete = (id) => {

    const isConfirmed = window.confirm("Are you sure you want to delete this item?");

    
    if (isConfirmed) {
        axios.delete(`http://localhost:3001/cart/${id}`, {
                headers: {
                    accessToken: localStorage.getItem("accessToken")
                }
            })
            .then((res) => {
                updateCart();
               
            })
            .catch((error) => {
                console.error(error);
            });
    }
}


  const updateCart = () => {
    axios.get("http://localhost:3001/cart",{headers:{accessToken:localStorage.getItem("accessToken")}})
    .then((res)=>{
        setCart(res.data);
    })
    .catch(error => {
        console.error('Error fetching cart:', error);
    });

    axios.get("http://localhost:3001/cart/subprice", {
        headers: { accessToken: localStorage.getItem("accessToken") },
        params: { deliveryFee,discount}
    })
    .then((res) => {
        setPrice(res.data);
        dispatch(addToCart({quntity:res.data.totalquntity })) 
        dispatch(addTotalPrice({totalPrice:res.data.totalPrice}))
    })
    .catch(error => {
        console.error('Error fetching subtotal:', error);
    });

  }

  const handleChekout = () =>{
      navigate("/checkout")
  }
   
  
  useEffect(()=>{
    updateCart()
  },[])
  
  return (
    <>
    {user.authStatus? (
      <div className='cart-main'>
      <hr style={{width:"93%",margin:"0 auto"}}/>
      <PathNarrow padinLeft="44px"/>
      <Row className='cart-row1'>
          <p className='cart-row1-para1'>Your cart</p>
      </Row>

      <Row className='cart-row2'>
         <Col lg={7} className='cart-row2-col1'>
         <div className='cart-row2-col1-div1'>
          {cart.map((val,index)=>{ 
            return(
              <div key={index}>
                  <ShoppingCard
                    itemImg={val.Product.frontImage}
                    itemName={val.Product.ProductsName}
                    price={val.Product.Price}
                    size={val.Product.size}
                    colour={val.Product.colour}
                    quntity={val.quntity}
                    clickMinus={()=>handlereduce(val.Product.id)}
                    clickPlus={()=>handleIncrease(val.Product.id)}
                    clickdelete={()=>handleProductDelete(val.Product.id)}
                  />   
              </div>
            )
            
          })}
            </div>
         </Col>
         <Col lg={5} className='cart-row2-col2'>
             <div className='cart-row2-col2-div1'>
                 <div className='col2-row1'>
                    <p className='col2-row1-para1'>Order Summary</p>
                 </div>

                 <div className='col2-row2'>
                      <p className='col2-row2-para1'>Subtotal</p>
                      <p className='col2-row2-para2'>${price.subPrice}</p>
                 </div>

                 <div className='col2-row3'>
                      <p className='col2-row3-para1'>Discount (-{discount})</p>
                      <p className='col2-row3-para2'>${price.dicountvalue}</p>
                 </div>

                 <div className='col2-row4'>
                      <p className='col2-row4-para1'>Delivery Fee</p>
                      <p className='col2-row4-para2'>${deliveryFee}</p>
                 </div>
                 <hr></hr>

                 <div className='col2-row5'>
                      <p className='col2-row5-para1'>Total</p>
                      <p className='col2-row5-para2'>${price.totalPrice}</p>
                 </div>

                 <div className='col2-row6'>
                    <div className='col2-row6-div1'>
                        <img className='row-6-div1-img' src={pin} alt=''/>
                        <input className='row-6-div1-input' placeholder='Add promo code'/>
                    </div>
                    <div className='col2-row6-div2'>
                         <span className='col2-row6-div2-button'>Apply</span>
                    </div>
                 </div>

                 <div className='col2-row7' onClick={handleChekout}>
                      <span className='col2-row7-text'>Go to Checkout</span>
                      <img className='col2-row7-img' src={apparow} alt=''/>
                 </div>
             </div>
         </Col>
      </Row>
    
  </div>

    ):(
        <div>
          <h1>not logging user</h1>
        </div>
    )}
    
    
    </>
    
  )
  
}


export default Cart;
