import { useState,useEffect } from "react"
import customFetch from "../utils/customFetch"
import ItemDetail from "../components/ItemDetail"
import Productos from "../utils/Productos"
import { useParams } from "react-router-dom"

function ItemDetailContainer(props) {
    const [details,setDetails] = useState({})
    const {id} = useParams()

    //cuando se monta el componente
    useEffect(()=>{
        customFetch(2000,Productos.find(item => item.id == id))
            .then(result => setDetails(result))
            .catch(err => console.log(err))
        //LLamada a la base de datos
    })
    
    return (
        <>
            <ItemDetail item ={details}></ItemDetail>
        </>
    )


}

export default ItemDetailContainer


