import React from 'react'
import { MdOutlineDoneOutline } from "react-icons/md";
import { FaExclamationCircle } from "react-icons/fa";
import { BiWindowClose } from "react-icons/bi";
import { useDContext } from '../context/Cntxt';


const Popup = ({exp}) => {

    const {pop,setPop,aumento}= useDContext();

    



    



  return (
    <div
      style={{
       
        padding: '5px',
        fontSize:'14px',
        marginTop: '3px'
        
      }}
    
    >
      {!pop.r ?(<FaExclamationCircle color='#e74c3c' fontSize='30px'/>):(<MdOutlineDoneOutline color='lightgreen' fontSize='30px'/>)}  
      {!pop.r ?(<p style={{fontSize:"25px", color:'#e74c3c'}}>Respuesta incorrecta...</p>):(<p style={{fontSize:"25px", color:'lightgreen'}}>Respuesta Correcta!!!</p>)}  
      <p style={{fontSize:"25px"}}>{exp}</p>
     
      <button 
        style={{
          backgroundColor:'#242424',
          fontFamily:"Montserrat",
        }}
      onClick={()=>setPop(false)}
      ><BiWindowClose color='white'fontSize='30px'/> </button>


    </div>
  )
}

export default Popup