import { Link } from 'react-router-dom';
import '../css/footer.css'

const Footer = () => {
    return (
    <>
        <footer className="footer">
            <div className="footer-content">

            <div className="footer-logotype">
                <img src="./icons/white-logo.png" alt="" />
                <h3>ClubExani</h3>
            </div>

            <div className="footer-section">
                <h4>Nosotros</h4>

                <ul>
                    <li>
                        <Link to={""}>Politicas</Link>
                    </li>
                        <li>
                        <Link to={""}>Contacto</Link>

                        </li>
                        <li>
                        <Link to={""}>Testimonios</Link>

                        </li>
                        <li>

                        <Link to={""}>Planes</Link>
                        </li>
                </ul>
            </div>



            <div className="footer-section">
                <h4>Curso</h4>

                <ul>
                    <li>
                        <Link to={""}>Contacto</Link>
                    </li>
                    <li>
                        <Link to={""}>Testimonios</Link>
                    </li>
                    <li>
                        <Link to={""}>Planes</Link>
                    </li>
                    <li>
                        <Link to={""}>Politicas</Link>
                    </li>
                </ul>
            </div>

            <div className="footer-section">
                <h4>Cuenta</h4>

                <ul>
                    <li>
                        <Link to={""}>Inicio de sesion</Link>
                    </li>

                    <li>
                        <Link to={""}>Registro</Link>
                    </li>

                    <li>
                        <Link to={""}>Perfil</Link>
                    </li>
                </ul>
            </div>

            </div>
        </footer>
    
    </> );
}
 
export default Footer;