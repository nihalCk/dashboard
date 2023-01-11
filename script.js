let navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((li) => {
  li.addEventListener("click", function () {
    navLinks.forEach((li) => li.classList.remove("active"));
    this.classList.add("active");
  });
});

function openNav() {
  document.getElementById("haSis").style.left = "0";
  document.getElementById("haSis").style.top = "0";
}

function closeNav() {
  document.getElementById("haSis").style.left = "-650px";
}


const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["#355688", "#355688", "#355688", "#355688", "#355688", "Orange", "red"],
    
    datasets: [
      {
        backgroundColor: [
          '#355688',
          '#355688',
          '#355688',
          '#355688',
          '#355688',
          '#7286a5',
          '#7286a5'
      ],
      borderRadius: Number.MAX_VALUE,
        barPercentage: 0.6,
        label: "# of Votes",
        data: [5, 8, 10, 8, 7, 5, 7],
        borderWidth: 1,
      },
    ],
  },
  options: {
    
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        display: false,
      },
      x: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});
