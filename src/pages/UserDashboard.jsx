import UserHeader from "../components/userHeader";
import '../css/user-dashboard.css'

const UserDashboard = () => {
    return ( 
    <>
        <div className="colum-container">
        <UserHeader></UserHeader>
        <div className="user-dashboard-container">
            <div className="dashborad-banner">
            </div>
{/* 
            <div className="profile-credentials">
                        <div className="circle-div">
                            <img src="/icons/user-icon-profile.png" alt="" />
                        </div>

                        <div className="credentials-text">
                            <h2>Guilebaldo Vargas Solís</h2>
                            <p>Aspirante a posgrado en México</p>
                            <p>Universidad Autónoma de Guerrero</p>
                        </div>
            </div> */}

            <div className="dashboard-titles">
                <h2>
                ¡El primer paso hacia tu posgrado empieza con <span className="primary-color">Club</span>EXANI!
                </h2>
                <p>
                    Las herramientas que ofrecemos te ayudarán a consolidar tus conocimientos y avanzar hacia tu posgrado.
                </p>
            </div>

            <div className="user-dashboard-info">
                <div className="user-dashboard-section">
                    <h3>Ponte a prueba</h3>

                    <div className="diagnostic-exam-card">
                        <div className="diagnostic-titles">
                            <div className="diagnostic-img">
                                <img src="" alt="" />
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
                            <button>Comenzar</button>
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
                            <p className="title-card">Metodologia de la investigacion</p>
                            <p style={{color:"#0056D2"}} className="subtitle">22 Lecciones</p>

                        </div>

                        <div className="dashboard-img-container">
                            <div style={{backgroundColor:"#0056D2"}} className="dashboard-img">
                            <img src="/icons/quizzes/methodology-icon.png" alt="" />
                            </div>
                        </div>

                        </div>

                        <div className="user-dashboard-card">
                        
                        <div className="dashboard-card-text">
                            <p className="title-card">Redaccion indirecta</p>
                            <p  style={{color:"#1ABC9C"}} className="subtitle">23 Lecciones</p>
                        </div>

                        <div  className="dashboard-img-container">
                            <div style={{backgroundColor:"#1ABC9C"}} className="dashboard-img">
                            <img src="/icons/quizzes/writing-icon.png" alt="" />
                            </div>
                        </div>

                        </div>
                    
                        <div className="user-dashboard-card">
                        
                        <div className="dashboard-card-text">
                            <p className="title-card">Compresion lectora</p>
                            <p  style={{color:"#F3B942"}} className="subtitle">15 Lecciones</p>
                        </div>

                        <div className="dashboard-img-container">
                            <div style={{backgroundColor:"#F3B942"}} className="dashboard-img">
                            <img src="/icons/quizzes/books-icon.png" alt="" />
                            </div>
                        </div>

                        </div>
                
                </div>
                </div>
 
            </div>

        </div>
        </div>
            
    </> );
}
 
export default UserDashboard;