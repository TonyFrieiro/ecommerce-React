import { useState,useEffect } from "react"
import customFetch from "../utils/customFetch"
import ItemDetail from "../components/ItemDetail"
import Productos from "../utils/Productos"
import { useParams } from "react-router-dom"
import Spinner from "../components/Spinner"

function ItemDetailContainer(props) {

    const [loading,setLoading] = useState(true)

    const [details,setDetails] = useState({})
    const {id} = useParams()

    //cuando se monta el componente
    useEffect(()=>{
        customFetch(2000,Productos.find(item => item.id == id))
            .then(result => {
                setDetails(result)
                setLoading(false)
            })
            .catch(err => console.log(err))
        //LLamada a la base de datos
    })
    
    return (
        <>
            {loading ? <Spinner></Spinner> : <ItemDetail item ={details}></ItemDetail>}
            
        </>
    )


}

export default ItemDetailContainer


