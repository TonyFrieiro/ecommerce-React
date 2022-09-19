import { useState,useEffect } from "react"
import ItemList from "../components/ItemList"
import customFetch from "../utils/customFetch"
//const {Productos} = require ("../utils/Productos")
import Productos from "../utils/Productos"
import {useParams} from "react-router-dom"
import Item from "../components/Item"

function ItemListContainer() {
    const [data,setData] = useState([])
    const {id} = useParams()

    //cuando se monta el componente
    useEffect(()=>{
        if (id){
            customFetch(2000,Productos.filter(item => item.categoryId == id))
            .then(result => setData(result))
            .catch(err => console.log(err))
        }
        else{
            customFetch(2000,Productos)
            .then(result => setData(result))
            .catch(err => console.log(err))
        }
    },[id])
    
    return (
        <>
            <ItemList items ={data}></ItemList>
        </>
    )


}

export default ItemListContainer