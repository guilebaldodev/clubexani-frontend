import UserHeader from "./userHeader";
import '../css/progress-Dashboard.css'
import RadialBar from "./charts/RadialBar";
import SimpleRadioBar from "./charts/SimpleDonutChart";
import ProgressChart from "./charts/ProgressChart";
import Chart from 'react-apexcharts';
import { useState } from "react";



const options = {
    chart: {
      type: 'donut',
    },
    labels: ['Aciertos','Errores'],
    colors: ['#1ABC9C', '#EE4266'],
    plotOptions: {
        pie: {
          dataLabels: {
            offset: -20, // Ajusta la posición de las etiquetas dentro del pastel
          }
        }
      },
    legend: {
      position: 'bottom',
    //   position: 'left',  // Coloca las leyendas a la izquierda
      horizontalAlign: 'center', // Alineación a la izquierda
      fontSize: '13px', // Controla el tamaño de la letra
      itemMargin: {
        vertical: 5,  // Margen entre los items de la leyenda
      },
      offsetY: 10,  // Desplaza las leyendas hacia abajo, aumentando la separación

      markers: {
        width: 12,  // Tamaño del indicador de color en la leyenda
        height: 12,
      },

    },
 
  };

  const series = [200, 120]; // Datos de ejemplo


const UserProgressDashboard = () => {
    const [chartData] = useState({
        series: [
          {
            data: [100,90,55,115,95], // Valores de 0 a 1000
          },
        ],
        options: {
          chart: {
            type: 'bar',
            toolbar:{
              show:false
            },
          },

          plotOptions: {
            bar: {
              horizontal: true,
              borderRadius:3,
              borderRadiusApplication:'end',
              columnWidth: '40%',
              background:"#fff",
              dataLabels: {
                position: 'top'
              }
            },

          },
          grid:{
            show:false
          },
          fill: {
            opacity: 0.8,
            colors: ['#696CFF'],  // Colores de las barras
          },
          dataLabels: {
            enabled: true,
            position:"center",
            offsetX:-15,
      
            style: {
              colors: ['white'],  // Color del texto de los datos
              fontWeight: 600,  // Peso de la fuente
              fontSize:"14px"
            },
          },
          xaxis: {
            categories: [
            'Simulador 3',
            'Simulador 3',
            'Simulador 2',
            'Simulador 1',
            'Simulador 6',
            ], // Labels cambiados a "Simulador 1" al "Simulador 7"
          
          }
          ,
          yaxis: {
            max: 120, // Ajuste para que el máximo valor en el eje X sea 1000
            labels: {
              style: {
                colors: ['black'], // Colores personalizados para cada categoría
                fontSize: '13px', // Tamaño de fuente para las categorías
              },
            },
          },
        },
      });
    return ( 
    <>
        <div className="colum-container">
            <UserHeader></UserHeader>
            <div className="user-progress-container">
                <div className="user-progress">

                <div className="user-banner">
                    <div className="user-banner-container">
                        <div className="banner-texts">
                            <h3>Bienvenido Guilebaldo!</h3>
                            <p>Aquí podrás revisar tu progreso detallado, mantén el ritmo y alcanza tus objetivos académicos con éxito.</p>
                            <button>Continuar</button>
                        </div>
                        <div className="banner-img-container">
                            <img src="/icons/dashboards/user-man.png" alt="" />
                        </div>
                    </div>
                </div>


            <div className="content-dashboard-card">
                <div className="content-img-dashboard blue">
                    <img src="/icons/dashboards/content-question.png" alt="" />
                </div>
                <h3>Plan Plus</h3>
                <p>Vencimiento 11/03/2025</p>
            </div>

            <div className="progress-cards-container">
                <div className="progress-card">
                    <div className="progress-card-text">
                        <p>Total de simuladores</p>
                        <h3>7</h3>
                    </div>
                    <div className="progress-card-chart">
                        <SimpleRadioBar percentage={[50]}></SimpleRadioBar>
                    </div>
                </div>
                <div className="progress-card">
                    <div className="progress-card-text">
                        <p>Total de lecciones</p>
                        <h3>150</h3>
                    </div>
                    <div className="progress-card-chart">
                        <SimpleRadioBar percentage={[60]}></SimpleRadioBar>
                    </div>
                </div>
                <div className="progress-card">
                    <div className="progress-card-text">
                        <p>Comprension lectora</p>
                        <h3>150</h3>
                    </div>
                    <div className="progress-card-chart">
                        <SimpleRadioBar percentage={[70]}></SimpleRadioBar>
                    </div>
                </div>
                <div className="progress-card">
                    <div className="progress-card-text">
                        <p>Metodologia</p>
                        <h3>150</h3>
                    </div>
                    <div className="progress-card-chart">
                        <SimpleRadioBar percentage={[99]}></SimpleRadioBar>
                    </div>
                </div>
                <div className="progress-card">
                    <div className="progress-card-text">
                        <p>Pensamiento Matematico</p>
                        <h3>150</h3>
                    </div>
                    <div className="progress-card-chart">
                        <SimpleRadioBar percentage={[40]}></SimpleRadioBar>
                    </div>
                </div>
                <div className="progress-card">
                    <div className="progress-card-text">
                        <p>Redaccion indirecta</p>
                        <h3>150</h3>
                    </div>
                    <div className="progress-card-chart">
                        <SimpleRadioBar percentage={[1]}></SimpleRadioBar>
                    </div>
                </div>
            </div>

            <div className="progress-bars-container">
                <div className="progress-bars-titles">
                    <h3>Horas invertidas en tu eduacion</h3>
                    <p>Continua esforzandote</p>
                </div>

                <div className="progress-bars-chart">
                    <ProgressChart></ProgressChart>
                </div>
            </div>

            <div className="progress-horizontal-container">
                <div className="progress-horizontal-titles">
                    <h3>Puntuaje de los simuladores</h3>
                    <p>Basado en los ultimos 5 puntajes de simuladores</p>
                </div>

                <div className="progress-horizontal-chart">
                <Chart options={chartData.options} series={chartData.series} type="bar" height="250" />
                </div>
            </div>

            <div className="progress-donut-container">
            <div className="progress-horizontal-titles">
                    <h3>Resultado</h3>
                    <p>Basado en los ultimos 5 simuladores</p>
            </div>

            <div className="progress-donut-chart">
            <Chart options={options} series={series} type="pie" height="270" />
            </div>
            </div>
                </div>
            </div>
        </div>

    
    

    </> );
}
 
export default UserProgressDashboard;