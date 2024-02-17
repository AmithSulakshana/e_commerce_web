import './style/main.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar/Navbar';
import Brand from './pages/Brand';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NewArriavals from './pages/NewArriavals';
import OnSale from './pages/OnSale';
import Men from './pages/Men';
import Footer from './components/footer/Footer';
import SingUp from './pages/SingUp';
import Logging from './pages/Logging';
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginFail, loginSuccess } from './store/reducers/UserSlice';


function App() {
   const dispatch = useDispatch();

   useEffect(()=>{
          axios.get("http://localhost:3001/user/auth",{headers:{
            accessToken:localStorage.getItem("accessToken")}})
            .then((response) =>{
               if(response.data.error){
                dispatch(loginFail());
               }

               else{
                  dispatch(loginSuccess({userName:response.data.userName,id:response.data.id}))
               }
            })
   },[])
 
  return (
    
       <BrowserRouter>
          <Navbar/>
          <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/brand' element={<Brand/>}/>
             <Route path='/newarriaval' element={<NewArriavals/>}/>
             <Route path='/onsale' element={<OnSale/>}/>
             <Route path='/shop/men' element={<Men/>}/>
             <Route path='/singup' element={<SingUp/>}/>
             <Route path='/login' element={<Logging/>}/>

          </Routes>
          <Footer/>
       
       </BrowserRouter>
       
    
  )
}

export default App
