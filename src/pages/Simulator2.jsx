import { Link } from "react-router-dom";
import "../css/simulator.css";
import AnswerSheet from "../components/AnswerSheet";
import { useState } from "react";

const Simulatordos = () => {

    console.log("????")

    const [SideBar, setSideBar] = useState(false);

  return (
    <>
      <div className="colum-container">
        <div className="simulator-container">
          <div className="simulator">
            <div className="simulator-titles">
              <div className="simulator-header">
                <h3>Cuestionario: Paradigmas de la investigacion</h3>
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
              <h4>Pregunta 5</h4>
              <div className="simulator-content">
                <p>
                Se vierte agua a ritmo constante en un recipiente con la siguiente forma:
                </p>
                <div className="simulator-content-img">
                <img src="/icons/exams/simulator.png" alt="" />
                </div>
                <p>
                ¿Qué gráfica corresponde a la variación de la altura del agua dentro del recipiente conforme pasa el tiempo?
                </p>
              </div>
            </div>

            <div className="simulator-answers">
              <div className="simulator-answer ">
                <div className="simulator-answer-option selected">A</div>

                <div className="simulator-answer-content">
                    <img src="/icons/exams/simulator2.png" alt="" />
                </div>
              </div>

              <div className="simulator-answer">
                <div className="simulator-answer-option">B</div>

                <div className="simulator-answer-content">
                    <img src="/icons/exams/simulator3.png" alt="" />
                </div>
              </div>

              <div className="simulator-answer">
                <div className="simulator-answer-option">C</div>

                <div className="simulator-answer-content">
                  <img src="/icons/exams/simulator4.png" alt="" />
                </div>
              </div>
            </div>

            <div className="simulator-buttons">
              <button onClick={()=>{
                
              }}>Terminar</button>
              <button>
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

export default Simulatordos;
