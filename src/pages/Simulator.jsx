import { Link, useNavigate } from "react-router-dom";
import "../css/simulator.css";
import AnswerSheet from "../components/AnswerSheet";
import { useState } from "react";

const Simulator = () => {

    const [SideBar, setSideBar] = useState(false);

    const navigate=useNavigate()

  return (
    <>
      <div className="colum-container">
        {/* <UserHeader></UserHeader> */}
        <div className="simulator-container">
          <div className="simulator">
            <div className="simulator-titles">
              <div className="simulator-header">
                <h3>Examen diagnostico</h3>
                <div>
                  <img src="/icons/stopwatch.png" alt="" />
                  04:06:15
                </div>
              </div>

              <div className="simulator-info">
                <p>Reactivos pendientes: 1</p>
                <button onClick={()=>{
                    console.log(SideBar)
                    setSideBar(!SideBar)
                }}>Preguntas</button>
              </div>
            </div>

            <div className="simulator-question">
              <h4>Pregunta 20</h4>
              <div className="simulator-content">
                <p>
                  ¿Qué técnica de recolección de datos se utilizó en la
                  siguiente investigación? En México, según datos demográficos,
                  cada año se incrementa la tasa de embarazo en jóvenes de entre
                  12 y 15 años. Esta investigación, con representatividad
                  nacional, tiene como objetivo explicar las tendencias y causas
                  de este fenómeno, ofreciendo un diagnóstico más certero como
                  insumo para el diseño de políticas públicas de prevención del
                  embarazo adolescente. Se considerarán diversos factores, como
                  edad, escolaridad, nivel socioeconómico y características del
                  entorno familiar, para determinar cómo influyen los aspectos
                  biológicos, sociales y educativos, mediante el análisis de
                  diversos procesos estadísticos, como los modelos de regresión
                  logística.
                </p>
              </div>
            </div>

            <div className="simulator-answers">
              <div className="simulator-answer ">
                <div className="simulator-answer-option selected">A</div>

                <div className="simulator-answer-content">
                  <p>Casos extremos</p>
                </div>
              </div>

              <div className="simulator-answer">
                <div className="simulator-answer-option">B</div>

                <div className="simulator-answer-content">
                  <p>Por conveniencia</p>
                </div>
              </div>

              <div className="simulator-answer">
                <div className="simulator-answer-option">C</div>

                <div className="simulator-answer-content">
                  <p>Variacion maxima</p>
                </div>
              </div>
            </div>

            <div className="simulator-buttons">
              <button onClick={()=>{
                
              }}>Terminar</button>
              <button onClick={()=>{
                navigate("/simulador/2")
              }}>
                Siguiente
                <img src="/icons/lesson/next-icon.png" alt="" />
              </button>
            </div>
          </div>

            <AnswerSheet closeSideBar={()=>{
                setSideBar(false)
            }} isActive={SideBar}></AnswerSheet>


        </div>
      </div>
    </>
  );
};

export default Simulator;
