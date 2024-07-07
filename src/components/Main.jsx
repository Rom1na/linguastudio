import React from 'react'
import Navbar1 from './Navbar1'
import BannerInicio from './BannerInicio'
import Pregunta from './Pregunta'
import { useDContext } from '../context/Cntxt'



const Main = () => {
    const{display,setDisplay,datos,setDatos,pos,setPos,pop}=useDContext();  

    
     
  

  
  return (

    <div> 

     

      <Navbar1/>
     
     

      {!display&&<BannerInicio/>}

      
      <div style={{display: "flex",justifyContent:"center"}}>
     
      {display&&<Pregunta dato={datos[pos]}/>}  
      
      
    

      </div>
      
      </div>  
      



    
  )
}

export default Main