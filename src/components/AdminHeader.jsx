

const AdminHeader = () => {


return (
    <>
    <div className="admin-header" >
            
        <div className="admin-left-menu">
        <img src="/icons/hamburger-icon.png"></img>        
        <img src="/icons/full-screen-icon.png"></img>
        </div>

        <div className="admin-right-menu">
            <div className="admin-img">
                <img src="/icons/user-icon-profile.png" alt="" />
            </div>
            <div className="navbar-credentials">
                <h4>Guilebaldo Vargas</h4>
                <p>Administrador</p>
            </div>
        </div>

    </div>
    
    </>  );
}
 
export default AdminHeader;