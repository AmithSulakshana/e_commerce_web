import React from 'react'
import cancel from './assest/cancel.png';
import { Link } from 'react-router-dom';

const SingupBar = ({onClick}) => {
  return (
    <div className='singupbar-main'>
        <p className='singup-para'>Sign up and get 20% off to your first order. <Link className='link-dec' to='/singup'>Sign Up Now</Link></p>
        <img onClick={onClick} className='cros-im' src={cancel} alt=''/>
    </div>
  )
}

export default SingupBar
