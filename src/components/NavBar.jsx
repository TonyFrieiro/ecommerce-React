
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
                      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
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
                    <IconCart/>
                  </div>
                </div>
            </nav>
        </header>
  
    );
  }

export default Nav