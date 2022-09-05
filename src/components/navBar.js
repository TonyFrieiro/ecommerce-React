
import IconCart from "./CartWidget";
function Nav() {
    return (
        <header className="header">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                    <nav className="navbar navbar-dark bg-dark">
                        <div className="container-fluid" id="colorPiel">
                          <span className="navbar-brand mb-0 h1 letraLogo" id="colorPiel" >Euporie</span>
                        </div>
                      </nav>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Seccion 1</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Seccion 2</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Seccion 3</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Seccion 4</a>
                      </li>
                    </ul>
                    {/*<button class="btn btn-outline-success me-2" type="button" id="botonCarrito"><IconCart/><span class="badge badge-pill badge-primary">4</span></button>*/}
                    <a className="a nav-link active" aria-current="page" href="#"><IconCart/><span className="badge badge-pill badge-primary">4</span></a>
                  </div>
                </div>
            </nav>
        </header>
  
    );
  }

export default Nav