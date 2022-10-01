import { useState } from "react"
import {createContext} from "react"
import {serverTimestamp, doc,setDoc,collection,increment,updateDoc} from "firebase/firestore"
import {db} from "../utils/firebaseConfig"

export const CartContext = createContext()

const CartContextProvider =  ({children}) => {
    const [cartList, setCartList] = useState([])
    const [contador,setContador] = useState(0)

    const contadorFunc =(item) =>{
        setContador(item.price*item.qty)
    }
    const isInCart =(id)=> cartList.find(product => product.id === parseInt(id))?true:false

    const removeItem = (id) => setCartList(cartList.filter((product)=>product.id !== id))

    const totalPrecio =() =>{
        return cartList.reduce((price,item)=>price +item.qty * item.price,0)
    }

    const clear =() =>{
        setCartList([])
    }

    const largo = (product,qty) =>{
        const largo = largo + product.qty
    }
    const [totalCompra,setTotalCompra] = useState(0)
    // const total = (item) =>{
    //     setTotalCompra(...totalCompra , item.price)

    // }
    

    const finalizo = async() =>{
        
        let itemsForDB = cartList.map(item=>({
            // id:item.id,
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
            total:contador
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


    return(
        <CartContext.Provider value = {{cartList,addItem,clear,isInCart,removeItem,finalizo,totalCompra,totalPrecio,contador,contadorFunc}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider