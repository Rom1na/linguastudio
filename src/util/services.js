export async function lecturaCsv(setDatos){
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
 setDatos(datos)

}
