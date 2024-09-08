import { Link } from "react-router-dom";

const LoginPage = () => {
    return ( 
        <>
        <div className="register-page-container">
            <div className="register-page-titles login-titles">
                <img src="/icons/logo2.png" alt="" />
                <h2>Club<span className="primary-color">Exani</span></h2>
            </div>
    
            <div className="register-page-content">
    
       
    
                <div className="register-form">
                    <h3>Inicia sesion</h3>
                    <form>
    
    
                    <div className="form-input-duo duo-login">
                    <label htmlFor="">Correo electronico</label>
                    <input type="text" />
                    </div>
    
                    <div className="form-input-duo duo-login">
                    <label htmlFor="">Contraseña</label>
                    <input type="password" />
                    </div>
    
                    <button>Registrarte</button>
    
                    <div className="register-to-login">
                        <p>¿No tienes cuenta?</p><Link to={"/registro"}>  Registrate</Link>
                    </div>

                    <div className="forgot-password">
                        <a href="">Olvide mi contraseña</a>
                    </div>
                    
                    </form>
                </div>
    
    
            </div>
    
        </div>
        
        </> 
     );
}
 
export default LoginPage;