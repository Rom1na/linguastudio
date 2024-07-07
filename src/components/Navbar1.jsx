import React from 'react'
import '../css/navbar.css'
import { FaHome } from "react-icons/fa";
import { DContext } from '../context/Cntxt';
import { useDContext } from '../context/Cntxt';

const Navbar1 = () => {

  const{display,setDisplay,datos,setDatos,lecturaCsv}=useDContext();  

  return (
<div className="navbar">
  <a className="active" href="https://www.lingua-studio.com/"><FaHome fontSize='15px'/> Home</a>
  <p onClick={()=>lecturaCsv(setDatos)}>Inicial</p>
  <p onClick={()=>lecturaCsv(setDatos)}>Avanzado</p>
 
  
  
</div>



  )
}

export default Navbar1