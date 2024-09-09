import AdminHeader from "../components/AdminHeader";

const QuestionPage = () => {
    return ( 
    
    <>
    <div className="outlet">
        <AdminHeader></AdminHeader>
        <div className="admin-question-container">

            <div className="admin-question-title">
                <h2>Lista de preguntas</h2>
            </div>

            <div className="admin-question-cards">
                <div className="admin-question-card">
                    <div className="question-text">
                        <p>
                        Total de preguntas
                        </p>
                        <h4>520</h4>
                    </div>
                    <div className="admin-question-img">
                        <div className="question-img">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
                <div className="admin-question-card">
                    <div className="question-text">
                        <p>
                        Preguntas este mes
                        </p>
                        <h4>520</h4>
                    </div>
                    <div className="admin-question-img">
                        <div className="question-img">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
                <div className="admin-question-card">
                    <div className="question-text">
                        <p>
                        Preguntas asignadas
                        </p>
                        <h4>520</h4>
                    </div>
                    <div className="admin-question-img">
                        <div className="question-img">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
                <div className="admin-question-card">
                    <div className="question-text">
                        <p>
                        Categorias
                        </p>
                        <h4>520</h4>
                    </div>
                    <div className="admin-question-img">
                        <div className="question-img">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </> );
}
 
export default QuestionPage;