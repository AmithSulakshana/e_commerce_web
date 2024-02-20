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
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginFail, loginSuccess } from './store/reducers/UserSlice';
import SingupBar from './components/singupbar/SingupBar';
import ProductCard from './components/productCard/ProductCard';


function App() {
   const dispatch = useDispatch();
   const user = useSelector(store=>store.userSlice)
   const [singupShow , setSingupShow] = useState(true);

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

   const handleSingup = () =>{
      setSingupShow(false)
   }
 
  return (
    
       <BrowserRouter>
         {(!user.authStatus && singupShow) && <SingupBar onClick={handleSingup}/>}
          <Navbar/>
          <ProductCard
            productIm='https://firebasestorage.googleapis.com/v0/b/demo2-45e9e.appspot.com/o/Shop.com_project%2Fimage%205.png?alt=media&token=a88c90cb-b9e3-4a17-9b76-972e86a81116'
            productName="T-shirt"
            rating={4.3}
            price={260}
            newPrice = {240}
          />
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
