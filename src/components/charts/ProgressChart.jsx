import Chart from 'react-apexcharts';

const ProgressChart = () => {
  const options = {
    chart: {
      id: 'basic-bar',
      toolbar: { show: false },
      background:"#fff"
    },
    xaxis: {
      categories: ['Simuladores', 'Lecciones','Cuestionarios'],
    },
    yaxis: {
      labels: {
        formatter: (val) => `${val} hrs`,
      
    },
      min: 0,
      max: 10,  // Máximo valor del eje Y (50k)
    },
    dataLabels: {
      enabled: true,
      position:"top",
      formatter: (val) => `${val}`,
      offsetY:-22,

      style: {
        colors: ['black'],  // Color del texto de los datos
        fontWeight: 600,  // Peso de la fuente
        fontSize:"14px"
      },
    },
    plotOptions: {
      bar: {
        borderRadius:3,
        borderRadiusApplication:'end',
        columnWidth: '45%',
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
    tooltip: {
      enabled: true,  // Oculta los tooltips
    },
  };

  const series = [
    {
      name: 'Subscripciones',
      data: [5,1,5],  // Datos de las barras
    },
  ];

  return (
      <Chart options={options} series={series} type="bar" height="100%" />
  );
};

export default ProgressChart;