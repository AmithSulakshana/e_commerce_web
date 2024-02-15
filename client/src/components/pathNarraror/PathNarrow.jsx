import React from 'react';
import { useLocation } from 'react-router-dom';


function PathNarrow() {
    const {pathname} = useLocation();

    const getPathText = () => {
    
        return "Home " + pathname.replace(/\//g, " > ");
    }

  return (
    <div style={{marginTop:"15px"}}>
      
      <span style={{width:"250px",height:"22px",fontSize:"16px",marginLeft:"50px"}}>{getPathText()}</span>  
        
    </div>
  )
}

export default PathNarrow;
