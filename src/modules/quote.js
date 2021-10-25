"use strict";
const quote = () => {
  const quoteText = document.querySelector(".quote");
  const author = document.querySelector(".author");
  const btnQuote = document.querySelector(".change-quote");

  const getData = (url) => {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open("GET", url);
      request.addEventListener("readystatechange", () => {
        if (request.readyState !== 4) {
          return;
        }
        if (request.status === 200) {
          const response = JSON.parse(request.responseText);
          resolve(response);
        } else {
          reject(request.statusText);
        }
      });
      request.send();
    });
  };
  const outputPhotos = (data) => {
    const getRandomInRange = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    let number = getRandomInRange(0, 19);
    let arrEn = [];
    let arrRu = [];
    data.forEach((item) => {
      if (item.lang === "en") {
        arrEn.push(item);
      } else if (item.lang === "ru") {
        arrRu.push(item);
      }
    });
    const randomQuote = (lang = "en") => {
      if (lang === "en") {
        btnQuote.addEventListener("click", () => {
          number = getRandomInRange(0, 19);
          quoteText.innerHTML = arrEn[number].quote;
          author.innerHTML = arrEn[number].name;
        });
      } else if (lang === "ru") {
        btnQuote.addEventListener("click", () => {
          number = getRandomInRange(0, 19);
          quoteText.innerHTML = arrRu[number].quote;
          author.innerHTML = arrRu[number].name;
        });
      }
    };
    randomQuote();
    document.addEventListener("click", (event) => {
      let target = event.target;
      if (target.classList.contains("languages-ru")) {
        quoteText.innerHTML = arrRu[number].quote;
        author.innerHTML = arrRu[number].name;
        randomQuote("ru");
      } else if (target.classList.contains("languages-en")) {
        quoteText.innerHTML = arrEn[number].quote;
        author.innerHTML = arrEn[number].name;
        randomQuote("en");
      }
    });
    quoteText.innerHTML = arrEn[number].quote;
    author.innerHTML = arrEn[number].name;
  };
  const urlPhotos = "./dbHeroes.json";

  getData(urlPhotos)
    .then(outputPhotos)
    .catch((error) => console.log(error));

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
    if (target.classList.contains("quote-day")) {
      if (
        quoteText.style.opacity === "" ||
        quoteText.style.opacity === "1" ||
        author.style.opacity === "" ||
        author.style.opacity === "1" ||
        btnQuote.style.opacity === "" ||
        btnQuote.style.opacity === "1"
      ) {
        animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            quoteText.style.opacity = 1 - progress;
            author.style.opacity = 1 - progress;
            btnQuote.style.opacity = 1 - progress;
          },
        });
      } else if (quoteText.style.opacity === "0" || author.style.opacity === "0" || btnQuote.style.opacity === "0") {
        animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            quoteText.style.opacity = 1 * progress;
            author.style.opacity = 1 * progress;
            btnQuote.style.opacity = 1 * progress;
          },
        });
      }
    }
  });
};
export default quote;
