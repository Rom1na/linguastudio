import {createContext,useState,useContext, Children } from "react";
export const DContext = createContext();

export const ContextoProveedor =({children}) =>{

    const [display, setDisplay] = useState(false)
    const [pop,setPop] = useState({
                                    d:false,
                                    r:true,});

    const [datos,setDatos]=useState([])
    const [pos,setPos]=useState(0)
    
  
    const aumento = (lim)=>{
    if (pos < lim){    
    setPos(pos+1)
    }else{
    setPos(0)    
    }

    }


    async function lecturaCsv(){
        const url =import.meta.env.VITE_URLLINK;
        
         const csv = await fetch (url)
         .then ((res)=> res.text());
         const datos = csv
         .split("\n")
         .slice(1)
         .map((row)=>{
             const [id,pregunta,resapuesta1,valor1,resapuesta2,valor2,resapuesta3,valor3,explicacion] = row.split(",");
             return {id,pregunta,resapuesta1,valor1,resapuesta2,valor2,resapuesta3,valor3,explicacion};
         })
     
      console.log(datos[0]["pregunta"])
      setDisplay(true)
      setDatos(datos)
     
     }



    
    

  return(

    <DContext.Provider
        value={{
          display,
          datos,
          pos,
          pop,
          
          setDisplay,
          setDatos,
          setPos,
          setPop,
          aumento,
          lecturaCsv,


        }}>

        {children}    

    </DContext.Provider>

  );

};
  
  
  export const useDContext=() =>{


     const{display,datos,pos,pop,setDisplay,setDatos,setPos,aumento,lecturaCsv,setPop}= useContext(DContext);

     return{
        display,
        datos,
        pos,
        pop,
        setDisplay,
        setDatos,
        setPos,
        setPop,
        aumento,
        lecturaCsv

     }


  };
    
    





