import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ShadowChart = () => {
    const [chartData] = useState({
        series: [
          {
            name: 'Lecciones',

            data: [3200, 2800, 3500, 4000, 2900, 3600, 4300, 4800]            , // Datos para el gráfico
          }
        ],
        options: {
          chart: {
            type: 'line',
            height: 250,
            toolbar:{
                show:false
              },
        
          },
          grid:{
            show:false
          },
          dataLabels: {
            enabled: false, // Desactiva las etiquetas de datos
          },
          stroke: {
            curve: 'smooth', // Configura el tipo de línea (suave o recta)
          },
          xaxis: {
            categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct'], // Etiquetas en el eje X
          },
          yaxis: {
          },
          tooltip: {
            shared: true,
            intersect: false,
          },
          fill: {
            type: 'gradient', // Usa un gradiente para llenar el área
            gradient: {
            //   shadeIntensity: 1,
            //   opacityFrom: 0.5,
            //   opacityTo: 0.1,
              stops: [0, 100],
            },
          },
        },
      });
    
      return (
        <div>
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="area"
            height={180}
          />
        </div>
      );
    
}
 
export default ShadowChart;