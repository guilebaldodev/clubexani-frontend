import { Link } from "react-router-dom";

const ProfileSideBar = () => {
    return ( <>
        <div className="profile-sidebar">
        <h4>Cuenta</h4>

        <Link to={"/perfil"} className="profile-sidebar-item bb-none profile-item-selected">
            <img src="" alt="" />
            <p>Informacion Personal</p>
        </Link>

        <Link to={"/contraseña"} className="profile-sidebar-item bb-none">
            <img src="" alt="" />
            <p>Contraseña</p>
        </Link>

        <Link className="profile-sidebar-item">
            <img src="" alt="" />
            <p>Anuncios</p>
        </Link>


    </div>
    
    </> );
}
 
export default ProfileSideBar;