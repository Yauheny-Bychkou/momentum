"use strict";
const weather = () => {
  const weather = document.querySelector(".weather");
  const weatherIcon = document.querySelector(".weather-icon");
  const temperature = document.querySelector(".temperature");
  const weatherDescription = document.querySelector(".weather-description");
  const city = document.querySelector(".city");
  const wind = document.querySelector(".wind");
  const humidity = document.querySelector(".humidity");
  let lang = "en";
  let cityy = "Minsk";
  if (localStorage.getItem("city")) {
    city.value = localStorage.getItem("city");
  } else {
    city.value = "Minsk";
  }

  async function getWeather(city, l) {
    if (!city) {
      city = cityy;
    }
    if (!l) {
      l = lang;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${l}&appid=580b1eb540d619a2b3c0b645b1cc4171&units=metric`;
    const res = await fetch(url);
    if (res.status === 200) {
      const data = await res.json();
      temperature.textContent = `${Math.floor(data.main.temp)}°C`;
      weatherDescription.textContent = data.weather[0].description;
      weatherIcon.classList.add(`owf-${data.weather[0].id}`);
      if (l === "ru") {
        wind.textContent = `Скорость ветра: ${Math.floor(data.wind.speed)} м/с`;
        humidity.textContent = `Влажность: ${data.main.humidity} %`;
      } else if (l === "en") {
        wind.textContent = `Wind speed: ${Math.floor(data.wind.speed)} m/s`;
        humidity.textContent = `Humidity: ${data.main.humidity} %`;
      }
    } else if (res.status === 404) {
      temperature.innerHTML = `Error! City not found for ${city}`;
      weatherDescription.innerHTML = "";
      wind.innerHTML = "";
      humidity.innerHTML = "";
      weatherIcon.classList.forEach((item, i) => {
        if (i !== 0 && i !== 1) {
          weatherIcon.classList.remove(item);
        }
      });
    }
  }
  document.addEventListener("click", (event) => {
    let target = event.target;
    if (target.classList.contains("languages-ru")) {
      if (city.value === "Minsk" || city.value === "minsk") {
        getWeather("Минск", "ru");
        city.value = "Минск";
      } else if (city.value !== "Minsk" || city.value !== "minsk") {
        getWeather(city.value, "ru");
      }
    } else if (target.classList.contains("languages-en")) {
      if (city.value === "Минск" || city.value === "минск") {
        getWeather("Minsk", "en");
        city.value = "Minsk";
      } else if (city.value !== "Минск" || city.value !== "минск") {
        getWeather(city.value, "en");
      }
    }
  });
  getWeather(localStorage.getItem("city"));
  city.addEventListener("change", () => {
    localStorage.setItem("city", city.value);
    getWeather(localStorage.getItem("city"));
    weatherIcon.classList.forEach((item, i) => {
      if (i === 2) {
        weatherIcon.classList.remove(item);
      }
    });
  });
  const animate = ({ timing, draw, duration }) => {
    let start = performance.now();

    requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) {
        timeFraction = 1;
      }
      // вычисление текущего состояния анимации
      let progress = timing(timeFraction);

      draw(progress); // отрисовать её

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  };
  document.addEventListener("click", (event) => {
    let target = event.target;
    if (target.classList.contains("weather-widget")) {
      if (weather.style.opacity === "" || weather.style.opacity === "1") {
        animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            weather.style.opacity = 1 - progress;
          },
        });
      } else if (weather.style.opacity === "0") {
        animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            weather.style.opacity = 1 * progress;
          },
        });
      }
    }
  });
};
// localStorage.removeItem("city");
export default weather;
