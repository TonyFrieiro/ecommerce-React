import { Link } from "react-router-dom"

const Item = ({id,name,price,stock,img})=>{
    return(
        <div className="card" >
            <img className="card-img-top" src={img} alt="Card image cap"/>
            <div className="card-body">
                <p className="card-text titulo">{name}</p>
                <p className="card-text">stock:{stock}</p>
                <p className="card-text titulo">$ {price}</p>
                <Link to ={"/item/" + id} className="btn btn-primary detalles"> Ver Detalles </Link>
            </div>
        </div>
    )

}

export default Item