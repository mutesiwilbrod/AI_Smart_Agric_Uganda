const ctx = document.getElementById('priceChart');

const labels = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

const data = {
  labels,
  datasets: [
    {
      label: 'Maize',
      data: [1600, 1850, 1700, 1950, 1900, 2150, 2100],
      borderColor: '#1d8f4e',
      backgroundColor: '#1d8f4e',
      tension: 0.35,
      pointRadius: 4,
      borderWidth: 2.5
    },
    {
      label: 'Beans',
      data: [800, 1000, 1100, 1050, 1300, 1600, 1500],
      borderColor: '#2f6fed',
      backgroundColor: '#2f6fed',
      tension: 0.35,
      pointRadius: 4,
      borderWidth: 2.5
    },
    {
      label: 'Rice',
      data: [600, 950, 850, 1150, 1000, 1300, 1250],
      borderColor: '#e8941f',
      backgroundColor: '#e8941f',
      tension: 0.35,
      pointRadius: 4,
      borderWidth: 2.5
    },
    {
      label: 'Banana',
      data: [250, 500, 350, 600, 450, 700, 600],
      borderColor: '#7c5cf0',
      backgroundColor: '#7c5cf0',
      tension: 0.35,
      pointRadius: 4,
      borderWidth: 2.5
    }
  ]
};

new Chart(ctx, {
  type: 'line',
  data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        min: 0,
        max: 2500,
        ticks: { stepSize: 500, color: '#8a948f', font: { size: 11 } },
        grid: { color: '#eef1ef' }
      },
      x: {
        ticks: { color: '#8a948f', font: { size: 11 } },
        grid: { display: false }
      }
    }
  }
});
