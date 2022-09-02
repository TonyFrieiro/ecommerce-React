
function Nav() {
    return (
        <header className="header">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div class="container-fluid">
                    <nav class="navbar navbar-dark bg-dark">
                        <div class="container-fluid" id="colorPiel">
                          <span class="navbar-brand mb-0 h1 letraLogo" id="colorPiel" >Euporie</span>
                        </div>
                      </nav>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0 ">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Seccion 1</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Seccion 2</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Seccion 3</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Seccion 4</a>
                      </li>
                    </ul>
                    <button class="btn btn-outline-success me-2" type="button" id="botonCarrito">Carrito</button>
                  </div>
                </div>
            </nav>
        </header>
  
    );
  }

export default Nav