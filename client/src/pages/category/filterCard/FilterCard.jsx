import React, { useState } from 'react'
import menu from './assest/menu.png';
import FilterNarrow from './filternarrow/FilterNarrow';
import arrow1 from './assest/arrow1.png'
import arrowup from './assest/arrowup.png' 
import Slider from '@mui/material/Slider';
import mark from './assest/mark.png';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { updateFilter } from '../../../store/reducers/FilterSlice';

const FilterCard = () => {
    const[pricedis,setPricedis] = useState(false);
    const[price,setPrice] = useState([20,37])
    const[coldis,setColdis] = useState(false)
    const[colour,setColour] = useState("")
    const[sizedis,setSizedis] = useState(false);
    const[size,setSize] = useState('');
    const[dressdis,setDressdis] = useState(false);
    const dispatch = useDispatch();

    const colors = [
        { color: "green", backgroundColor: "#00C12B" },
        { color: "red", backgroundColor: "#F50606" },
        { color: "yellow", backgroundColor: "#F5DD06" },
        { color: "brown", backgroundColor: "#F57906" },
        { color: "blue", backgroundColor: "#06CAF5" },
        { color: "darkblue", backgroundColor: "#2A61F3" },
        { color: "violet", backgroundColor: "#7D06F5" },
        { color: "pink", backgroundColor: "#F506A4" },
        { color: "white", backgroundColor: "#FFFFFF" },
        { color: "black", backgroundColor: "#000000" }
    ];

    const sizes = [
        {size:"XX-Small"},
        {size:"X-Small"},
        {size:"Small"},
        {size:"Medium"},
        {size:"Large"},
        {size:"xl"},
        {size:"XX-Large"},
        {size:"3X-Large"},
        {size:"4X-Large"}
    ]

    const style =["casual","Formal","Party","Gym"];

    const handlePrice = () =>{
        setPricedis(!pricedis)
    }

    const handleColour = () =>{
        setColdis(!coldis)
    }

   const handleColor = (val) =>{
      setColour(val)
   }

   const handleSizedis = () =>{
    setSizedis(!sizedis)
   }

   const handleSize = (val) =>{
     setSize(val)
   }

   const handleDress = () =>{
      setDressdis(!dressdis);
   }

   const handleFilter = () =>{
    axios.get("http://localhost:3001/product/search",{
      params:{
            minPrice: price[0],
            maxPrice: price[1],
            size: size,
            color: colour
      }
    }).then((res)=>{
      console.log(res.data)
      dispatch(updateFilter({casual:res.data}))
    })
   }


  return (
    <div className='filter-card-main'>
      <div className='filter-row1'>
         <p className='filter-row1-para1'>Filters</p>
         <img className='filter-row1-im1' src={menu} alt=''/>
      </div>
      <hr/>
      <FilterNarrow
        heder='T-shirts'
      />
      <FilterNarrow
        heder='Shorts'
      />
      <FilterNarrow
        heder='Shirts'
      />
      <FilterNarrow
        heder='Hoodie'
      />
      <FilterNarrow
        heder='Jeans'
      />
      <hr/>
      <div className='filter-row3'>
         <div className='filter-row3-div1'>
             <p className='row3-div1-para1'>Price</p>
             <img src={!pricedis ? arrow1:arrowup} alt='' onClick={handlePrice}/>
         </div>
         {pricedis && 
             <Slider
             value={price}
             onChange={(e)=>setPrice(e.target.value)}
             valueLabelDisplay="auto"
             sx={{
                color: 'black'
            }}  
            />
         }
      </div>

      <div className='filter-row4'>
        <div className='filter-row4-div1'>
            <p className='filter-row4-div1-para'>Colors</p>
            <img src={!coldis ? arrow1:arrowup} alt='' onClick={handleColour}/>
        </div>
        {coldis &&
            <>
             <div className='filter-row4-div2'>
             {colors.map((colorItem, index) => (
                 <div
                     key={index}
                     className='filter-row4-div2-div1'
                     style={{ backgroundColor: colorItem.backgroundColor}}
                     onClick={() => handleColor(colorItem.color)}
                 >
                     {colour === colorItem.color && <img src={mark} alt='' />}
                 </div>
             ))}
              </div>
              <hr/>
            </>      
        }
        
      </div>

    <div className='filter-row5'>
        <div className='filter-row5-div1'>
             <p className='filter-row5-div1-para1'>Size</p>
             <img src={!sizedis ? arrow1:arrowup} alt='' onClick={handleSizedis}/>
        </div>
        {sizedis && 
            <>
              <div className='filter-row5-div2'>
              {sizes.map((val,index)=>(
                 <div key={index} className='filter-row5-div2-div' onClick={()=>handleSize(val.size)}
 
                  style={{backgroundColor:val.size===size ? 'black' : '',color:val.size===size ? 'white':''}}
                 >
                      {val.size}
                 </div>
              ))
 
              }
           </div>
           <hr/>
           </>
        }        
    </div>

    <div className='filter-row6'>
        <div className='filter-row6-div1'>
           <p className='filter-row6-div1-para'>Dress Style</p>
           <img src={!dressdis ? arrow1:arrowup} alt='' onClick={handleDress}/>
        </div>
        {dressdis && 
           <div className='filter-row6-div2'>
           {style.map((val,index)=>(
               <div className='filter-row6-div2-div' key={index}>
               <p className='filter-row6-div2-div-para'>{val}</p>
               <img src={arrow1} alt=''/>
           </div>
           ))} 
       </div>
        }
        
    </div>

    <div className='filter-row7' onClick={handleFilter}>
       Apply Filter
    </div>
      
     

    </div>
  )
}

export default FilterCard
