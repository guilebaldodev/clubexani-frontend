import ProfileSideBar from "../components/ProfileSideBar";
import UserHeader from "../components/userHeader";

const PasswordPage = () => {
  return (
    <>

    <div className="colum-container">

    <UserHeader></UserHeader>

    <div className="profile-page-container">

    <ProfileSideBar></ProfileSideBar>

    <div className="profile-content-container">

      <div className="profile-content">
        <div className="profile-password-form">

        <div className="profile-password-titles">
                <h3>Contraseña</h3>
                <p>Modifica tu contraseña actual</p>
            </div>

          <div className="pt-16">
            <div className="profile-form-duo">
              <label htmlFor="">Contraseña actual</label>
              <input type="password" />
            </div>

            <div className="profile-form-duo">
              <label htmlFor="">Nueva contraseña</label>
              <input type="password" />
            </div>

            <div className="profile-form-duo">
              <label htmlFor="">Confirma tu nueva contraseña</label>
              <input type="password" />
            </div>

          </div>

          <div className="profile-button">
            <button>Guardar contraseña</button>
          </div>
        </div>
      </div>

      </div>


      </div>

    </div>

    </>
  );
};

export default PasswordPage;
