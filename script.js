const ctx = document.getElementById('myChart');
let chart;

const data = {
  labels: [],
  datasets: [{
    label: 'Value',
    data: [],
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1,
    fill: false,
  }],
};

const config = {
  type: 'line',
  data: data,
  options: {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Value',
        },
      },
    },
    animation: false,
  },
};

chart = new Chart(ctx, config);

function addData() {
  const newData = Math.random() * 100;
  chart.data.labels.push(chart.data.labels.length);
  chart.data.datasets[0].data.push(newData);
  chart.update(); // Update the chart
}

setInterval(addData, 1000);
