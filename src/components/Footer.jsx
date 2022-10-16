import { Link } from "react-router-dom";

function Footer(){
    return (

        <footer className="productosFooter">
            <div className="footer">
                <div className="contacto">
                <h3>Contacto</h3>
                <div>
                    <img src="https://res.cloudinary.com/dthbpblty/image/upload/v1664923962/phone-solid_zezl5b.svg" alt="logo telefono" />
                    <p>1554778921</p>
                </div>
                <div>
                    <img src="https://res.cloudinary.com/dthbpblty/image/upload/v1664923768/envelope-solid_ficvge.webp" alt="logo correo" />
                    <p>euporie@gmail.com.ar</p>
                </div>
                <div>   
                    <a href="https://www.instagram.com/euporie_/?hl=es"><img src="https://res.cloudinary.com/dthbpblty/image/upload/v1664923817/instagram-brands_psr1nn.webp" alt="logo instagram" /></a>
                </div>
                <div>
                    <a href="https://twitter.com/Euporie_t?t=DOiOgR9eUUqW3c6rZVpoJw&s=08"><img src="https://res.cloudinary.com/dthbpblty/image/upload/v1664923898/twitter-brands_gny9kh.svg" alt="logo twitter" /></a>
                </div>
                </div>
                <div className="footerProductos">
                <h3>Productos</h3>
                <div><Link to ="/category/1">ToteBags</Link></div>
                <div><Link to ="/category/2">Buzos y Remeras</Link></div>
                <div><Link to ="/category/3">Cartucheras</Link></div>
                </div>
                <div className="iframe">
                <h2>Donde estamos</h2>
                <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1642.8064199393968!2d-58.49714334195874!3d-34.56335678631874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x86728fb4dcbe1adf!2zMzTCsDMzJzQ4LjEiUyA1OMKwMjknNDUuOCJX!5e0!3m2!1ses-419!2sar!4v1652710420657!5m2!1ses-419!2sar" width={300} height={300} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>
                </div>
            </div>
            {/* <div classname="contenedorPago">
                <div className="tituloPago">
                <h2>Medios de pago</h2>
                </div>  
                <div className="mediosPago">
                <div><img src="../img/visa.webp" alt="logo visa" /></div>
                <div><img src="../img/mastercard.webp" alt="logo mastercard" /></div>
                <div><img src="../img/american.webp" alt="logo american express" /></div>
                </div>
            </div> */}
            <div className="boxCopyright">
                <hr />
                <p>Todos los derechos reservados © 2022 <b>Euporie</b></p>
            </div>
        </footer>
    )
}

export default Footer