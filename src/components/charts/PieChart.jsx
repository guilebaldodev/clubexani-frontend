import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  const options = {
    chart: {
      type: 'donut',
    },
    labels: ['Plan Plus', 'Plan Pro', 'Plan Elite'],
    colors: ['#FF4560', '#00E396', '#008FFB'],
    legend: {
      position: 'bottom',
    //   position: 'left',  // Coloca las leyendas a la izquierda
      horizontalAlign: 'center', // Alineación a la izquierda
      fontSize: '16px', // Controla el tamaño de la letra
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

  const series = [44, 55, 13]; // Datos de ejemplo

  return (
      <ReactApexChart options={options} series={series} type="donut" height='370px' />
  );
};

export default PieChart;