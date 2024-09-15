import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const SimpleLineChart = () => {
    const [chartData] = useState({
        series: [
          {
            name: 'Cuestionarios',
            data:[2200, 3200, 2500, 3700, 3000, 4300, 3400, 4600]

        }
        ],
        options: {
          chart: {
            type: 'line',
            height: 350,
            toolbar: {
              show: false, // Oculta la barra de herramientas
            },
          },
          grid: {
            show: false, // Oculta la rejilla
          },
          dataLabels: {
            enabled: false, // Desactiva las etiquetas de datos
          },
          stroke: {
            curve: 'straight', // Configura el tipo de línea (suave o recta)
            width: 3, // Grosor de la línea
            colors: ['#FF5733'], // Color de la línea
          },
          xaxis: {
            categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago'], // Etiquetas en el eje X
          },
          yaxis: {
            max: 5000, // Valor máximo del eje Y
            title: {
              text: 'Ventas', // Título del eje Y
            },
          },
          tooltip: {
            shared: true,
            intersect: false,
          },
          colors: ['#FF5733'], // Color del gráfico
        },
      });
    
      return (
        <div>
          <ReactApexChart
            options={chartData.options}
            series={chartData.series}
            type="line"
            height={180}
          />
        </div>
      );
    
}
 
export default SimpleLineChart;