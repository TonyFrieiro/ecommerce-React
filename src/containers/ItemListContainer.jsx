import { useState,useEffect } from "react"
import ItemCount from "../components/ItemCount"
import ItemList from "../components/ItemList"
import customFetch from "../utils/customFetch"
//const {Productos} = require ("../utils/Productos")
import Productos from "../utils/Productos"

{console.log(Productos)}


function ItemListContainer(props) {
    const [data,setData] = useState([])

    //cuando se monta el componente
    useEffect(()=>{
        customFetch(2000,Productos)
            .then(result => setData(result))
            .catch(err => console.log(err))
        //LLamada a la base de datos
    })
    
    return (
        <>
            <h1>{props.greeting}</h1>
            <ItemList items ={data}></ItemList>
            <ItemCount 
                stock={5}
                initial = {1}
            />
        </>
    )


}

export default ItemListContainer