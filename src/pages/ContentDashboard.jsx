import AdminHeader from '../components/AdminHeader';
import AdminTable from '../components/AdminTable';
import DonutChart from '../components/charts/DonutChart';
import HorizontalChart from '../components/charts/HorizontalChart';
import ShadowChart from '../components/charts/ShadowChart';
import SimpleLineChart from '../components/charts/SimpleLineChart';
import '../css/content-dashboard.css'

const ContentDashboard = () => {
    return ( <>
    
    <div className="outlet">

    <AdminHeader></AdminHeader>

    <div className="content-dashboard-container">
        <div className="content-dashboard-cards">
            <div className="content-dashboard-card">
                <div className="content-img-dashboard blue">
                    <img src="/icons/dashboards/content-question.png" alt="" />
                </div>
                <h3>850</h3>
                <p>Preguntas totales</p>
            </div>

            <div className="content-dashboard-card">
                <div className="content-img-dashboard green">
                    <img src="/icons/dashboards/content-book.png" alt="" />
                </div>
                <h3>150</h3>
                <p>Lecciones totales</p>
            </div>
            <div className="content-dashboard-card">
                <div className="content-img-dashboard orange">
                    <img src="/icons/dashboards/content-test.png" alt="" />
                </div>
                <h3>150</h3>
                <p>Cuestionarios totales</p>
            </div>
            <div className="content-dashboard-card red">
                <div className="content-img-dashboard red">
                    <img src="/icons/dashboards/content-writing.svg" alt="" />
                </div>
                <h3>7</h3>
                <p>Simuladores totales</p>
            </div>

        </div>

        <div className="content-dashboard-items">
            <div className="horizontal-bar">
                <div className="horizontal-bar-container">
                    <div className="horizontal-bar-titles">
                        <h3>Frecuencia de uso de los simuladores</h3>
                        <p>Frecuencia totales este año</p>
                    </div>

                    <div className="horizontal-bar-chart">
                        <HorizontalChart></HorizontalChart>
                    </div>

                </div>
            </div>

            <div className="content-pie">
                <div className="content-pie-container">
                    <div className="content-pie-title">
                        <h3>Categoria de preguntas</h3>
                        <div className="content-pie-chart">
                            <DonutChart></DonutChart>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-line">
                <div className="content-line-container">
                    <div className="content-line-title">
                        <h3>Total de lecciones tomadas</h3>
                        <h2>13,4k</h2>
                    </div>

                    <div className="content-line-chart">
                            <ShadowChart></ShadowChart>
                    </div>

                </div>
            </div>

            <div className="content-line">
                <div className="content-line-container">
                    <div className="content-line-title">
                        <h3>Total de cuestionarios tomados</h3>
                        <h2>15,4k</h2>
                    </div>

                    <div className="content-line-chart">
                            <SimpleLineChart></SimpleLineChart>
                    </div>

                </div>
            </div>


            <div className="content-table">
                <div className="content-table-container">
                    <div className="content-table-title">
                        <h3>Ultimas preguntas agregadas</h3>
                    </div>

                    <div className="content-table-content">
                        <AdminTable></AdminTable>
                    </div>

                </div>
            </div>




        </div>


    </div>
    
    </div>
    </> );
}
 
export default ContentDashboard;