import { useState } from "react";
import AdminHeader from "../components/AdminHeader";
import "../css/admin-question.css";
import Select from "react-select";
import { Link } from "react-router-dom";

const AdminSubscriptionsPage = () => {
  const [filters, setFilters] = useState(false);
  const [menu, setmenu] = useState(false);

  return (
    <>
    <div className="outlet">
      <AdminHeader></AdminHeader>
      <div className="admin-question-container">
        <div className="admin-question-title">
          <h2>Lista de subscripciones</h2>
        </div>

        <div className="admin-question-cards">
        <div className="admin-question-card">
            <div className="question-text">
              <p>Subscripciones activas</p>
              <h4>6</h4>
            </div>
            <div className="admin-question-img">
              <div className="question-img">
                <img className="fill-blue" src="/icons/admin-icons/bill.png" alt="" />
              </div>
            </div>
          </div>
         
          <div className="admin-question-card">
            <div className="question-text">
              <p>Subscripciones este mes</p>
              <h4>450</h4>
            </div>
            <div className="admin-question-img">
              <div className="question-img">
                <img src="/icons/admin-icons/calendar.png" alt="" />
              </div>
            </div>
          </div>
          <div className="admin-question-card">
            <div className="question-text">
              <p>Subscripcion mas comprada</p>
              <h4>Pro</h4>
            </div>
            <div className="admin-question-img">
              <div className="question-img">
                <img src="/icons/admin-icons/best-icon.png" alt="" />
              </div>
            </div>
          </div>
          <div className="admin-question-card">
            <div className="question-text">
              <p>Subscripciones totales</p>
              <h4>1050</h4>
            </div>
            <div className="admin-question-img">
              <div className="question-img">
                <img src="/icons/admin-icons/bill2.png" alt="" />
              </div>
            </div>
          </div>

        </div>
        <div className="admin-table-container">
          <div className="admin-table-header">
            <div className="admin-table-right">
              <div className="input-container">
                <img src="/icons/admin-icons/search.svg" alt="" />
                <input placeholder="Buscar..." type="text" />
              </div>
            </div>

            <div className="admin-table-left">
              <button
                onClick={() => {
                  setFilters(true);
                }}
                className="bordered"
              >
                <img src="/icons/admin-icons/filters.png" alt="" />
                Filtros
              </button>
              <button>
                <img src="/icons/admin-icons/add-icon.png" alt="" />
                Añadir
              </button>
            </div>
          </div>

          <div className="admin-table">
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Usuario</th>
                  <th>Correo electronico</th>
                  <th>Metodo</th>
                  <th>Plan</th>
                  <th className="th-center">Pagado</th>
                  <th className="th-center">Fecha</th>
                  <th className="th-center"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Guilebaldo Vargas</td>
                  <td>guilebaldo@gmail.com</td>
                  <td>Tarjeta</td>
                  <td className="color-td gold">
                    <span>Elite</span>
                  </td>
                  <td className="td-center">$450</td>
                  <td className="td-center">
                    16/10/2024
                  </td>

                  <td className="td-center">
                    
                    <div className="container">
                      <img
                        onClick={() => {
                          setmenu(!menu);
                        }}
                        src="/icons/admin-icons/3points.png"
                        alt=""
                      />



                      <div className={`menu ${menu ? "" : "none"}`}>
                        <Link>Eliminar</Link>
                        <Link>Editar</Link>
                        <Link>Ver</Link>
                        <Link>Añadir a examen</Link>
                        <Link>Añadir a cuestionario</Link>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Guilebaldo Vargas</td>
                  
                  <td>guilebaldo@gmail.com</td>
                  <td>Tarjeta</td>
                  <td className="color-td gold">
                    <span>Elite</span>
                  </td>
                  <td className="td-center">$450</td>
                  <td className="td-center">
                    16/10/2024
                  </td>


                  <td>
                    <div className="container">
                      <img src="/icons/admin-icons/3points.png" alt="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Guilebaldo Vargas</td>
                  <td>guilebaldo@gmail.com</td>
                  <td>Deposito</td>
                  <td className="color-td blue">
                    <span>Plus</span>
                  </td>
                  
                  <td className="td-center">$450</td>
                  <td className="td-center">
                    16/10/2024
                  </td>

                  <td>
                    <div className="container">
                      <img src="/icons/admin-icons/3points.png" alt="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Guilebaldo Vargas</td>
                  
                  <td>alexa@gmail.com</td>
                 
                 <td>Oxxo</td>
                  <td className="color-td blue">
                    <span>Plus</span>
                  </td>

                  <td className="td-center">$450</td>
                  <td className="td-center">
                    16/10/2024
                  </td>

                  <td>
                    <div className="container">
                      <img src="/icons/admin-icons/3points.png" alt="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Guilebaldo Vargas</td>
                  
                  <td>alexa@gmail.com</td>

                  <td>Deposito</td>
                  <td className="color-td blue">
                    <span>Plus</span>
                  </td>
                  
                  <td className="td-center">$450</td>
                  <td className="td-center">
                    16/10/2024
                  </td>



                  <td>
                    <div className="container">
                      <img src="/icons/admin-icons/3points.png" alt="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Guilebaldo Vargas</td>
                  
                  <td>alexa@gmail.com</td>
                  
                  
                  <td>Tarjeta</td>
                  <td className="color-td green">
                    <span>Pro</span>
                  </td>
      
                  <td className="td-center">$450</td>
                  <td className="td-center">
                    16/10/2024
                  </td>

                  <td>
                    <div className="container">
                      <img src="/icons/admin-icons/3points.png" alt="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Guilebaldo Vargas</td>
                  
                  <td>guilebaldo@gmail.com</td>
                  
                  <td>Tarjeta</td>
                  <td className="color-td green">
                    <span>Pro</span>
                  </td>
      
                  <td className="td-center">$450</td>
                  <td className="td-center">
                    16/10/2024
                  </td>


                  <td>
                    <div className="container">
                      <img src="/icons/admin-icons/3points.png" alt="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Guilebaldo Vargas</td>
                  <td>guilebaldo@gmail.com</td>

                  <td>Tarjeta</td>
                  <td className="color-td green">
                    <span>Pro</span>
                  </td>
      
                  <td className="td-center">$450</td>
                  <td className="td-center">
                    16/10/2024
                  </td>


                  <td>
                    <div className="container">
                      <img src="/icons/admin-icons/3points.png" alt="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Guilebaldo Vargas</td>
                  
                  <td>guilebaldo@gmail.com</td>

                  <td>Tarjeta</td>
                  <td className="color-td gold">
                    <span>Elite</span>
                  </td>
                  <td className="td-center">$450</td>
                  <td className="td-center">
                    16/10/2024
                  </td>

                  <td>
                    <div className="container">
                      <img src="/icons/admin-icons/3points.png" alt="" />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Guilebaldo Vargas</td>
                  
                  <td>guilebaldo@gmail.com</td>
                  
                  <td>Tarjeta</td>
                  <td className="color-td gold">
                    <span>Elite</span>
                  </td>
                  <td className="td-center">$450</td>
                  <td className="td-center">
                    16/10/2024
                  </td>
 

                  <td>
                    <div className="container">
                      <img src="/icons/admin-icons/3points.png" alt="" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="admin-table-footer">
              <div className="admin-footer-left">
                <p>Preguntas por pagina: 10</p>
              </div>
              <div className="admin-footer-right">
                <p>11-20 de 20</p>
                <div className="footer-button rotate">
                  <img src="/icons/admin-icons/arrow.png" alt="" />
                </div>

                <div className="footer-button ">
                  <img src="/icons/admin-icons/arrow.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {filters == true && (
          <>
            <div className="overlay">
              <div className="admin-filters-container">
                <div className="admin-filter-content">
                  <div className="admin-filter-header">
                    <h3>Filtros</h3>
                    <img
                      onClick={() => {
                        setFilters(false);
                      }}
                      src="/icons/admin-icons/x.png"
                      alt=""
                    />
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
                  <button className="bordered">Reset</button>

                  <button>Aplicar</button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  </>


  );
};

export default AdminSubscriptionsPage;
