import Chart from 'react-apexcharts';


const options = {
    chart: {
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '50%',
        },
        track: {
          background: '#f2f2f2', // Color de la parte no completada
          strokeWidth: '100%',
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            fontSize: '20px',
            show: true,
            offsetY:8,
            formatter: function (val) {
              return `${val}%`;
            },
          },
        },
      },
    },
    colors: ['#2cbba8'], // Color de la parte completada (el porcentaje)
  };



const SimpleRadioBar = ({percentage}) => {
    return (
    
    <>
    <Chart
        options={options}
        series={percentage}
        type='radialBar'
        width={165}
        height={150}
    ></Chart>
    </> );
}
 
export default SimpleRadioBar;