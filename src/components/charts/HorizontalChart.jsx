import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const HorizontalChart = () => {
        const [chartData] = useState({
            series: [
              {
                data: [950, 850, 750, 500, 300, 250, 400], // Valores de 0 a 1000
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
                colors: ['#299CDB'],  // Colores de las barras
              },
              dataLabels: {
                enabled: true,
                position:"center",
                offsetX:-20,
          
                style: {
                  colors: ['white'],  // Color del texto de los datos
                  fontWeight: 600,  // Peso de la fuente
                  fontSize:"14px"
                },
              },
              xaxis: {
                categories: [
                  'Simulador 1',
                  'Simulador 2',
                  'Simulador 3',
                  'Simulador 4',
                  'Simulador 5',
                  'Simulador 6',
                  'Simulador 7',
                ], // Labels cambiados a "Simulador 1" al "Simulador 7"
              
              }
              ,
              yaxis: {
                max: 1000, // Ajuste para que el máximo valor en el eje X sea 1000
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
            <div>
              <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="bar"
                height={250}
              />
            </div>
          );
}
 
export default HorizontalChart;