import { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import {CartContext} from "./CartContext"

function IconCart (){
    const {cartList} = useContext(CartContext)
    const {addItem} = useContext(CartContext)
    const {cantidad2} = useContext(CartContext)
    const {cantItem} = useContext(CartContext)
    const largo = cartList.length
    return(
        
        <div className="cartIcon">
            <Link to={"./Cart"} className="a nav-link active" aria-current="page" href="#"><BsCart/>{cartList.length === 0 ? "":<span className="badge badge-pill badge-primary">{cantItem()}</span>}</Link>
        </div>
    )
}

export default IconCart