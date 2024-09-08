import { Link } from 'react-router-dom'
import {Outlet} from 'react-router-dom'
import '../css/admin-sidebar.css'
import { useState } from 'react';


const SideBar = () => {

    const [activeMenu, setActiveMenu] = useState(null);


    const toggleMenu=(menu)=>{
        if(activeMenu===menu){
            setActiveMenu(null)
        }else{
            setActiveMenu(menu)
        }

    }


    return ( 
    <>
    <div className="super-container">

    <div className="sidebar-container">
        <div className="sidebar-top">
        <div className="sidebar-header">
            <div className="sidebar-title">
                <img src="/icons/logo2.png"></img>
                <h3>Club<span className='primary-color'>Exani</span></h3>
            </div>
        </div>
            <div className="sidebar-options">
                <Link to="/panel-control/preguntas">
                    <img src="/icons/admin-sidebar/home-icon.png" alt="" />
                    <p>Dashboard</p>
                </Link>


                <div className="option-menu">
                    <div className="option-menu-title" onClick={()=>{
                        toggleMenu('preguntas')
                    }}>
                        <div className="title-right">
                        <img src="/icons/admin-sidebar/question-icon.png" alt="" />
                        <p>Preguntas</p>
                        </div>
                        <img src="/icons/admin-sidebar/forward-icon.png" alt="" />
                    </div>

                    <div className={`content ${activeMenu==="preguntas"?"show":""}`}>

                    <Link to="/panel-control/preguntas">
                        <img src="/icons/admin-sidebar/round-icon.png" alt="" />
                        <p>Lista</p>
                    </Link>

                    <Link to="/panel-control/preguntas">
                        <img src="/icons/admin-sidebar/round-icon.png" alt="" />
                        <p>Añadir pregunta</p>
                    </Link>
                    </div>

                </div>
                <div className="option-menu">
                    <div className="option-menu-title"  onClick={()=>{
                        toggleMenu('lecciones')
                    }}>
                        <div className="title-right">
                        <img src="/icons/admin-sidebar/open-book.png" alt="" />
                        <p>Lecciones</p>
                        </div>
                        <img src="/icons/admin-sidebar/forward-icon.png" alt="" />
                    </div>

                    <div className={`content ${activeMenu==="lecciones"?"show":""}`}>

                    <Link to="/panel-control/preguntas">
                        <img src="/icons/admin-sidebar/round-icon.png" alt="" />
                        <p>Lista</p>
                    </Link>

                    <Link to="/panel-control/preguntas">
                        <img src="/icons/admin-sidebar/round-icon.png" alt="" />
                        <p>Añadir leccion</p>
                    </Link>
                    </div>

                </div>
      
                <div className="option-menu">
                    <div className="option-menu-title" onClick={()=>{
                        toggleMenu('simuladores')
                    }}>
                        <div className="title-right">
                        <img src="/icons/admin-sidebar/writing-icon.svg" alt="" />
                        <p>Simuladores</p>
                        </div>
                        <img src="/icons/admin-sidebar/forward-icon.png" alt="" />
                    </div>

                    <div className={`content ${activeMenu==="simuladores"?"show":""}`}>

                    <Link to="/panel-control/preguntas">
                        <img src="/icons/admin-sidebar/round-icon.png" alt="" />
                        <p>Lista</p>
                    </Link>

                    <Link to="/panel-control/preguntas">
                        <img src="/icons/admin-sidebar/round-icon.png" alt="" />
                        <p>Construir simulador</p>
                    </Link>
                    </div>

                </div>

                <div className="option-menu">
                    <div className="option-menu-title" onClick={()=>{
                        toggleMenu('cuestionarios')
                    }}>
                        <div className="title-right">
                        <img src="/icons/admin-sidebar/test.png" alt="" />
                        <p>Cuestionarios</p>
                        </div>
                        <img src="/icons/admin-sidebar/forward-icon.png" alt="" />
                    </div>

                    <div className={`content ${activeMenu==="cuestionarios"?"show":""}`}>

                    <Link to="/panel-control/preguntas">
                        <img src="/icons/admin-sidebar/round-icon.png" alt="" />
                        <p>Lista</p>
                    </Link>

                    <Link to="/panel-control/preguntas">
                        <img src="/icons/admin-sidebar/round-icon.png" alt="" />
                        <p>Construir cuestionario</p>
                    </Link>
                    </div>

                </div>

                <Link to="/panel-control/preguntas">
                    <img src="/icons/admin-sidebar/user-icon.png" alt="" />
                    <p>Usuarios</p>
                </Link>



        
            </div>

        </div>


            <div className="sidebar-footer">

            <Link to="/panel-control/preguntas">
                    <img src="/icons/admin-sidebar/dark-mode-icon.png" alt="" />
                    <p>Tema</p>
                </Link>



                <Link to="/panel-control/preguntas">
                    <img src="/icons/admin-sidebar/log-out-icon.png" alt="" />
                    <p>Cerrar sesion</p>
                </Link>

            </div>
    </div>
<Outlet></Outlet>    
    </div>

    </> );
}
 
export default SideBar;