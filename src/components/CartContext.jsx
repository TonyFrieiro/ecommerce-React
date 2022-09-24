import { useState } from "react"
import {createContext} from "react"

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const isInCart =(id)=> cartList.find(product => product.id === parseInt(id))?true:false

    const removeItem = (id) => setCartList(cartList.filter((product)=>product.id !== id))


    const addItem = (product, qty) =>{
        if (isInCart(product.id) == true){
            alert("se agreagron mas productos a su compra")
            product.qty = product.qty + qty
        }else{
        Object.defineProperty(product, 'qty', {
            value: qty,
            writable: true,
            enumerable: true,
            configurable: true
          });
        
        setCartList([
            ...cartList,
            product 
        ])
        console.log(qty)
        }
        
    }

    const clear =() =>{
        setCartList([])
    }

    return(
        <CartContext.Provider value = {{cartList,addItem,clear,isInCart,removeItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider