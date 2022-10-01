import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"
import {serverTimestamp} from "firebase/firestore"


const Cart = () =>{
    const {cartList} = useContext(CartContext)
    const {clear} = useContext(CartContext)
    const {removeItem} = useContext(CartContext)
    const {totalCompra} = useContext(CartContext)
    const {finalizo} = useContext(CartContext)
    const {totalPrecio} = useContext(CartContext)
    const {contador} = useContext(CartContext)
    const {contadorFunc } = useContext(CartContext)

    


    

    return(
        <>{cartList.length === 0 ?
            <div className="vacio">
                <p>El carrito esta vacio</p>
                <Link to ="/"><button className="checkout">Ir al catalogo </button></Link>
            </div>:
            <div>
                <div><h1 className="tituloCarrito">Tu Carrito</h1></div>
                {/* {noHayNada()} */}
                <button onClick={clear} className="buttonClear">Borrar todo</button>
                {
                cartList.map(item => <li className="listaCart"><img src={item.img} className="imgCart"alt="" />{item.name} ______________Cantidad: {item.qty} precio,c/u: $ {item.price} total ${item.price*item.qty} {contadorFunc(item)}<button onClick={()=>removeItem(item.id)} className="checkout">BORRAR ITEM</button></li>)
                }
                <div className="terminarCompra" >
                    <p>Total:  {contador}</p>
                    <button onClick={finalizo}className= "checkout" ><h3>Terminar compra</h3></button>
                </div>
            </div>
            }
        </>
        
        
    )
}

export default Cart