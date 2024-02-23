import axios from 'axios';
import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../store/reducers/UserSlice';
import { addToCart } from '../store/reducers/CartSlice';


const Logging = () => {
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    
    const navigate = useNavigate(); 
    const dispatch = useDispatch();

    const handleClick = () =>{
        const data = {userName:userName,password:password}

        axios.post("http://localhost:3001/user/login",data).then((response)=>{
            if(response.data.error) alert(response.data.error);

            else{
              localStorage.setItem("accessToken", response.data.token);
              dispatch(loginSuccess({ userName:response.data.userName, id: response.data.id }));
              navigate("/");
              alert("loging success")
                 
              axios.get("http://localhost:3001/cart/subprice", {
                headers: { accessToken: localStorage.getItem("accessToken") },
                params: { }
              })
              .then((res) => {
                  dispatch(addToCart({quntity:res.data.totalquntity })) 
                  console.log(res.data)
              })
      

            }
           
        })
        setUserName('');
        setPassword('');
        
    }

  return (
    <div>
        <input
          type='text'
          value={userName}
          onChange={(event)=>{setUserName(event.target.value)}}
          placeholder='enter userName'
        />

        <input
           type='password'
           value={password}
           onChange={(event)=>{setPassword(event.target.value)}}
           placeholder='enter password'
        />

        <button onClick={handleClick}>Loging</button>
    </div>
  )
}

export default Logging;
