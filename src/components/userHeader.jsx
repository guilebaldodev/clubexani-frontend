import { Link } from "react-router-dom";

const UserHeader = () => {
    return (
    <>
    
    <header className="header user-header">

<div className="logotype">
    <img src="/icons/logo2.png" alt="" />
    <h2>
        <span className='primary-color'>
        Club 
        </span>
        Exani
        </h2>
</div>
<div className="header-info">
<nav className="navbar user-navbar">
    
    <Link to={"/exani-iii"}>
    <img src="/icons/header/home-icon2.png" alt="" />
    Inicio
    </Link>
    <Link>
    <img src="/icons/header/writing.svg" alt="" />
    Simuladores</Link>
    <Link to={"/lecciones/paradigmas-de-investigacion"}>
    <img src="/icons/header/open-book.png" alt="" />
    Lecciones</Link>
    <Link to={'/cuestionarios/metodologia-de-la-investigacion'}>
    <img src="/icons/header/test-icon.png" alt="" />
    Cuestionarios
    </Link>
    <Link to={'/planes'}>
    <img src="/icons/header/payment-icon.png" alt="" />
    Planes</Link>
</nav>

<Link to={"/perfil"} className="navbar-button user-header-button">
        <img src="/icons/header/user-icon.png" alt="" />
</Link>

</div>



</header>

    </> );
}
 
export default UserHeader;