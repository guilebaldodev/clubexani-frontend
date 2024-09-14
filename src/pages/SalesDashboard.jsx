import AdminHeader from "../components/AdminHeader";
import BarChart from "../components/charts/BarChart";
import DashedLine from "../components/charts/Dashed-Line";
import PieChart from "../components/charts/PieChart";
import "../css/sales-dashboard.css";

const SalesDashboard = () => {
  return (
    <>
      <div className="outlet">
        <AdminHeader></AdminHeader>

        <div className="sales-dashboard-container">
          <div className="sales-dashboard-cards">
            <div className="card">
              <div className="drop-menu-container">
                <img src="/icons/dashboards/3points.png" alt="" />

                <div className="drop-menu-options ">
                  <div className="drop-menu">
                    <ul>
                      <li>
                        Por mes
                        </li>
                      <li>Por semana</li>
                      <li>Por año</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="sales-card-title">
                <h4>Ganancias</h4>
              </div>

              <div className="sales-card-info">
                <div className="text">
                  <h3>$103,550</h3>

                  <p>
                    <span className="span-green">+15.8%</span> vs el mes anterior
                  </p>
                </div>
                <div className="div-img-container">
                  <div className="img green">
                    <img src="/icons/dashboards/coins.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
            <div className="drop-menu-container">
                <img src="/icons/dashboards/3points.png" alt="" />

                <div className="drop-menu-options ">
                  <div className="drop-menu">
                    <ul>
                      <li>
                        Por mes
                        </li>
                      <li>Por semana</li>
                      <li>Por año</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="sales-card-title">
                <h4>Subscripciones</h4>
              </div>

              <div className="sales-card-info">
                <div className="text">
                  <h3>120</h3>

                  <p>
                    <span className="span-green">+10%</span> vs el mes anterior
                  </p>
                </div>
                <div className="div-img-container">
                  <div className="img blue">
                    <img src="/icons/dashboards/tag.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              
            <div className="drop-menu-container">
                <img src="/icons/dashboards/3points.png" alt="" />

                <div className="drop-menu-options ">
                  <div className="drop-menu">
                    <ul>
                      <li>
                        Por mes
                        </li>
                      <li>Por semana</li>
                      <li>Por año</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="sales-card-title">
                <h4>Precio promedio</h4>
              </div>

              <div className="sales-card-info">
                <div className="text">
                  <h3>$450</h3>

                  <p>
                    <span className="span-green">+8.8%</span> vs el mes anterior
                  </p>
                </div>
                <div className="div-img-container">
                  <div className="img grey">
                    <img src="/icons/dashboards/dollar-sign.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              
            <div className="drop-menu-container">
                <img src="/icons/dashboards/3points.png" alt="" />

                <div className="drop-menu-options ">
                  <div className="drop-menu">
                    <ul>
                      <li>
                        Por mes
                        </li>
                      <li>Por semana</li>
                      <li>Por año</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="sales-card-title">
                <h4>Usuarios</h4>
              </div>

              <div className="sales-card-info">
                <div className="text">
                  <h3>1030</h3>

                  <p>
                    <span className="span-red">10.75%</span> vs el mes anterior
                  </p>
                </div>
                <div className="div-img-container">
                  <div className="img orange">
                    <img src="/icons/dashboards/user.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
      
          <div className="sales-dashboard-items">


          <div className="sales-bars">

          <div className="sales-bars-container">
              <div className="sales-bars-titles">
                <h3>Resumen de metricas del negocio</h3>
                <p className="subtitle">Metricas por año</p>
              </div>

              <div className="bars-cards-container">
                <div className="bars-card bars-card-selected">
                  <div className="bars-img-container">
                    <img src="/icons/dashboards/tag-grey.png" alt="" />
                  </div>
                  <p>Subscripciones</p>
                </div>

                <div className="bars-card">
                  <div className="bars-img-container">
                    <img src="/icons/dashboards/bars.png" alt="" />
                  </div>
                  <p>Ganancias</p>
                </div>

                <div className="bars-card">
                  <div className="bars-img-container">
                    <img src="/icons/dashboards/users.png" alt="" />
                  </div>
                  <p>Usuarios</p>
                </div>
              </div>
              <div className="sales-chart-bars">
                <BarChart></BarChart>
              </div>
          </div>
          </div>

          <div className="sales-pie">

          <div className="sales-pie-container">
              <div className="sales-pie-title">
                <h3>Categoria de subscripciones</h3>
              </div>

              <div className="sales-pie-chart">
                <PieChart></PieChart>
              </div>

          </div>

          </div>
      

          <div className="sales-transactions">
              <div className="sales-transactions-container">
                <div className="sales-transactions-titles">
                  <h3>Ultimas transacciones</h3>
                  <p>Hay 58 transacciones este mes</p>
                </div>
                
                <div className="sales-transactions-items">
                  <div className="sale-transaction-item">
                      <div className="sale-transaction-info">
                        <div className="transaction-img-container green">
                        <img src="/icons/dashboards/bank.png" alt="" />
                        </div>
                        <div className="transactions-text">
                        <p>Transeferencia bancaria</p>
                        <p className="subtitle">16 Jun 
                        </p>
                        </div>
                      </div>
                      <div className="transaction-amount">
                        <p>+$399</p>
                      </div>
                  </div>

                  <div className="sale-transaction-item">
                      <div className="sale-transaction-info">
                        <div className="transaction-img-container green">
                        <img src="/icons/dashboards/bank.png" alt="" />

                        </div>
                        <div className="transactions-text">
                        <p>Transferencia bancaria</p>
                        <p className="subtitle">16 Jun 
                        </p>
                        </div>
                      </div>
                      <div className="transaction-amount">
                        <p>+$399</p>
                      </div>
                  </div>



                  <div className="sale-transaction-item">
                      <div className="sale-transaction-info">
                        <div className="transaction-img-container purple">
                        <img src="/icons/dashboards/card.png" alt="" />
                        </div>
                        <div className="transactions-text">
                        <p>Tarjeta</p>
                        <p className="subtitle">16 Jun 
                        </p>
                        </div>
                      </div>
                      <div className="transaction-amount">
                        <p>+$399</p>
                      </div>
                  </div>



                  <div className="sale-transaction-item">
                      <div className="sale-transaction-info">
                        <div className="transaction-img-container grey">
                        <img src="/icons/dashboards/dollar-sign.png" alt="" />
                        </div>
                        <div className="transactions-text">
                        <p>Metodo no reconocido</p>
                        <p className="subtitle">16 Jun 
                        </p>
                        </div>
                      </div>
                      <div className="transaction-amount">
                        <p>+$399</p>
                      </div>
                  </div>


                  <div className="sale-transaction-item">
                      <div className="sale-transaction-info">
                        <div className="transaction-img-container red">
                        <img src="/icons/dashboards/wifi.png" alt="" />
                        </div>
                        <div className="transactions-text">
                        <p>Pago en linea</p>
                        <p className="subtitle">16 Jun 
                        </p>
                        </div>
                      </div>
                      <div className="transaction-amount">
                        <p>+$399</p>
                      </div>
                  </div>





                </div>


              </div>
          </div>


          <div className="sales-dashed">
            <div className="sales-dashed-container">
              <div className="sales-dashed-title">
                <h3>Tendencia de usuarios y subscripciones</h3>
                <p>Tendencia de este año</p>
              </div>

              <div className="sales-dash-chart">
                <DashedLine></DashedLine>
              </div>
            </div>
          </div>

          </div>


        </div>
      </div>
    </>
  );
};

export default SalesDashboard;
