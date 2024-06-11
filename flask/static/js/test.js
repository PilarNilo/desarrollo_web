Highcharts.chart('container_productos', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Gráfico de Productos'
    },
    series: [{
        name: 'Cantidad',
        data: [
        ]
    }]
});
  

  fetch("http://localhost:5000/get_stats_productos")
  .then((response) => response.json())
  .then((data) => {

    // Get the chart by ID
    const chart = Highcharts.charts.find(
      (chart) => chart && chart.renderTo.id === "container_productos"
    );

    chart.update({
        series: [{
            data: data
        }]
    });

  })
  .catch((error) => console.error("Error:", error));
// segundo grafico
  Highcharts.chart('container_pedidos', {
    chart: {
      type: 'bar',
      width: 600,  // Ajusta según sea necesario
      height: 500  // Ajusta según sea necesario
    },
    title: {
      text: 'Frecuencia de pedidos por comuna',
      style: {
        fontSize: '20px'
      }
    },
    xAxis: {
        categories: []
    },
    yAxis: {
        title: {
            text: 'Frecuencia'
          }
        
      
    },
    series: [{
      name: 'Frecuencia',
      data: []
    }]
  });

  

  fetch("http://localhost:5000/get_stats_pedidos")
  .then((response) => response.json())
  .then((data) => {

    // tomamos los nombres
    let names = data.map((item) => item[0])


    // tomamos las frecuencias
    let frequencies = data.map((item) => item[1])


    // Actualizar el gráfico con los nuevos datos names y frequencies

    // Get the chart by ID
    const chart = Highcharts.charts.find(
      (chart) => chart && chart.renderTo.id === "container_pedidos"
    );

    chart.update({
        xAxis: {
            categories: names
        },
        series: [{
            data: frequencies
        }]
    });

  })
  .catch((error) => console.error("Error:", error));