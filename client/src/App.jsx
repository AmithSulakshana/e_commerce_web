import './style/main.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar/Navbar';
import Brand from './pages/Brand';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NewArriavals from './pages/newArriavals/NewArriavals';
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
import Cart from './pages/cart/Cart';
import MenShirt from './pages/menShirt/MenShirt';
import { addToCart } from './store/reducers/CartSlice';
import Token from './components/tokenGenerate/Token';
import Casual from './pages/category/casual/Casual';
import AddProduct from './pages/addProduct/AddProduct';
import CheckOut from './pages/checkout/CheckOut';


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

            axios.get("http://localhost:3001/cart/subprice", {
               headers: { accessToken: localStorage.getItem("accessToken") },
               params: { }
           })
           .then((res) => {
               dispatch(addToCart({quntity:res.data.totalquntity })) 
           })
   },[])

   const handleSingup = () =>{
      setSingupShow(false)
   }
 
  return (
    
       <BrowserRouter>
         {(!user.authStatus && singupShow) && <SingupBar onClick={handleSingup}/>}
          <Navbar/>
          <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/brand' element={<Brand/>}/>
             <Route path='/newarriaval' element={<NewArriavals/>}/>
             <Route path='/onsale' element={<OnSale/>}/>
             <Route path='/shop/men' element={<Men/>}/>
             <Route path='/singup' element={<SingUp/>}/>
             <Route path='/login' element={<Logging/>}/>
             <Route path ='/cart' element={<Cart/>}/>
             <Route path ='/men/shirt/:id' element={<MenShirt/>}/>
             <Route path='/Casual' element={<Casual/>} />
             <Route path='/addproduct' element={<AddProduct/>} />
             <Route path='/checkout' element={<CheckOut/>}/>

          </Routes>
          <Footer/>
       
       </BrowserRouter>
       
    
  )
}

export default App
