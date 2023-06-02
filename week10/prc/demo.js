let xVals = ["Italy", "France", "Spain", "USA", "Argentina"];
let yVals = [55, 49, 44, 25, 42];
let barColors = ["red", "green", "blue", "orange", "brown"];

new Chart("my-chart-1", {
  type: "bar",
  data: {
    labels: xVals,
    datasets: [
      {
        backgroundColor: barColors,
        data: yVals,
      },
    ],
  },
  options: {
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "World wide chart",
      },
    },
  },
});

new Chart("my-chart-2", {
  type: "line",
  data: {
    datasets: [
      {
        label: "# of votes",
        data: [
          { x: "2015-12-25", y: 45 },
          { x: "2016-12-25", y: 64 },
          { x: "2017-12-25", y: 33 },
          { x: "2018-12-25", y: 39 },
          { x: "2019-12-25", y: 50 },
        ],
      },
    ],
  },
});

let xVals2 = ["Italy", "France", "Spain", "USA", "Argentina"];
let yVals2 = [55, 49, 44, 25, 42];
let barColors2 = ["red", "green", "blue", "orange", "brown"];

new Chart("my-chart-3", {
  type: "pie",
  data: {
    datasets: [
      {
        label: "eje ejiskj",
        data: [
          { x: "43", y: 27 },
          { x: "51", y: 26 },
          { x: "63", y: 22 },
          { x: "49", y: 24 },
          { x: "56", y: 27 },
        ],
      },
    ],
  },
});
