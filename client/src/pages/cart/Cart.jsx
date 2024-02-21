import React from 'react';
import PathNarrow from '../../components/pathNarraror/PathNarrow';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import ShoppingCard from '../../components/shoppingCart/ShoppingCard/ShoppingCard';
import pin from './assest/pin.png';
import apparow from './assest/app-arrow.png';

function Cart() {
  return (
    <div className='cart-main'>
        <hr style={{width:"93%",margin:"0 auto"}}/>
        <PathNarrow padinLeft="44px"/>
        <Row className='cart-row1'>
            <p className='cart-row1-para1'>Your cart</p>
        </Row>

        <Row className='cart-row2'>
           <Col lg={7} className='cart-row2-col1'>
            <div className='cart-row2-col1-div1'>
                <ShoppingCard
                  itemImg="https://firebasestorage.googleapis.com/v0/b/demo2-45e9e.appspot.com/o/Shop.com_project%2Fimage%205.png?alt=media&token=a88c90cb-b9e3-4a17-9b76-972e86a81116"
                  itemName="T-shirt"
                  price='24'
                  size='large'
                  colour='white'
                  quntity="2"
                />

                 <ShoppingCard
                  itemImg="https://firebasestorage.googleapis.com/v0/b/demo2-45e9e.appspot.com/o/Shop.com_project%2Fimage%205.png?alt=media&token=a88c90cb-b9e3-4a17-9b76-972e86a81116"
                  itemName="T-shirt"
                  price='24'
                  size='large'
                  colour='white'
                  quntity="2"
                />
                <ShoppingCard
                  itemImg="https://firebasestorage.googleapis.com/v0/b/demo2-45e9e.appspot.com/o/Shop.com_project%2Fimage%205.png?alt=media&token=a88c90cb-b9e3-4a17-9b76-972e86a81116"
                  itemName="T-shirtt"
                  price='24'
                  size='large'
                  colour='white'
                  quntity="2"
                />
                <ShoppingCard
                  itemImg="https://firebasestorage.googleapis.com/v0/b/demo2-45e9e.appspot.com/o/Shop.com_project%2Fimage%205.png?alt=media&token=a88c90cb-b9e3-4a17-9b76-972e86a81116"
                  itemName="T-shirt"
                  price='24'
                  size='large'
                  colour='white'
                  quntity="2"
                />
                <ShoppingCard
                  itemImg="https://firebasestorage.googleapis.com/v0/b/demo2-45e9e.appspot.com/o/Shop.com_project%2Fimage%205.png?alt=media&token=a88c90cb-b9e3-4a17-9b76-972e86a81116"
                  itemName="T-shirt"
                  price='24'
                  size='large'
                  colour='white'
                  quntity="2"
                />
            </div>
           
           </Col>
           <Col lg={5} className='cart-row2-col2'>
               <div className='cart-row2-col2-div1'>
                   <div className='col2-row1'>
                      <p className='col2-row1-para1'>Order Summary</p>
                   </div>

                   <div className='col2-row2'>
                        <p className='col2-row2-para1'>Subtotal</p>
                        <p className='col2-row2-para2'>$565</p>
                   </div>

                   <div className='col2-row3'>
                        <p className='col2-row3-para1'>Discount (-20%)</p>
                        <p className='col2-row3-para2'>$565</p>
                   </div>

                   <div className='col2-row4'>
                        <p className='col2-row4-para1'>Delivery Fee</p>
                        <p className='col2-row4-para2'>$15</p>
                   </div>
                   <hr></hr>

                   <div className='col2-row5'>
                        <p className='col2-row5-para1'>Total</p>
                        <p className='col2-row5-para2'>$467</p>
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

                   <div className='col2-row7'>
                        <span className='col2-row7-text'>Go to Checkout</span>
                        <img className='col2-row7-img' src={apparow} alt=''/>
                   </div>
               </div>
           </Col>
        </Row>
      
    </div>
  )
}

export default Cart;
