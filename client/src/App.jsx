
import Navbar from './components/navbar/Navbar';
import Brand from './pages/Brand';
import Home from './pages/Home';
import './style/main.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NewArriavals from './pages/NewArriavals';
import OnSale from './pages/OnSale';
import Men from './pages/Men';


function App() {
 
  return (
    
       <BrowserRouter>
          <Navbar/>
          <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/brand' element={<Brand/>}/>
             <Route path='/newarriaval' element={<NewArriavals/>}/>
             <Route path='/onsale' element={<OnSale/>}/>
             <Route path='/shop/men' element={<Men/>}/>

          </Routes>
       
       </BrowserRouter>
       
    
  )
}

export default App
