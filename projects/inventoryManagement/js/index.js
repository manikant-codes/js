const myCanvas = document.getElementById("myChart");
const yearSelect = document.getElementById("year");
const monthSelect = document.getElementById("month");
const inventory = JSON.parse(localStorage.getItem("inventory")) || [];
const orders = JSON.parse(localStorage.getItem("orders")) || [];

let myChart;

function renderChart(orders) {
  const labels = inventory.map((value) => {
    return value.name;
  });

  const temp = {};

  for (const item of orders) {
    if (temp[item.name]) {
      temp[item.name]++;
    } else {
      temp[item.name] = 1;
    }
  }

  myChart = new Chart(myCanvas, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "# of Votes",
          data: Object.values(temp),
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

(function renderYears() {
  let firstOrderDate = localStorage.getItem("firstOrderDate") || "";
  firstOrderDate = new Date(firstOrderDate);

  const firstYear = firstOrderDate.getFullYear();

  let html = "";

  for (let i = firstYear; i <= new Date().getFullYear(); i++) {
    html += `<option value="${i}">${i}</option>`;
  }

  yearSelect.innerHTML = html;
})();

function filterOrders() {
  const selectedYear = Number(yearSelect.value);
  const selectedMonth = Number(monthSelect.value);

  const orders = JSON.parse(localStorage.getItem("orders"));

  const filterdOrders = orders.filter((order, index) => {
    const orderDate = new Date(order.orderDate);
    if (
      orderDate.getFullYear() === selectedYear &&
      orderDate.getMonth() === selectedMonth
    ) {
      return true;
    }
    return false;
  });
  myChart.destroy();
  renderChart(filterdOrders);
}

renderChart(orders);
