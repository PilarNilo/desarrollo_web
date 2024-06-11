// Highcharts.chart('container_productos', {
//     chart: {
//         type: 'pie'
//     },
//     title: {
//         text: 'Gráfico de Productos'
//     },
//     series: [{
//         name: 'Cantidad',
//         data: [
//         ]
//     }]
// });
  

//   fetch("http://localhost:5000/get_stats_productos")
//   .then((response) => response.json())
//   .then((data) => {

//     // Get the chart by ID
//     const chart = Highcharts.charts.find(
//       (chart) => chart && chart.renderTo.id === "container_productos"
//     );

//     chart.update({
//         series: [{
//             data: data
//         }]
//     });

//   })
//   .catch((error) => console.error("Error:", error));