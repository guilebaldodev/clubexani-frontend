import UserHeader from "../components/userHeader";
import '../css/Profile-page.css'
import ProfileSideBar from "../components/ProfileSideBar";

const ProfilePage = () => {
    return (
        <>
    <div className="colum-container">
        <UserHeader></UserHeader>

        <div className="profile-page-container">
            <ProfileSideBar></ProfileSideBar>

            <div className="profile-content-container">
                <div className="profile-content">
                    <div className="profile-page-title">
                        <h3>Mi perfil</h3>
                        <p>
                            En la página de perfil, los usuarios pueden gestionar su información personal y ajustar preferencias según sus necesidades dentro de la plataforma.
                        </p>
                    </div>

                    <div className="profile-credentials">
                        <div className="circle-div">
                            <img src="/icons/user-icon-profile.png" alt="" />
                        </div>

                        <div className="credentials-text">
                            <h2>Guilebaldo Vargas Solís</h2>
                            <p>Aspirante a posgrado en México</p>
                            <p>Universidad Autónoma de Guerrero</p>
                        </div>
                    </div>

                    <div className="profile-form">
                        <h3 className="profile-form-subtitle">
                            Información general
                        </h3>

                        <div className="profile-double-input">
                            <div className="profile-form-duo">
                                <label htmlFor="">Nombre</label>
                                <input type="text" />
                            </div>

                            <div className="profile-form-duo">
                                <label htmlFor="">Apellidos</label>
                                <input type="text" />
                            </div>
                        </div>

                        <div className="profile-form-duo">
                            <label htmlFor="">Correo electrónico</label>
                            <input type="text" />
                        </div>

                        <div className="profile-form-duo">
                            <label htmlFor="">Sexo</label>
                            <input type="text" />
                        </div>

                        <div className="profile-double-input">
                            <div className="profile-form-duo">
                                <label htmlFor="">Profesión</label>
                                <input type="text" />
                            </div>

                            <div className="profile-form-duo">
                                <label htmlFor="">Posgrado aspirado</label>
                                <input type="text" />
                            </div>
                        </div>

                        <div className="profile-double-input">
                            <div className="profile-form-duo">
                                <label htmlFor="">Fecha de nacimiento</label>
                                <input type="text" />
                            </div>

                            <div className="profile-form-duo">
                                <label htmlFor="">Celular</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>

                    <div className="profile-button">
                        <button>Guardar cambios</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>

    );
}
 
export default ProfilePage;