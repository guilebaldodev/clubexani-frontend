import { Link } from "react-router-dom";
import UserHeader from "../components/userHeader";
import "../css/user-dashboard.css";

import ProgressBar from "@ramonak/react-progress-bar";

const UserDashboard = () => {
  return (
    <>
      <div className="colum-container">
        <UserHeader></UserHeader>
        <div className="user-dashboard-container">
          <div className="dashborad-banner"></div>

          {/*  */}
          <div className="dashboard-titles">
            <h2>
              ¡El primer paso hacia tu posgrado empieza con{" "}
              <span className="primary-color">Club</span>EXANI!
            </h2>
            <p>
              Las herramientas que ofrecemos te ayudarán a consolidar tus
              conocimientos y avanzar hacia tu posgrado.
            </p>
          </div>

          <div className="user-dashboard-columns">
            <div className="user-dashboard-info">
              <div className="user-dashboard-section">
                <div className="diagnostic-exam-card">
                  <div className="diagnostic-titles">
                    <div className="diagnostic-img">
                      <img src="/icons/rating-svg.svg" alt="" />
                    </div>
                    <p>Examen diagnostico #1</p>
                  </div>

                  <div className="diagnostic-info">
                    <div className="diagnostic-duo">
                      <img src="/icons/time-icon.png" alt="" />
                      <p>20 minutos</p>
                    </div>
                    <div className="diagnostic-duo">
                      <img src="/icons/question-icon.png" alt="" />
                      <p>40 preguntas</p>
                    </div>
                  </div>
                  <div className="diagnostic-button">
                    {/* <img src="/icons/quizzes/play-icon.png" alt="" /> */}
                    <button>Empezar</button>
                  </div>
                </div>
              </div>
              <div className="user-dashboard-section">
                <h3>Materias</h3>
                <div className="user-dashboards-cards">
                  <div className="user-dashboard-card">
                    <div className="dashboard-card-text">
                      <p className="title-card">Pensamiento Matematico</p>
                      <p className="subtitle">18 Lecciones</p>
                    </div>

                    <div className="dashboard-img-container">
                      <div className="dashboard-img">
                        <img src="/icons/quizzes/mathematics-icon.png" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="user-dashboard-card">
                    <div className="dashboard-card-text">
                      <p className="title-card">
                        Metodologia de la investigacion
                      </p>
                      <p style={{ color: "#0056D2" }} className="subtitle">
                        22 Lecciones
                      </p>
                    </div>

                    <div className="dashboard-img-container">
                      <div
                        style={{ backgroundColor: "#0056D2" }}
                        className="dashboard-img"
                      >
                        <img src="/icons/quizzes/methodology-icon.png" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="user-dashboard-card">
                    <div className="dashboard-card-text">
                      <p className="title-card">Redaccion indirecta</p>
                      <p style={{ color: "#1ABC9C" }} className="subtitle">
                        23 Lecciones
                      </p>
                    </div>

                    <div className="dashboard-img-container">
                      <div
                        style={{ backgroundColor: "#1ABC9C" }}
                        className="dashboard-img"
                      >
                        <img src="/icons/quizzes/writing-icon.png" alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="user-dashboard-card">
                    <div className="dashboard-card-text">
                      <p className="title-card">Compresion lectora</p>
                      <p style={{ color: "#F3B942" }} className="subtitle">
                        15 Lecciones
                      </p>
                    </div>

                    <div className="dashboard-img-container">
                      <div
                        style={{ backgroundColor: "#F3B942" }}
                        className="dashboard-img"
                      >
                        <img src="/icons/quizzes/books-icon.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dashboard-section">
                <h3>Herramientas</h3>

                <div className="tools-container">
                  <div className="tool-card">
                    <div className="tool-container">
                      <div className="tool-img circle-div">
                        <img src="/icons/writing-icon.svg" alt="" />
                      </div>
                      <div className="tool-info">
                        <p>Simuladores</p>
                      </div>
                    </div>
                    <div className="tool-forward">
                      <img
                        className="tool-forward"
                        src="/icons/forward-icon.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="tool-card">
                    <div className="tool-container">
                      <div className="tool-img circle-div">
                        <img src="/icons/test-icon-white.png" alt="" />
                      </div>
                      <div className="tool-info">
                        <p>Cuestionarios</p>
                      </div>
                    </div>
                    <div className="tool-forward">
                      <img
                        className="tool-forward"
                        src="/icons/forward-icon.png"
                        alt=""
                      />
                    </div>
                  </div>

                  <div className="tool-card">
                    <div className="tool-container">
                      <div className="tool-img circle-div">
                        <img src="/icons/open-book-white.png" alt="" />
                      </div>
                      <div className="tool-info">
                        <p>Lecciones</p>
                      </div>
                    </div>
                    <div className="tool-forward">
                      <img
                        className="tool-forward"
                        src="/icons/forward-icon.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="user-dashboard-progress">
              <h3>Tu progreso</h3>
                <div className="progress-more">
                    <Link>
                    Ver más</Link>
                </div>

              <div className="dashboard-progress-items">
                <div className="progress-item">
                  <div className="progress-item-titles">
                    <p>Simuladores</p>
                    <p>8/10</p>
                  </div>
                  <ProgressBar completed={80} bgColor="#FF6700"></ProgressBar>
                </div>
                <div className="progress-item">
                  <div className="progress-item-titles">
                    <p>Cuestionarios</p>
                    <p>7/7</p>
                  </div>
                  <ProgressBar completed={100} bgColor="#642EFF"></ProgressBar>
                </div>

                <div className="progress-item">
                  <div className="progress-item-titles">
                    <p>Metodologia</p>
                    <p>7/22</p>
                  </div>
                  <ProgressBar completed={40} bgColor="#EE4266"></ProgressBar>
                </div>
                <div className="progress-item">
                  <div className="progress-item-titles">
                    <p>Redaccion</p>
                    <p>7/140</p>
                  </div>
                  <ProgressBar completed={15} bgColor="#0056D2"></ProgressBar>
                </div>

                <div className="progress-item">
                  <div className="progress-item-titles">
                    <p>Compresion</p>
                    <p>15/20</p>
                  </div>
                  <ProgressBar completed={75} bgColor="#1ABC9C"></ProgressBar>
                </div>

                <div className="progress-item">
                  <div className="progress-item-titles">
                    <p>Pensamiento</p>
                    <p>10/20</p>
                  </div>
                  <ProgressBar completed={50} bgColor="#F3B942"></ProgressBar>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
