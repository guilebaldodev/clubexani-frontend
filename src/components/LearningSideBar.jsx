import { Link } from "react-router-dom";

const LearningSideBar = () => {
    return ( 
    <>
    <div className="learning-side-container">
        <h3>Temario de Metodologia</h3>
        <Link to={"/lecciones/paradigmas-de-investigacion"} className="learning-side-item item-side-selected">
            <p>Paradigmas de investigacion</p>
            <img src="/icons/done-blue-icon3.png" alt="" />
        </Link>

        <Link to={"/lecciones/niveles-de-medicion"} className="learning-side-item ">
            <p>Niveles de medicion</p>
            <img src="/icons/done-blue-icon3.png" alt="" />
        
        </Link>
        <div className="learning-side-item ">
            <p>Enfoques de una investigacion</p>
            <img src="/icons/done-blue-icon3.png" alt="" />
        </div>
        <div className="learning-side-item ">
            <p>Tipos de validez</p>
            <img src="/icons/done-grey-icon.png" alt="" />
        </div>
        <div className="learning-side-item">
            <p>Metodo de investigacion</p>
        <img src="/icons/done-grey-icon.png" alt="" />
        </div>
        <div className="learning-side-item">
            <p>Muestreo probabilistico</p>
            <img src="/icons/done-grey-icon.png" alt="" />
        </div>
        <div className="learning-side-item">
            <p>Muestreo no probabilistico</p>
            <img src="/icons/done-grey-icon.png" alt="" />
        </div>

        <div className="learning-side-item">
            <p>Tipos de conocimiento</p>
            <img src="/icons/done-grey-icon.png" alt="" />
        </div>
        <div className="learning-side-item">
            <p>Tipos de fuente de informacion</p>
            <img src="/icons/done-grey-icon.png" alt="" />
        </div>
        <div className="learning-side-item">
            <p>Tipos de investigacion</p>
            <img src="/icons/done-grey-icon.png" alt="" />
        </div>
        <div className="learning-side-item">
            <p>Tecnicas de recoleccion de datos</p>
            <img src="/icons/done-grey-icon.png" alt="" />
        </div>
        <div className="learning-side-item">
            <p>Tipos de diseño de investigacion</p>
            <img src="/icons/done-grey-icon.png" alt="" />
        </div>
        <div className="learning-side-item">
            <p>Alcanze de una investigacion</p>
            <img src="/icons/done-grey-icon.png" alt="" />
        </div>
        <div className="learning-side-item">
            <p>Estrategias de codificacion</p>
            <img src="/icons/done-grey-icon.png" alt="" />
        </div>
        <div className="learning-side-item">
            <p>Tipos de variable</p>
            <img src="/icons/done-grey-icon.png" alt="" />
        </div>

        <div className="learning-side-item">
            <p>Tipos de hipotesis</p>
            <img src="/icons/done-grey-icon.png" alt="" />
        </div>
    </div>

    </> );
}
 
export default LearningSideBar;