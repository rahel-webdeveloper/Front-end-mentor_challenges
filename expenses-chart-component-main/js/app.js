let chartData = [
  {
    day: "mon",
    amount: 17.45,
    minu: 15.45,
  },
  {
    day: "tue",
    amount: 34.91,
    minu: 30.91,
  },
  {
    day: "wed",
    amount: 52.36,
    highChart: "highChart",
    minu: 45.7,
  },
  {
    day: "thu",
    amount: 31.07,
    minu: 27.3,
  },
  {
    day: "fri",
    amount: 23.39,
    minu: 20.9,
  },
  {
    day: "sat",
    amount: 43.28,
    minu: 37.78,
  },
  {
    day: "sun",
    amount: 25.48,
    minu: 22.7,
  },
];

const myChart = document.querySelector(".myCharts");

let rederChart = () => {
  let chart = "";
  let totalThisWeek = 0;

  chartData.forEach((charts) => {
    chart += `  
      <div>
        <span class="amount">${charts.amount}</span>
        <div id = "${charts.highChart}" class = "chart" style = " height: ${
      charts.amount - charts.minu
    }rem"></div>
        <p class="day">${charts.day}</p>
      </div>
 `;
    totalThisWeek += charts.amount;
  });
  myChart.innerHTML = chart;
  document.getElementById("toThisWeek").innerText = "$" + totalThisWeek;

  let chartElements = document.querySelectorAll(".chart");

  chartElements.forEach((chart, index) => {
    chart.addEventListener("mouseover", () => {
      const amountElement = document.querySelectorAll(".amount")[index];

      amountElement.style.opacity = 1;
    });

    chart.addEventListener("mouseout", () => {
      const amountElement = document.querySelectorAll(".amount")[index];

      amountElement.style.opacity = 0;
    });
  });
};
rederChart();
