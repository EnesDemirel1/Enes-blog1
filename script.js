//nav bar
const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 150) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

//weather

// const url = "https://api.openweathermap.org/data/2.5/";
// const key = "b508bb361d93e7b582fcf395c33c859d";

// const setQuery = (e) => {
//   if (e.keyCode == "13") getResult(searchBar.value);
// };

// const getResult = (cityName) => {
//   let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=eng `;
//   fetch(query)
//     .then((weather) => {
//       return weather.json();
//     })
//     .then(displayResult);
// };

// const displayResult = (result) => {
//   let city = document.querySelector(".city");
//   city.innerText = `${result.name}, ${result.sys.country}`;

//   let temp = document.querySelector(".temp");
//   temp.innerText = `${Math.round(result.main.temp)} °C`;

//   let desc = document.querySelector(".desc");
//   desc.innerText = result.weather[0].description;

//   let minmax = document.querySelector(".min-max");
//   minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(
//     result.main.temp_max
//   )}°C`;
// };
// const searchBar = document.getElementById("searchBar");
// searchBar.addEventListener("keypress", setQuery);

//slider
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    var selectedBG = panel.style.backgroundImage;
    sectionWrapper = document.getElementsByClassName(
      "menu-bg-weather-slayt"
    )[0];
    sectionWrapper.style.backgroundImage = selectedBG;
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

//aaaa

const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
