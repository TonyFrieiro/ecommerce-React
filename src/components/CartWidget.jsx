import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

function IconCart (){
    return(
        <div className="cartIcon">
            <Link to={"./Cart"} className="a nav-link active" aria-current="page" href="#"><BsCart/><span className="badge badge-pill badge-primary">4</span></Link>
        </div>
    )
}

export default IconCart