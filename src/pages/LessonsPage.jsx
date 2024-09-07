import UserHeader from "../components/userHeader";
import ProgressBar from "@ramonak/react-progress-bar";

import "../css/lessons-page.css";
import { Link } from "react-router-dom";

const LessonsPage = () => {
  return (
    <>
      <div className="colum-container">
        <UserHeader></UserHeader>
        <div className="lessons-page-container">
          <div className="titles">
            <h2>Lecciones</h2>
          </div>

          <div className="lessons-container">
           
           
            <div className="lesson-item">
              
              <div className="item-img">
                <img src="/img/simulator/metodologia3.jpg" alt="" />
                <div className="overlay">
                  <div className="overlay-text">
                    <h2>
                      Metodologia
    <br />
                      de la
            <br />
                      investigacion
                    </h2>
                  </div>
                </div>
              </div>
              
              <div className="lesson-item-content">
                <p>15/30 Lecciones</p>

                <div className="lesson-item-progress">
                <ProgressBar bgColor="#0056D2" height="18px" isLabelVisible={false} completed={50}></ProgressBar>
                  <Link to={'/lecciones/paradigmas-de-investigacion'} className="lesson-play-container">
                    <img src="/icons/quizzes/play-icon.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>
           
  
            <div className="lesson-item">
              
              <div className="item-img">
                <img src="/img/simulator/mathematics.jpg" alt="" />
                <div className="overlay">
                  <div className="overlay-text">
                    <h2>
                      Pensamiento
    <br />
                      matematico
                    </h2>
                  </div>
                </div>
              </div>
              
              <div className="lesson-item-content">
                <p>22/30 Lecciones</p>

                <div className="lesson-item-progress">
                  <ProgressBar bgColor="#0056D2" height="18px" isLabelVisible={false} completed={70}></ProgressBar>
                  <Link className="lesson-play-container">
                    <img src="/icons/quizzes/play-icon.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lesson-item">
              
              <div className="item-img">
                <img src="/img/simulator/gramatica.jpg" alt="" />
                <div className="overlay">
                  <div className="overlay-text">
                    <h2>
                      Redaccion
    <br />
                      indirecta
                    </h2>
                  </div>
                </div>
              </div>
              
              <div className="lesson-item-content">
                <p>25/30 Lecciones</p>

                <div className="lesson-item-progress">
                <ProgressBar bgColor="#0056D2" height="18px" isLabelVisible={false} completed={90}></ProgressBar>

                  <div className="lesson-play-container">
                    <img src="/icons/quizzes/play-icon.png" alt="" />
                  </div>
                </div>
              </div>
            </div>            <div className="lesson-item">
              
              <div className="item-img">
                <img src="/img/simulator/books.jpg" alt="" />
                <div className="overlay">
                  <div className="overlay-text">
                    <h2>
                      Comprension
    <br />
                      lectora
                    </h2>
                  </div>
                </div>
              </div>
              
              <div className="lesson-item-content">
                <p>30/30 Lecciones</p>

                <div className="lesson-item-progress">
                <ProgressBar bgColor="#0056D2" height="18px" isLabelVisible={false} completed={100}></ProgressBar>
                  <Link to={'/lecciones/comprension-lectora'} className="lesson-play-container">
                    <img src="/icons/quizzes/play-icon.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>
            {/* 

                <div className="lesson-item">
                    <div className="lesson-item-titles" style={{backgroundColor:"#F3B942"}}>
                        <h3>Compresion lectora</h3>
                    </div>
                    <div className="lesson-item-content">
                        <p>
                            15/30 Lecciones
                        </p>

                        <div className="lesson-item-progress">
                            <ProgressBar bgColor="#F3B942" completed={100}></ProgressBar>                            
                            <div style={{backgroundColor:"#F3B942"}} className="lesson-play-container">
                                <img src="/icons/quizzes/play-icon.png" alt="" />
                            </div>
                        </div>

                    </div>
                </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LessonsPage;
