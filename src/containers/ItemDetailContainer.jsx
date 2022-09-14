import { useState,useEffect } from "react"
import customFetch from "../utils/customFetch"
import ItemDetail from "../components/ItemDetail"
import Productos from "../utils/Productos"

function ItemDetailContainer(props) {
    const [data,setData] = useState({})

    //cuando se monta el componente
    useEffect(()=>{
        customFetch(2000,Productos[5])
            .then(result => setData(result))
            .catch(err => console.log(err))
        //LLamada a la base de datos
    })
    
    return (
        <>
            <ItemDetail item ={data}></ItemDetail>
        </>
    )


}

export default ItemDetailContainer


