import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ContextoProveedor } from './context/Cntxt'
import Main from './components/Main'


function App() {
  


  return (
    <>
      <div> 

<ContextoProveedor>

<Main/>

</ContextoProveedor>
<footer
   style={{
    fontSize:"10px",
    color: "black",
    
    width: "100%",
    marginRight:"25px",
   
    position:"fixed",
    bottom:"0",
    backgroundColor:"#1dc9ce"
   


   }}

> 2024 - Lingua-Studio</footer>






</div>  


    </>
  )
}

export default App

// <Pregunta pregunta={datos[0]["pregunta"]} r1={datos[0]["resapuesta1"]}r2={datos[0]["resapuesta2"]}r3={datos[0]["resapuesta3"]}/>