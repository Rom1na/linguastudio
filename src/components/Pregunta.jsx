import React from 'react'
import '../css/pregunta.css'
import { useDContext } from '../context/Cntxt';
import { FaWindowClose ,FaCheckSquare } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import Popup from './Popup'; 




const Pregunta = ({dato}) => {

  const{pos,setPos,aumento,setPop,pop}= useDContext();




  const onclickHandler =(valor)=>{
        if (valor == 0){
          setPop({ d:true, r: false})
        }
        if (valor == 1){
          setPop({d:true,r:true})
        }
  
  
   }









  return (
<div className='card' style={{width: "75%",height:"600px",padding:"1px"}}> 
  
  <legend>Haz click sobre la respuesta correcta</legend>
 
  <h2 style={{marginLeft:"5px",marginRight:"5px"}}> {dato['pregunta']}</h2>
{pop.d&&<Popup exp={dato['explicacion']}/>}     
{!pop.d&&<div>
      <div>
        <p className='respuesta' onClick={()=>onclickHandler(dato['valor1'])}>{dato['resapuesta1']}</p>
        
      </div>

      <div>
      <p className='respuesta'onClick={()=>onclickHandler(dato['valor2'])}>{dato['resapuesta2']}</p>
      </div>

      <div>
      <p className='respuesta' onClick={()=>onclickHandler(dato['valor3'])}>{dato['resapuesta3']}</p>
      </div>
      
</div> }


      <div>
    {!pop.d&&<GrLinkNext fontSize={30} onClick={()=>aumento(9)}/>}
       </div>
  
  
  
  
</div>
  )
}

export default Pregunta