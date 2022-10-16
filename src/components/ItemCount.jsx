import { useState } from "react"
import { FiPlus, FiMinus } from "react-icons/fi";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function ItemCount({stock,initial,onAdd}) {
    const [cantidad, setCantidad] = useState(initial) //hook

    const MySwal = withReactContent(Swal)
    
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
            MySwal.fire({
                icon: 'success',
                title: <p>{`` + cantidad + ` Producto/s añadidos al carrito` }</p>,

              })
            setCantidad(cantidad-cantidad + 1)
            onAdd(cantidad)}
        else{
            MySwal.fire({
                icon: 'error',
                title: <p>{`La cantidad que ingreso no es valida` }</p>,

              })
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