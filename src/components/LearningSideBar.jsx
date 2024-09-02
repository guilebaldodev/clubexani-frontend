import { Link } from "react-router-dom";

const LearningSideBar = ({lessonName}) => {
    return ( 
        <>
        <div className="learning-side-container">
            <h3>Temario de Metodología</h3>
            <Link to={"/lecciones/paradigmas-de-investigacion"} className={`learning-side-item ${lessonName === 'paradigmas-de-investigacion' ? "item-side-selected" : ""}`}>
                <p>Paradigmas de investigación</p>
                <img src="/icons/done-blue-icon3.png" alt="" />
            </Link>

            <Link to={"/lecciones/niveles-de-medicion"} className={`learning-side-item ${lessonName === 'niveles-de-medicion' ? "item-side-selected" : ""}`}>
                <p>Niveles de medición</p>
                <img src="/icons/done-blue-icon3.png" alt="" />
            </Link>

            <div className="learning-side-item">
                <p>Enfoques de una investigación</p>
                <img src="/icons/done-blue-icon3.png" alt="" />
            </div>
            <div className="learning-side-item">
                <p>Tipos de validez</p>
                <img src="/icons/done-grey-icon.png" alt="" />
            </div>
            <div className="learning-side-item">
                <p>Método de investigación</p>
                <img src="/icons/done-grey-icon.png" alt="" />
            </div>
            <div className="learning-side-item">
                <p>Muestreo probabilístico</p>
                <img src="/icons/done-grey-icon.png" alt="" />
            </div>
            <div className="learning-side-item">
                <p>Muestreo no probabilístico</p>
                <img src="/icons/done-grey-icon.png" alt="" />
            </div>
            <div className="learning-side-item">
                <p>Tipos de conocimiento</p>
                <img src="/icons/done-grey-icon.png" alt="" />
            </div>
            <div className="learning-side-item">
                <p>Tipos de fuente de información</p>
                <img src="/icons/done-grey-icon.png" alt="" />
            </div>
            <div className="learning-side-item">
                <p>Tipos de investigación</p>
                <img src="/icons/done-grey-icon.png" alt="" />
            </div>
            <div className="learning-side-item">
                <p>Técnicas de recolección de datos</p>
                <img src="/icons/done-grey-icon.png" alt="" />
            </div>
            <div className="learning-side-item">
                <p>Tipos de diseño de investigación</p>
                <img src="/icons/done-grey-icon.png" alt="" />
            </div>
            <div className="learning-side-item">
                <p>Alcance de una investigación</p>
                <img src="/icons/done-grey-icon.png" alt="" />
            </div>
            <div className="learning-side-item">
                <p>Estrategias de codificación</p>
                <img src="/icons/done-grey-icon.png" alt="" />
            </div>
            <div className="learning-side-item">
                <p>Tipos de variable</p>
                <img src="/icons/done-grey-icon.png" alt="" />
            </div>
            <div className="learning-side-item">
                <p>Tipos de hipótesis</p>
                <img src="/icons/done-grey-icon.png" alt="" />
            </div>
        </div>
    </>
    );
}
 
export default LearningSideBar;