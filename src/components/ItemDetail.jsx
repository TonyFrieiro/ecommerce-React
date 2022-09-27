import ItemCount from "../components/ItemCount"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useContext } from "react"
import { CartContext } from "./CartContext"




const ItemDetail =({item}) => {
    const [itemCount,setItemCount] = useState(0)
    const {addItem} = useContext(CartContext)
    const {largo} = useContext(CartContext)
    const {total} = useContext(CartContext)

    const onAdd = (qty) => {
        setItemCount(qty)
        addItem(item,qty)
        
    } 

    const total2 = (item) =>{
        total(item)
    }
 

    return(
        <>
            <div className="productoDesc">
                <div className="imgDescripcion"><img src={item.img} alt="" /></div>
                <div className="textoDescripcion">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p className=""> Stock en la web: {item.stock}</p>
                    <p className="titulo">$ {item.price}</p>
                    {/* <ItemCount stock={item.stock} initial = {1} onAdd = {onAdd}></ItemCount> */}

                    {
                    itemCount === 0
                    ? <><ItemCount stock={item.stock} initial = {itemCount} onAdd = {onAdd}></ItemCount></>
                    : <Link to ="/Cart"><button className="checkout">CHECKOUT</button></Link>
                    }
                </div>
            </div>

        </>
    )
}

export default ItemDetail