
import IconCart from "./CartWidget";
import { Link } from "react-router-dom";
function Nav() {
    return (
        <header className="header">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                    <nav className="navbar navbar-dark bg-dark">
                        <div className="container-fluid" id="colorPiel">
                          <Link to ="/"className="navbar-brand"><img className="imagenIcono"src="https://res.cloudinary.com/dthbpblty/image/upload/c_scale,w_108/v1663805457/rgba_33_37_41_255_ehguos.png" alt="" /></Link>
                        </div>
                      </nav>
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                      <li className="nav-item">
                        <Link to ="/category/1" className="nav-link active" aria-current="page">ToteBags</Link>
                      </li>
                      <li className="nav-item">
                        <Link to ="/category/2" className="nav-link active" aria-current="page">Buzos y Remeras</Link>
                      </li>
                      <li className="nav-item">
                        <Link to ="/category/3" className="nav-link active" aria-current="page">Cartucheras</Link>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Otros</a>
                      </li>
                    </ul>
                    {/*<button class="btn btn-outline-success me-2" type="button" id="botonCarrito"><IconCart/><span class="badge badge-pill badge-primary">4</span></button>*/}
                    <IconCart/>
                  </div>
                </div>
            </nav>
        </header>
  
    );
  }

export default Nav