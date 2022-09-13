import { BsCart } from "react-icons/bs";

function IconCart (){
    return(
        <div className="cartIcon">
            <a className="a nav-link active" aria-current="page" href="#"><BsCart/><span className="badge badge-pill badge-primary">4</span></a>
        </div>
    )
}

export default IconCart