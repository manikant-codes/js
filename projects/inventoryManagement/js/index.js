const myCanvas = document.getElementById("myCanvas");
const yearSelect = document.getElementById("year");
const monthSelect = document.getElementById("month");
const inventory = JSON.parse(localStorage.getItem("inventory")) || [];
const orders = JSON.parse(localStorage.getItem("orders")) || [];

(function renderYears() {
  let firstOrderDate =
    localStorage.getItem("firstOrderDate") || new Date().toISOString();

  firstOrderDate = new Date(firstOrderDate);

  const firstOrderYear = firstOrderDate.getFullYear();

  let html = "";

  for (let i = firstOrderYear; i <= new Date().getFullYear(); i++) {
    html += `<option value="${i}">${i}</option>`;
  }

  yearSelect.innerHTML = html;
})();

let myChart;

function renderChart(orders) {
  const labels = inventory.map((inventoryItem) => {
    return inventoryItem.name;
  });

  const soldItemsAndQty = {};

  for (const order of orders) {
    if (soldItemsAndQty[order.name]) {
      soldItemsAndQty[order.name]++;
    } else {
      soldItemsAndQty[order.name] = 1;
    }
  }

  const soldQtys = Object.values(soldItemsAndQty);

  myChart = new Chart(myCanvas, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "# of Votes",
          data: soldQtys,
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
