import { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import "../css/admin-question.css";
import Select from 'react-select'

const QuestionPage = () => {

  const [filters, setFilters] = useState(false);

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
                <p>Total de preguntas</p>
                <h4>520</h4>
              </div>
              <div className="admin-question-img">
                <div className="question-img">
                  <img src="/icons/admin-questions/question.png" alt="" />
                </div>
              </div>
            </div>
            <div className="admin-question-card">
              <div className="question-text">
                <p>Preguntas este mes</p>
                <h4>30</h4>
              </div>
              <div className="admin-question-img">
                <div className="question-img">
                  <img src="/icons/admin-questions/calendar.png" alt="" />
                </div>
              </div>
            </div>
            <div className="admin-question-card">
              <div className="question-text">
                <p>Preguntas asignadas</p>
                <h4>350</h4>
              </div>
              <div className="admin-question-img">
                <div className="question-img">
                  <img src="/icons/admin-questions/pointer.png" alt="" />
                </div>
              </div>
            </div>
            <div className="admin-question-card">
              <div className="question-text">
                <p>Categorias</p>
                <h4>4</h4>
              </div>
              <div className="admin-question-img">
                <div className="question-img">
                  <img src="/icons/admin-questions/category.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="admin-table-container">
            <div className="admin-table-header">
              <div className="admin-table-right">
                <div className="input-container">
                  <img src="/icons/admin-questions/search.svg" alt="" />
                  <input placeholder="Buscar..." type="text" />
                </div>
              </div>

              <div className="admin-table-left">
                <button onClick={()=>{
                  setFilters(true)
                }} className="bordered">
                  <img src="/icons/admin-questions/filters.png" alt="" />
                  Filtros
                </button>
                <button>
                  <img src="/icons/admin-questions/add-icon.png" alt="" />
                  Añadir
                </button>
              </div>
            </div>

            <div className="admin-table">
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Tema</th>
                    <th>Tipo</th>
                    <th>Origen</th>
                    <th>Categoria</th>
                    <th>Asignado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>¿Que es el positivismo aplicada los ?</td>
                    <td>Html</td>
                    <td>Examen</td>
                    <td>Metodologia</td>
                    <td>No asignado</td>
                    <td>Comparación de </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>¿Que es el positivismo?</td>
                    <td>Texto</td>
                    <td>Examen</td>

                    <td>Metodologia</td>
                    <td>No asignado</td>
                    <td>Comparación de </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>¿Que es el positivismo?</td>
                    <td>html</td>
                    <td>Examen</td>

                    <td>Metodologia</td>
                    <td>No asignado</td>
                    <td>Comparación de </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>¿Que es el positivismo?</td>
                    <td>Texto</td>
                    <td>Generada</td>
                    
                    <td>Metodologia</td>
                    <td>No asign</td>
                    <td>Comparación de </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>¿Que es el positivismo?</td>
                    <td>Texto</td>
                    <td>Generada</td>
                    <td>Metodologia</td>
                    <td>No asign</td>
                    <td>Comparación de </td>
                  </tr>                  <tr>
                    <td>1</td>
                    <td>¿Que es el positivismo?</td>
                    <td>Texto</td>
                    <td>Generada</td>
                    
                    <td>Metodologia</td>
                    <td>No asign</td>
                    <td>Comparación de </td>
                  </tr>                  <tr>
                    <td>1</td>
                    <td>¿Que es el positivismo?</td>
                    <td>Texto</td>
                    <td>Examen</td>
                    
                    <td>Metodologia</td>
                    <td>No asign</td>
                    <td>Comparación de </td>
                  </tr>                  <tr>
                    <td>1</td>
                    <td>¿Que es el positivismo?</td>
                    <td>Texto</td>
                    <td>Examen</td>
                    
                    <td>Metodologia</td>
                    <td>No asign</td>
                    <td>Comparación de </td>
                  </tr>
                   <tr>
                    <td>1</td>
                    <td>¿Que es el positivismo?</td>
                    <td>Texto</td>
                    <td>Examen</td>
                    
                    <td>Metodologia</td>
                    <td>No asign</td>
                    <td>Comparación de </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>¿Que es el positivismo?</td>
                    <td>Texto</td>
                    <td>Examen</td>
                    
                    <td>Metodologia</td>
                    <td>No asign</td>
                    <td>Comparación de </td>
                  </tr>
                 
                </tbody>
              </table>
              <div className="admin-table-footer">
                <div className="admin-footer-left">
                  <p>Preguntas por pagina: 10</p>
                </div>
                <div className="admin-footer-right">
                    <p>
                      11-20 de 20
                    </p>
                    <div className="footer-button rotate">
                      <img src="/icons/admin-questions/arrow.png" alt="" />
                    </div>

                    <div className="footer-button ">
                      <img src="/icons/admin-questions/arrow.png" alt="" />
                    </div>
                </div>
              </div>
            </div>
          </div>
          {
            filters==true && <>
                    <div className="overlay">
            <div className="admin-filters-container">
              <div className="admin-filter-content">
              <div className="admin-filter-header">
                <h3>Filtros</h3>
                <img onClick={()=>{
                  setFilters(false)
                }} src="/icons/admin-questions/x.png" alt="" />
              </div>


              <div className="admin-filters-items">
                <div className="admin-duo-input">
                  <label htmlFor="">Tipo de pregunta</label>
                  <Select></Select> 
                </div> 

                <div className="admin-duo-input">
                  <label htmlFor="">Asingnado</label>  
                  <Select></Select> 
              
                </div> 

                <div className="admin-duo-input">
                  <label htmlFor="">Categoria</label>  
                  <Select></Select> 
              
                </div> 

                <div className="admin-duo-input">
                  <label htmlFor="">Etiquetas</label>  
                  <Select></Select> 
              
                </div> 

                <div className="admin-duo-input">
                  <label htmlFor="">Autor</label>  
                  <Select></Select> 
                </div> 

              </div>

              </div>

            <div className="admin-filters-footer">
              <button className="bordered">
                  Reset
              </button>


              <button>
                Aplicar
              </button>

            </div>
            </div>

          </div> 
            
            </>
          }
 

        </div>
      </div>
    </>
  );
};

export default QuestionPage;
