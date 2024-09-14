import React from 'react';
import Chart from 'react-apexcharts';

const BarChart = () => {
  const options = {
    chart: {
      id: 'basic-bar',
      toolbar: { show: false },
      background:"#fff"
    },
    xaxis: {
      categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre'],
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value}`,  // Añade la 'k' a las etiquetas
      },
      min: 0,
      max: 500,  // Máximo valor del eje Y (50k)
    },
    dataLabels: {
      enabled: true,
      position:"top",
      // formatter: (val) => `${val}`,
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
    tooltip: {
      enabled: true,  // Oculta los tooltips
    },
  };

  const series = [
    {
      name: 'Subscripciones',
      data: [280, 100, 100, 380, 150, 300, 350, 300, 80],  // Datos de las barras
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="bar" height="200" />
    </div>
  );
};

export default BarChart;