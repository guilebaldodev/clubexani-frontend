import ReactApexChart from 'react-apexcharts';

const DonutChart = () => {
    const options = {
        chart: {
          type: 'donut',
        },
        labels: ['Metodologia', 'Redaccion', 'Pensamiento','Comprension'],
        colors: ['#0056D2', '#1ABC9C', '#EE4266',"#F3B942"],
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
    
      const series = [200, 220, 180,170]; // Datos de ejemplo
    

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        height={'300'}
/>
    </div>
  );
};

export default DonutChart;