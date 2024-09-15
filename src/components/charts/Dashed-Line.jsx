import ReactApexChart from "react-apexcharts";

const DashedLine = () => {
    const options = {
        chart: {
          type: 'line',
          height: 320,
        },
        stroke: {
          width: [4, 4], // Grosor de las líneas
          dashArray: [0, 8], // La primera línea es continua (0), la segunda es punteada (8)
        },
        
        series: [
          {
            name: 'Línea normal',
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148], // Datos de la primera línea
          },
          {
            name: 'Línea punteada',
            data: [23, 33, 43, 63, 53, 73, 83, 93, 123], // Datos de la segunda línea
          },
        ],
        markers: {
          size: 4, // Tamaño de los puntos en las líneas
        },
        colors: ['#83D4FE', '#FF4560'], // Colores para las líneas
        xaxis: {
          categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep'], // Etiquetas del eje X
        },
        legend: {
          position: 'bottom', 
          offsetY: 10,  
        },
        // responsive: [
        //   {
        //     breakpoint: 480,
        //     options: {
        //       chart: {
        //         width: '100%',
        //       },
        //       legend: {
        //         position: 'bottom',
        //       },
        //     },
        //   },
        // ],
      };


const series = [
    {
      name: 'Usuarios',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148], // Datos para la línea normal
    },
    {
      name: 'Subscripciones',
      data: [23, 33, 43, 63, 53, 73, 83, 93, 123], // Datos para la línea punteada
    },
  ];
  
      
return (


    <ReactApexChart options={options} series={series} type="line" height={'300'} />


);

      
}
 
export default DashedLine;