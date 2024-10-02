import Footer from "../components/Footer";
import Navbar from "../components/Nabvar";
import '../css/contact-container.css'
const ContactPage = () => {
    return ( 
    <>
    <Navbar></Navbar>
        <div className="contact-page-container">
            
            <div className="contact-titles">
                <h2>Contáctanos</h2>
                <p>Tu preparación es nuestra prioridad. Estamos disponibles para atender tus consultas.</p>
            </div>

            <div className="contact-info">
                <div className="contact-text">

                    <h4>ClubExani</h4>
                    <p>
                        Una plataforma comprometida con ayudarte en tu camino al posgrado. Responderemos tus consultas en menos de 24 horas para garantizar que estés siempre informado.
                        </p>
                    
                    <div className="contact-text-items">
                        <div className="contact-text-item">
                        <img src="/icons/landing/time.png" alt="" />
                        <p>
                        Lunes a viernes de 10am a 5pm
                        </p>
                        </div>

                        <div className="contact-text-item">
                        <img src="/icons/landing/whatsapp-icon.png" alt="" />
                        <p>
                        7443112193
                        </p>
                        </div>

                        <div className="contact-text-item">
                        <img src="/icons/landing/email.png" alt="" />
                        <p>
                        sporte@clubexani.com
                        </p>
                        </div>

                        <div className="contact-text-item">
                        <img src="/icons/landing/location.png" alt="" />
                        <p>
                        Acapulco, Guerrero
                        </p>
                        </div>


                    </div>

                </div>
                <form action="" className="contact-form">
                    
                    <div className="double-input">
                    <div className="input-duo">
                        <label htmlFor="">Nombre*</label>
                        <input type="text" />
                    </div>
                    <div className="input-duo">
                        <label htmlFor="">Apellidos*</label>
                        <input type="text" />
                    </div>

                    </div>

                    <div className="double-input">

                    <div className="input-duo">
                        <label htmlFor="">Correo electronico*</label>
                        <input type="text" />
                    </div>

                    <div className="input-duo">
                        <label htmlFor="">Telefono*</label>
                        <input type="text" />
                    </div>
                    </div>

                    <div className="input-duo full-input">
                    <label htmlFor="">¿Como podemos ayudarte?*</label>
                    <textarea name="" id=""></textarea>
                    </div>

                    <div className="input-check">
                        <input type="checkbox" />
                        <label htmlFor="">
                        Al hacer click confirmas que has leído y aceptas nuestras Políticas de Privacidad.
                        </label>
                    </div>

                    <div className="contact-button">
                        <button>Enviar</button>
                    </div>

                </form>
            </div>


        </div>
    <Footer></Footer>
    </> );
}
 
export default ContactPage;