import { Link, Outlet } from 'react-router-dom'

const SideBar = () => {
    return ( 
    <>
    <div className="super-container">

    <div className="side-bar-container">
        <div className="side-bar-head">
            <div className="side-bar-title">
                <img src="/white-logo.png"></img>
                <h3>Club EXANI</h3>
            </div>
            <div className="side-bar-options">
            <Link to="/panel-control/preguntas">
                <img src="/icons/question-icon.png" alt="" />
                <h4>Preguntas</h4>
            </Link>

            <Link to="/">
                <img src="/icons/exam-icon.png" alt="" />
                <h4>Examenes</h4>
            </Link>
            <Link to="/">
                <img src="/icons/subject-icon.png" alt="" />
                <h4>Lecciones</h4>
            </Link>            
            <Link to="/">
                <img src="/icons/questionary-icon.png" alt="" />
                <h4>Cuestionarios</h4>
            </Link>            
            <Link to="/">
                <img src="/icons/analytics-icon.png" alt="" />
                <h4>Analiticas</h4>
            </Link>
            <Link to="/">
                <img src="/icons/discount-icon.png" alt="" />
                <h4>Descuentos</h4>
            </Link>
            </div>
        </div>
        <div className="side-bar-footer">
        <div className="side-bar-options">
            <Link to="/">
                <img src="/icons/dark-mode-icon.png" alt="" />
                <h4>Tema</h4>
            </Link>

            <Link to="/">
                <img src="/icons/return-icon.png" alt="" />
                <h4>Salir</h4>
            </Link>
         
            <Link to="/">
                <img src="/icons/log-out-icon.png" alt="" />
                <h4>Cerrar sesion</h4>
            </Link>
         
            </div>
        </div>

    </div>
    <Outlet></Outlet>
    </div>

    </> );
}
 
export default SideBar;