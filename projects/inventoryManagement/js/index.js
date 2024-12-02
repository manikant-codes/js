const myCanvas = document.getElementById("myChart");

const inventory = JSON.parse(localStorage.getItem("inventory")) || [];
const orders = JSON.parse(localStorage.getItem("orders")) || [];

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

console.log("temp", temp);

const sellingQty = new Chart(myCanvas, {
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
