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
                <h4>Curso</h4>

                <ul>
                    <li>
                        <Link to={""}>Lecciones</Link>
                    </li>
                    <li>
                        <Link to={""}>Simuladores</Link>
                    </li>
                    <li>
                        <Link to={""}>Cuestionarios</Link>
                    </li>
                    <li>
                        <Link to={""}>Mi progreso</Link>
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

                <div className="footer-info">
                    <p>
                    Copyright © 2024 ClubExani. Todos los derechos reservados.
                    </p>

                    <p>Web hecha con el ♥ por Solaria</p>
                </div>


        </footer>
    
    </> );
}
 
export default Footer;