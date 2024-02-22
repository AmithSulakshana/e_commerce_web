import React from 'react';
import { useLocation } from 'react-router-dom';


function PathNarrow({padinLeft}) {
    const {pathname} = useLocation();

    const getPathText = () => {
        const cleanPath = pathname.replace(/\d+/g, '');
        let pathText = "Home " + cleanPath.replace(/\//g, " > ");
        pathText = pathText.replace(/ > \s*$/, "");
        return pathText;
    }

  return (
    <div style={{marginTop:"15px",paddingLeft:padinLeft}}>
      
      <span style={{width:"250px",height:"22px",fontSize:"16px"}}>{getPathText()}</span>  
        
    </div>
  )
}

export default PathNarrow;
