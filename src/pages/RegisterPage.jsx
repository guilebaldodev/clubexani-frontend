import { Link } from 'react-router-dom';
import '../css/auth.css'

const RegisterPage = () => {
    return ( 
    <>
    <div className="register-page-container">
        <div className="register-page-titles">
            <img src="/icons/logo2.png" alt="" />
            <h2>Club<span className="primary-color">Exani</span></h2>
        </div>

        <div className="register-page-content">

            <div className="register-info">
                <h3>Estudia con nosotros y asegura tu lugar en posgrado.</h3>
                <div className="register-info-items">
                    <div className="item">
                        <img src="/icons/check-icon-black.png" alt="" />
                        <p>
                        Practica con simulacros de EXANI III diseñados específicamente para posgrado
                        </p>
                    </div>

                    <div className="item">
                        <img src="/icons/check-icon-black.png" alt="" />
                        <p>
                        Obtén análisis detallados de tu desempeño para mejorar en cada área clave.                        </p>
                    </div>

                    <div className="item">
                        <img src="/icons/check-icon-black.png" alt="" />
                        <p>
                        Accede a lecciones creadas por expertos, para dominar cada tema necesario para el EXANI III.                        </p>
                    </div>

                    <div className="item">
                        <img src="/icons/check-icon-black.png" alt="" />
                        <p>
                        Recibe planes de estudio personalizados que se adaptan a tu ritmo y necesidades específica                        </p>
                    </div>

                </div>
            </div>


            <div className="register-form">
                <h3>Registrate</h3>
                <form>

                <div className="form-input-duo">
                <label htmlFor="">Nombre</label>
                <input type="text" />
                </div>

                <div className="form-input-duo">
                <label htmlFor="">Apellidos</label>
                <input type="text" />
                </div>


                <div className="form-input-duo">
                <label htmlFor="">Correo electronico</label>
                <input type="text" />
                </div>

                <div className="form-input-duo">
                <label htmlFor="">Contraseña</label>
                <input type="password" />
                </div>

                <button>Registrarte</button>

                <div className="register-to-login">
                    <p>¿Ya tienes cuenta?</p><Link to={"/login"}>  Inicia sesion</Link>
                </div>
                
                </form>
            </div>


        </div>

    </div>
    
    </> );
}
 
export default RegisterPage;