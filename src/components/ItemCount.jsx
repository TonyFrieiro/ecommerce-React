import { useState } from "react"
import { FiPlus, FiMinus } from "react-icons/fi";


function ItemCount({stock,initial,onAdd}) {
    const [cantidad, setCantidad] = useState(0) //hook
    
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
        alert(`Compro  ` + cantidad + `  Productos ` )
    }

    return(
        <div className="botonera">
            <button onClick={restar}><FiMinus/></button>
            <div className="botoneraCantidad"><p>{cantidad}</p></div>
            <button onClick= {sumar}><FiPlus/></button>
            <button onClick={alertComprar}>Comprar</button>  
        </div> 
    )
}

export default ItemCount