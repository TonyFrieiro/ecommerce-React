import { useState } from "react"
import {createContext} from "react"
import {serverTimestamp, doc,setDoc,collection,increment,updateDoc} from "firebase/firestore"
import {db} from "../utils/firebaseConfig"

export const CartContext = createContext()

const CartContextProvider =  ({children}) => {
    const [cartList, setCartList] = useState([])
    const [contador,setContador] = useState(0)
    const [cantidad2,setCantidad2]  = useState(0)

    const contadorFunc =(item) =>{
        setContador(item.price*item.qty)

    }
    const funcCantidad =(qty)=>{
        let a = cantidad2 + qty
        setCantidad2(a) 
        console.log(cantidad2)                
    }

    const isInCart =(id)=> cartList.find(product => product.id === parseInt(id))?true:false

    const removeItem = (id) => setCartList(cartList.filter((product)=>product.id !== id))

    const totalPrecio =() =>{
        return cartList.reduce((price,item)=>price +item.qty * item.price,0)
    }
    const cantItem = () => cartList.reduce((contador,producto)=> contador + producto.qty,0)

    const clear =() =>{
        setCartList([])
    }

    const [totalCompra,setTotalCompra] = useState(0)
    // const total = (item) =>{
    //     setTotalCompra(...totalCompra , item.price)

    // }
    const funcTotal =() =>{
        setTotalCompra(totalCompra + contadorFunc)
    }
    

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
        alert("your order has been created,ID order is:  "+newOrderRef.id)
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
        <CartContext.Provider value = {{cartList,addItem,clear,isInCart,removeItem,finalizo,totalCompra,totalPrecio,cantItem,contador,contadorFunc,funcTotal,funcCantidad}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider