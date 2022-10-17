import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"



const Cart = () =>{
    const {cartList} = useContext(CartContext)
    const {clear} = useContext(CartContext)
    const {removeItem} = useContext(CartContext)
    const {finalizo} = useContext(CartContext)
    const {totalPrecio} = useContext(CartContext)

    return(
        <>{cartList.length === 0 ?
            <div className="vacio">
                <p>El carrito esta vacio</p>
                <Link to ="/"><button className="checkout">Ir al catalogo </button></Link>
            </div>:
            <>
            <div className="contenedorCarrito">
                <div><h1 className="tituloCarrito">Tu Carrito</h1></div>
                <button onClick={clear} className="buttonClear">Borrar todo</button>
                {
                cartList.map(item => 
                    <div className="listaCart"><img src={item.img} className="imgCart"alt="" /><p className="carritoP">{item.name}</p> <p className="carritoP"> Cantidad: {item.qty}</p> <p className="carritoP"> precio,c/u: $ {item.price} </p> <p className="carritoP"> SubTotal ${item.price*item.qty} </p>  <button onClick={()=>removeItem(item.id)} className="checkout">BORRAR ITEM</button></div>)
                }
            </div>
            <div className="terminarCompra" >
                <p> Total:    $  {totalPrecio()}</p>
                <button onClick={finalizo}className= "checkout" ><h3>Terminar compra</h3></button>
            </div>
            </>
            }
        </>
        
        
    )
}

export default Cart