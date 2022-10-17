import { useState } from "react"
import {createContext} from "react"
import {serverTimestamp, doc,setDoc,collection,increment,updateDoc} from "firebase/firestore"
import {db} from "../utils/firebaseConfig"

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const CartContext = createContext()

const CartContextProvider =  ({children}) => {
    const [cartList, setCartList] = useState([])





    const isInCart =(id)=> cartList.find(product => product.id === parseInt(id))?true:false

    const removeItem = (id) => setCartList(cartList.filter((product)=>product.id !== id))

    const totalPrecio =() =>{
        return cartList.reduce((price,item)=>price +item.qty * item.price,0)
    }
    const cantItem = () => cartList.reduce((contador,producto)=> contador + producto.qty,0)

    const clear =() =>{
        setCartList([])
    }


    const MySwal = withReactContent(Swal)

    const finalizo = async() =>{
        
        let itemsForDB = cartList.map(item=>({
            id:item.id,
            price:item.price,
            title:item.name,
            quantity: item.qty
        }))
        let order = {
            buyer:{
                name: "pipa benedetto",
                email: "pipa@gmail.com",
                phone: "91221345"
            },
            date:serverTimestamp(),
            items:itemsForDB,
            total:totalPrecio()
        }

        const newOrderRef = doc(collection(db, "orders"))
        await setDoc(newOrderRef, order)

        cartList.forEach(async(item)=>{
            const itemRef = doc(db,"productos",item.id)
            await updateDoc(itemRef,{
                stock: increment(-item.qty)
            })
        })
        MySwal.fire({
            icon: 'success',
            title: <p>{`Orden creada, ID de la orden:  `+ newOrderRef.id +`` }</p>,
          })
        clear()
        

    }

    const addItem = (product, qty) =>{
        if (isInCart(product.id) == true){
            alert("se agreagron mas productos a su compra")
            setCartList(cartList.map(product =>{
                return product.id === product.id ? {...product,qty: product.qty+qty}:product
            }))
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


    return(
        <CartContext.Provider value = {{cartList,addItem,clear,isInCart,removeItem,finalizo,totalPrecio,cantItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider