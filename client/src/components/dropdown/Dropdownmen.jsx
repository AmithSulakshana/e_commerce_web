import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Avatar from '../avatar/Avatar'
import { useNavigate } from 'react-router-dom'
import { loginFail } from '../../store/reducers/UserSlice'
import { addToCart } from '../../store/reducers/CartSlice'


const Dropdownmen = ({onMouseEnter,onMouseLeave}) => {
    const user = useSelector(store=>store.userSlice)
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleLogout = () =>{
        localStorage.removeItem('accessToken')
        dispatch(loginFail())
        dispatch(addToCart({quntity:0}))
        navigate('/')
      }

  return (
    <div className='dropdown-main' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <ul className='dropdown-ul'>
            <li className='d-flex gap-2'>
                <Avatar
                  name={user.userName}
                />
                <span>{user.userName}</span>
                <hr/>
            </li>
            <li className='log-outdec' onClick={handleLogout}>LogOut</li>
        </ul>
    </div>
  )
}

export default Dropdownmen
