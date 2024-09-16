import Chart from "react-apexcharts";

const RadialBar = () => {
    const options = {
        chart: {
          type: 'radialBar',
          offsetY: 0,
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            hollow: {
              margin: 15,
              size: '70%',
            },
            track: {
              background: '#e7e7e7',
              strokeWidth: '90%',
              margin: 2, // Espacio entre el gráfico y el track
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                fontSize: '20px',
                show: true,
              }
            }
          }
        },
        fill: {
          colors: ['#20E647']
        },
        labels: ['Progreso']
      };
    
      const series = [65]; // Este es el porcentaje de progreso
    
      return (
          <Chart options={options} series={series} type="radialBar" width={"100%"} />
      );
}
 
export default RadialBar;