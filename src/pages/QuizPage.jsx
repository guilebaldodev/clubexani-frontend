import { Link, useParams } from "react-router-dom";
import UserHeader from "../components/userHeader";
import "../css/quizzes-page.css";

const quizzesData = {
  'metodologia-de-la-investigacion': {
    title: "Metodología de la Investigación",
    image: "/icons//quizzes/methodology-icon.png",
    color:"#0881D1",
    quizzes: [
      { "title": "Paradigmas de investigación", "status": "Completado" },
      { "title": "Niveles de medición", "status": "Completado" },
      { "title": "Enfoques de una investigación", "status": "Completado" },
      { "title": "Tipos de validez", "status": "Por completar" },
      { "title": "Método de investigación", "status": "Por completar" },
      { "title": "Muestreo probabilístico", "status": "Por completar" },
      { "title": "Muestreo no probabilístico", "status": "Por completar" },
      { "title": "Tipos de conocimiento", "status": "Por completar" },
      { "title": "Tipos de fuente de información", "status": "Por completar" },
      { "title": "Tipos de investigación", "status": "Por completar" },
      { "title": "Técnicas de recolección de datos", "status": "Por completar" },
      { "title": "Tipos de diseño de investigación", "status": "Por completar" },
      { "title": "Alcance de una investigación", "status": "Por completar" },
      { "title": "Estrategias de codificación", "status": "Por completar" },
      { "title": "Tipos de variable", "status": "Por completar" },
      { "title": "Tipos de hipótesis", "status": "Por completar" }
    ],
  },
  'comprension-lectora': {
    title: "Comprensión de Lectura",
    image: "/icons/comprehension-icon.png",
    color:"",
    quizzes: [
      { title: "Tipos de Textos", status: "Completado" },
      { title: "Estrategias de Lectura", status: "Por completar" },
      { title: "Comprensión Crítica", status: "Por completar" },
    ],
  },
  'redaccion-indirecta': {
    title: "Redacción Indirecta",
    image: "/icons/writing-icon.png",
    color:"",
    quizzes: [
      { title: "Estructura del Texto", status: "Completado" },
      { title: "Técnicas de Redacción", status: "Completado" },
      { title: "Revisión y Edición", status: "Por completar" },
    ],
  },
  'pensamiento-matematico': {
    title: "Pensamiento Matemático",
    image: "/icons/math-icon.png",
    color:"",
    quizzes: [
      { title: "Álgebra Básica", status: "Completado" },
      { title: "Geometría", status: "Por completar" },
      { title: "Estadística", status: "Por completar" },
    ],
  },
};

const QuizzesPage = () => {

  const {tema}=useParams()

  const subject=quizzesData[tema]

  console.log(subject)


  if(!subject) return(
    <>No encontrado</>
  )

  return (
    <>
      <div className="colum-container">
        <UserHeader></UserHeader>
        <div className="quizzes-page-container">
          <div className="quizzes-page-nav">

          <Link to="/cuestionarios/metodologia-de-la-investigacion" className={tema === 'metodologia-de-la-investigacion' ? 'quizzes-nav-selected' : ''}>
              Metodología
            </Link>
            <Link to="/cuestionarios/comprension-lectora" className={tema === 'comprension-lectora' ? 'quizzes-nav-selected' : ''}>
              Comprensión
            </Link>
            <Link to="/cuestionarios/redaccion-indirecta" className={tema === 'redaccion-indirecta' ? 'quizzes-nav-selected' : ''}>
              Redacción Indirecta
            </Link>
            <Link to="/cuestionarios/pensamiento-matematico" className={tema === 'pensamiento-matematico' ? 'quizzes-nav-selected' : ''}>
              Pensamiento Matemático
            </Link>
          </div>
          <div className="quizzes-page-titles">
            <div className="circle-div" style={{backgroundColor:subject['color']}}>
              <img src={subject['image']} alt="" />
            </div>
            <img src="" alt="" />
            <h2>Metodologia de la investigacion</h2>
          </div>

          <div className="quizzes-container">
            
            <h3>Cuestionarios</h3>
          {subject['quizzes'] && subject['quizzes'].map((quiz)=>(
            <>

          <div className="quiz-item">
            
            <div className="quiz-item-info">
               <h3>{quiz['title']}</h3>              
                 <div className="quiz-item-duo">
                  <img src="/icons/quizzes/check-circle-icon.png" alt="" />
                  <p>Completado</p>
                </div> 
             </div>
           
             <div className="quiz-item-button ">
                   <div className="circle-div "style={{backgroundColor:subject['color']}}>
                       <img src="/icons/quizzes/play-icon.png" alt="" />
                   </div>
             </div>
           
           </div>


            </>
          ))}
      
            <div className="quiz-item bt-none">
            
            <div className="quiz-item-info ">
               <h3>Paradigmas de la investigacion</h3>              
             <div className="quiz-item-duo ">
             <img src="/icons/quizzes/pendiente-icon.png" alt="" />
             <p>Por completar</p>
             </div>
             </div>
           
             <div className="quiz-item-button ">
                   <div className="circle-div">
                       <img src="/icons/quizzes/play-icon.png" alt="" />
                   </div>
             </div>
           
           </div>




          </div>
        </div>
      </div>
    </>
  );
};

export default QuizzesPage;
