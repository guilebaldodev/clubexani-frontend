import {Link} from 'react-router-dom'

const Navbar = () => {
    return ( 
        <>
        <header className="header">

            <div className="logotype">
                <img src="./icons/logo2.png" alt="" />
                <h2>
                    <span className='primary-color'>
                    Club 

                    </span>
                    Exani
                    </h2>
            </div>

            <nav className="navbar">
                <Link>Curso</Link>
                <Link>Planes</Link>
                <Link>Testimonios</Link>
                <Link>Nosotros</Link>
                <Link>Contacto</Link>
            </nav>

            <div className="navbar-button">
                    <button>Iniciar sesion</button>
            </div>

            

        </header>



        </>

     );
}
 
export default Navbar;