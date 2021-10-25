"use strict";
const options = () => {
  const optionsShow = document.querySelector(".options-show");
  const optionsClose = document.querySelector(".options-close");
  const optionsNameLang = document.querySelector(".options-name-lang");
  const languagesEn = document.querySelector(".languages-en");
  const languagesRu = document.querySelector(".languages-ru");
  const optionsNameBg = document.querySelector(".options-name-bg");
  const bgGit = document.querySelector(".bg-git");
  const bgUnsplash = document.querySelector(".bg-unsplash");
  const bgFlickr = document.querySelector(".bg-flickr");
  const options = document.querySelector(".options");
  const optionsNameDisplay = document.querySelector(".options-name-display");
  const clock = document.querySelector(".clock");
  const welcome = document.querySelector(".welcome");
  const weatherWidget = document.querySelector(".weather-widget");
  const quote = document.querySelector(".quote-day");
  const audio = document.querySelector(".audio");
  document.addEventListener("click", (event) => {
    let target = event.target;
    if (target.classList.contains("options-show")) {
      if (!options.classList.contains("flex")) {
        options.classList.add("flex");
      } else {
        options.classList.remove("flex");
      }
    } else if (target.classList.contains("options-close")) {
      options.classList.remove("flex");
    } else if (
      !target.classList.contains("options-close") &&
      !target.classList.contains("options-show") &&
      !target.classList.contains("options") &&
      !target.classList.contains("blocks") &&
      !target.classList.contains("btn") &&
      !target.classList.contains("options-name") &&
      !target.classList.contains("languages") &&
      !target.classList.contains("bg") &&
      !target.classList.contains("display")
    ) {
      if (options.classList.contains("flex")) {
        options.classList.remove("flex");
      }
    } else if (target.classList.contains("languages-ru")) {
      optionsShow.innerHTML = "Настройки";
      optionsClose.innerHTML = "Закрыть";
      optionsNameLang.innerHTML = "Язык";
      languagesEn.innerHTML = "Английский";
      languagesRu.innerHTML = "Русский";
      optionsNameBg.innerHTML = "Фоновый API";
      bgGit.innerHTML = "Гитхаб";
      bgUnsplash.innerHTML = "Анслеш API ";
      bgFlickr.innerHTML = "Филкр API ";
      optionsNameDisplay.innerHTML = "Скрыть блок";
      clock.innerHTML = "Часы и календарь";
      welcome.innerHTML = "Приветсвие";
      weatherWidget.innerHTML = "Виджет погоды";
      quote.innerHTML = "Виджет 'Цитата дня'";
      audio.innerHTML = "Аудиоплеер";
    } else if (target.classList.contains("languages-en")) {
      optionsShow.innerHTML = "Options";
      optionsClose.innerHTML = "Close";
      optionsNameLang.innerHTML = "language";
      languagesEn.innerHTML = "English";
      languagesRu.innerHTML = "Russian";
      optionsNameBg.innerHTML = "Background API";
      bgGit.innerHTML = "GitHub";
      bgUnsplash.innerHTML = "Unsplash API";
      bgFlickr.innerHTML = "Flickr API";
      optionsNameDisplay.innerHTML = "Hide block";
      clock.innerHTML = "Clock and calendar";
      welcome.innerHTML = "Welcome";
      weatherWidget.innerHTML = "Weather widget";
      quote.innerHTML = "Quote of the day widget";
      audio.innerHTML = "Audio player";
    }
  });
};
export default options;
