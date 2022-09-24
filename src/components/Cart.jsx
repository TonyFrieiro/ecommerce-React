import { useContext } from "react"
import { CartContext } from "./CartContext"


const Cart = () =>{
    const {cartList} = useContext(CartContext)
    const {clear} = useContext(CartContext)
    const {removeItem} = useContext(CartContext)

    // const noHayNada = ({cartList}) => {if (cartList == [{}]) {
    //     <p>no hay nada en el carrito</p>
    // }}
    return(
        <div>
            <div><h1 className="tituloCarrito">Tu Carrito</h1></div>
            {/* {noHayNada()} */}
            <button onClick={clear} className="buttonClear">Borrar todo</button>
            {
                cartList.map(item => <li className="listaCart"><img src={item.img} className="imgCart"alt="" />{item.name} ______________Cantidad: {item.qty}<button onClick={()=>removeItem(item.id)} className="checkout">BORRAR ITEM</button></li>)
            }
        </div>
        
    )
}

export default Cart