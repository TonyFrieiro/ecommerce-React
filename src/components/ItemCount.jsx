import { useState } from "react"
import { FiPlus, FiMinus } from "react-icons/fi";


function ItemCount({stock,initial,onAdd}) {
    const [cantidad, setCantidad] = useState(initial) //hook
    
    const sumar = () =>{
        if (cantidad < stock){
            setCantidad(cantidad+1)
        }
    }

    const restar = () =>{
        if (cantidad > initial){
        setCantidad(cantidad-1)
        }
    }

    const alertComprar = () => {
        if(cantidad > 0){
            alert(`Compro  ` + cantidad + `  Productos ` )
            setCantidad(cantidad-cantidad + 1)
            onAdd(cantidad)}
        else{
            alert("la cantidad que ingreso no es valida")
        }
    }

    return(
        <div className="botonera">
            <button onClick={restar}><FiMinus/></button>
            <div className="botoneraCantidad"><p>{cantidad}</p></div>
            <button onClick= {sumar}><FiPlus/></button>
            <button onClick={alertComprar}>AGREGAR AL CARRITO</button>  
        </div> 
    )
}

export default ItemCount