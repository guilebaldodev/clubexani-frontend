import {Link, useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()
    return ( 
        <>
        <header className="header">

            <div className="logotype" onClick={()=>{
                navigate("/")
            }}>
                <img src="./icons/logo2.png" alt="" />
                <h2>
                    <span className='primary-color'>
                    Club 

                    </span>
                    Exani
                    </h2>
            </div>

            <nav className="navbar">
                <Link to={"/planes"}>Planes</Link>
                <Link to={"/testimonios"}>Testimonios</Link>
                <Link to={"/nosotros"}>Nosotros</Link>
                <Link to={"/contacto"}>Contacto</Link>
            </nav>

            <div className="navbar-button">
                    <button onClick={()=>{
                        navigate('/exani-iii')
                    }}>Ir al Curso</button>
            </div>

            

        </header>



        </>

     );
}
 
export default Navbar;