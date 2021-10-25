"use strict";
const time = () => {
  let one = document.querySelector(".one");
  let two = document.querySelector(".two");
  let name = document.querySelector(".name");
  let nameOne = document.querySelector(".name-one");
  let slideNext = document.querySelector(".slide-next");
  let slidePrev = document.querySelector(".slide-prev");
  let body = document.querySelector("body");
  let img = document.createElement("img");
  let imgOne = document.createElement("img");
  let count = 5;
  let counter;
  let counterr = 0;
  let timer;
  let dateThree = new Date();
  if (dateThree.getHours() >= 6 && dateThree.getHours() < 12) {
    timer = "morning";
  } else if (dateThree.getHours() >= 12 && dateThree.getHours() < 18) {
    timer = "afternoon";
  } else if (dateThree.getHours() >= 18 && dateThree.getHours() < 24) {
    timer = "evening";
  } else if (dateThree.getHours() >= 0 && dateThree.getHours() < 6) {
    timer = "night";
  }

  const getRandomInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  counterr = getRandomInRange(1, 20);
  if (counterr >= 1 && counterr < 10) {
    counterr = `0${counterr}`;
  }

  body.style.background = `url("") center/cover, rgba(0, 0, 0, 0.5)`;
  //
  body.style.backgroundImage = `url("https://raw.githubusercontent.com/Yauheny-Bychkou/stage1-tasks/assets/images/${timer}/${counterr}.jpg")`;
  body.style.backgroundSize = "cover";
  const nextImage = () => {
    count = count + 1;
    if (count === 21) {
      count = 1;
    }
    if (count >= 1 && count < 10) {
      counter = `0${count}`;
    } else {
      counter = count;
    }

    body.style.backgroundImage = `url("https://raw.githubusercontent.com/Yauheny-Bychkou/stage1-tasks/assets/images/${timer}/${counter}.jpg")`;
  };
  const prevImage = () => {
    count = count - 1;
    if (count === 0) {
      count = 20;
    }
    if (count >= 1 && count < 10) {
      counter = `0${count}`;
    } else {
      counter = count;
    }
    body.style.backgroundImage = `url("https://raw.githubusercontent.com/Yauheny-Bychkou/stage1-tasks/assets/images/${timer}/${counter}.jpg")`;
  };

  slideNext.addEventListener("click", () => {
    nextImage();
  });
  slidePrev.addEventListener("click", () => {
    prevImage();
  });

  if (localStorage.getItem("name")) {
    name.value = localStorage.getItem("name");
  } else {
    name.value = "";
  }
  if (localStorage.getItem("nameOne")) {
    nameOne.value = localStorage.getItem("nameOne");
  } else {
    nameOne.value = "";
  }
  name.setAttribute("placeholder", "[Enter your name]");
  nameOne.setAttribute("placeholder", "[Enter your name]");
  name.addEventListener("input", () => {
    localStorage.setItem("name", name.value);
  });
  nameOne.addEventListener("input", () => {
    localStorage.setItem("nameOne", nameOne.value);
  });

  // localStorage.removeItem("name");
  // localStorage.removeItem("nameOne");
  const updateTime = (l = "en") => {
    let greeting = document.querySelector(".greeting");

    let dateOne = new Date();
    let day;
    let month;
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let d = date.getDay();
    let m = date.getMonth();
    let plusHour;
    let plusMinute;
    let plusSecond;
    if (second >= 0 && second < 10) {
      plusSecond = 0;
    } else {
      plusSecond = "";
    }
    if ((minute >= 0 && minute < 10) || minute === 0) {
      plusMinute = 0;
    } else {
      plusMinute = "";
    }
    if ((hour >= 0 && hour < 10) || hour === 0) {
      plusHour = 0;
    } else {
      plusHour = "";
    }
    if (l === "en") {
      if (dateOne.getDay() === 0) {
        day = "Sunday";
      } else if (dateOne.getDay() === 1) {
        day = "Monday";
      } else if (dateOne.getDay() === 2) {
        day = "Tuesday";
      } else if (dateOne.getDay() === 3) {
        day = "Wednes­day";
      } else if (dateOne.getDay() === 4) {
        day = "Thursday";
      } else if (dateOne.getDay() === 5) {
        day = "Friday";
      } else if (dateOne.getDay() === 6) {
        day = "Saturday";
      }

      if (dateOne.getMonth() === 0) {
        month = "January";
      } else if (dateOne.getMonth() === 1) {
        month = "February";
      } else if (dateOne.getMonth() === 2) {
        month = "March";
      } else if (dateOne.getMonth() === 3) {
        month = "April";
      } else if (dateOne.getMonth() === 4) {
        month = "May";
      } else if (dateOne.getMonth() === 5) {
        month = "June";
      } else if (dateOne.getMonth() === 6) {
        month = "July";
      } else if (dateOne.getMonth() === 7) {
        month = "Augusty";
      } else if (dateOne.getMonth() === 8) {
        month = "September";
      } else if (dateOne.getMonth() === 9) {
        month = "October";
      } else if (dateOne.getMonth() === 10) {
        month = "November";
      } else if (dateOne.getMonth() === 11) {
        month = "December";
      }
      if (hour >= 6 && hour < 12) {
        greeting.innerHTML = "Good morning,";
      } else if (hour >= 12 && hour < 18) {
        greeting.innerHTML = "Good afternoon,";
      } else if (hour >= 18 && hour < 24) {
        greeting.innerHTML = "Good evening,";
      } else if (hour >= 0 && hour < 6) {
        greeting.innerHTML = "Good night,";
      }
      document.addEventListener("click", (event) => {
        let target = event.target;
        if (target.classList.contains("languages-ru")) {
        }
      });
      document.querySelector("date").innerHTML = `${day}, ${month} ${dateOne.getDate()}`;

      document.querySelector("time").innerHTML = `${plusHour}${hour}:${plusMinute}${minute}:${plusSecond}${second}`;
    } else if (l === "ru") {
      if (dateOne.getDay() === 0) {
        day = "Воскресенье";
      } else if (dateOne.getDay() === 1) {
        day = "Понедельник";
      } else if (dateOne.getDay() === 2) {
        day = "Вторник";
      } else if (dateOne.getDay() === 3) {
        day = "Среда";
      } else if (dateOne.getDay() === 4) {
        day = "Четверг";
      } else if (dateOne.getDay() === 5) {
        day = "Пятница";
      } else if (dateOne.getDay() === 6) {
        day = "Суббота";
      }

      if (dateOne.getMonth() === 0) {
        month = "Января";
      } else if (dateOne.getMonth() === 1) {
        month = "Февраля";
      } else if (dateOne.getMonth() === 2) {
        month = "Марта";
      } else if (dateOne.getMonth() === 3) {
        month = "Апреля";
      } else if (dateOne.getMonth() === 4) {
        month = "Мая";
      } else if (dateOne.getMonth() === 5) {
        month = "Июня";
      } else if (dateOne.getMonth() === 6) {
        month = "Июля";
      } else if (dateOne.getMonth() === 7) {
        month = "Августа";
      } else if (dateOne.getMonth() === 8) {
        month = "Сентября";
      } else if (dateOne.getMonth() === 9) {
        month = "Октября";
      } else if (dateOne.getMonth() === 10) {
        month = "Ноября";
      } else if (dateOne.getMonth() === 11) {
        month = "Декабря";
      }
      if (hour >= 6 && hour < 12) {
        greeting.innerHTML = "Доброе утро,";
      } else if (hour >= 12 && hour < 18) {
        greeting.innerHTML = "Добрый день,";
      } else if (hour >= 18 && hour < 24) {
        greeting.innerHTML = "Добрый вечер,";
      } else if (hour >= 0 && hour < 6) {
        greeting.innerHTML = "Доброй ночи,";
      }
      document.addEventListener("click", (event) => {
        let target = event.target;
        if (target.classList.contains("languages-ru")) {
        }
      });
      document.querySelector("date").innerHTML = `${day}, ${dateOne.getDate()} ${month} `;
      name.setAttribute("placeholder", "[Введите ваше имя]");
      document.querySelector("time").innerHTML = `${plusHour}${hour}:${plusMinute}${minute}:${plusSecond}${second}`;
    }
  };
  updateTime();
  const updateTimeOne = () => {
    let greetingOne = document.querySelector(".greeting-one");
    let date = new Date();
    let dateOne = new Date();
    let day;
    let month;
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let plusHour;
    let plusMinute;
    let plusSecond;

    if (second >= 0 && second < 10) {
      plusSecond = 0;
    } else {
      plusSecond = "";
    }
    if ((minute >= 0 && minute < 10) || minute === 0) {
      plusMinute = 0;
    } else {
      plusMinute = "";
    }
    if ((hour >= 0 && hour < 10) || hour === 0) {
      plusHour = 0;
    } else {
      plusHour = "";
    }
    if (dateOne.getDay() === 0) {
      day = "Sunday";
    } else if (dateOne.getDay() === 1) {
      day = "Monday";
    } else if (dateOne.getDay() === 2) {
      day = "Tuesday";
    } else if (dateOne.getDay() === 3) {
      day = "Wednes­day";
    } else if (dateOne.getDay() === 4) {
      day = "Thursday";
    } else if (dateOne.getDay() === 5) {
      day = "Friday";
    } else if (dateOne.getDay() === 6) {
      day = "Saturday";
    }
    if (dateOne.getMonth() === 0) {
      month = "January";
    } else if (dateOne.getMonth() === 1) {
      month = "February";
    } else if (dateOne.getMonth() === 2) {
      month = "March";
    } else if (dateOne.getMonth() === 3) {
      month = "April";
    } else if (dateOne.getMonth() === 4) {
      month = "May";
    } else if (dateOne.getMonth() === 5) {
      month = "June";
    } else if (dateOne.getMonth() === 6) {
      month = "July";
    } else if (dateOne.getMonth() === 7) {
      month = "Augusty";
    } else if (dateOne.getMonth() === 8) {
      month = "September";
    } else if (dateOne.getMonth() === 9) {
      month = "October";
    } else if (dateOne.getMonth() === 10) {
      month = "November";
    } else if (dateOne.getMonth() === 11) {
      month = "December";
    }
    if (hour >= 6 && hour < 12) {
      greetingOne.innerHTML = "Good morning,";
    } else if (hour >= 12 && hour < 18) {
      greetingOne.innerHTML = "Good afternoon,";
    } else if (hour >= 18 && hour < 24) {
      greetingOne.innerHTML = "Good evening,";
    } else if (hour >= 0 && hour < 6) {
      greetingOne.innerHTML = "Good night,";
    }
    document.querySelector(".date-one").innerHTML = `${day}, ${month} ${dateOne.getDate()}`;
    document.querySelector(".time-one").innerHTML = `${plusHour}${hour}:${plusMinute}${minute}:${plusSecond}${second}`;
  };
  updateTimeOne();
  let intervalShow = setInterval(() => {
    updateTime();
  }, 1000);
  let intervalShowOne = setInterval(() => {
    updateTimeOne();
  }, 1000);
  document.addEventListener("click", (event) => {
    let target = event.target;

    if (target.classList.contains("languages-ru")) {
      clearInterval(intervalShow);
      let intervalShowOne = setInterval(() => {
        updateTime("ru");
      }, 1000);
      if (!two.classList.contains("none")) {
        two.classList.add("none");
      }
      one.classList.remove("none");
    } else if (target.classList.contains("languages-en")) {
      if (!one.classList.contains("none")) {
        one.classList.add("none");
      }
      two.classList.remove("none");
    }
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
    if (target.classList.contains("welcome")) {
      if (!one.classList.contains("none")) {
        if (
          document.querySelector(".greeting").style.opacity === "" ||
          document.querySelector(".greeting").style.opacity === "1" ||
          document.querySelector(".name").style.opacity === "" ||
          document.querySelector(".name").style.opacity === "1"
        ) {
          animate({
            duration: 1000,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
              document.querySelector(".greeting").style.opacity = 1 - progress;
              document.querySelector(".name").style.opacity = 1 - progress;
            },
          });
        } else if (
          document.querySelector(".greeting").style.opacity === "0" ||
          document.querySelector(".name").style.opacity === "0"
        ) {
          animate({
            duration: 1000,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
              document.querySelector(".greeting").style.opacity = 1 * progress;
              document.querySelector(".name").style.opacity = 1 * progress;
            },
          });
        }
      } else if (!two.classList.contains("none")) {
        if (
          document.querySelector(".greeting-one").style.opacity === "" ||
          document.querySelector(".greeting-one").style.opacity === "1" ||
          document.querySelector(".name-one").style.opacity === "" ||
          document.querySelector(".name-one").style.opacity === "1"
        ) {
          animate({
            duration: 1000,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
              document.querySelector(".greeting-one").style.opacity = 1 - progress;
              document.querySelector(".name-one").style.opacity = 1 - progress;
            },
          });
        } else if (
          document.querySelector(".greeting-one").style.opacity === "0" ||
          document.querySelector(".name-one").style.opacity === "0"
        ) {
          animate({
            duration: 1000,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
              document.querySelector(".greeting-one").style.opacity = 1 * progress;
              document.querySelector(".name-one").style.opacity = 1 * progress;
            },
          });
        }
      }
    } else if (target.classList.contains("clock")) {
      if (!one.classList.contains("none")) {
        if (
          document.querySelector(".time").style.opacity === "" ||
          document.querySelector(".time").style.opacity === "1" ||
          document.querySelector(".date").style.opacity === "" ||
          document.querySelector(".date").style.opacity === "1"
        ) {
          animate({
            duration: 1000,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
              document.querySelector(".time").style.opacity = 1 - progress;
              document.querySelector(".date").style.opacity = 1 - progress;
            },
          });
        } else if (
          document.querySelector(".time").style.opacity === "0" ||
          document.querySelector(".date").style.opacity === "0"
        ) {
          animate({
            duration: 1000,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
              document.querySelector(".time").style.opacity = 1 * progress;
              document.querySelector(".date").style.opacity = 1 * progress;
            },
          });
        }
      } else if (!two.classList.contains("none")) {
        if (
          document.querySelector(".time-one").style.opacity === "" ||
          document.querySelector(".time-one").style.opacity === "1" ||
          document.querySelector(".date-one").style.opacity === "" ||
          document.querySelector(".date-one").style.opacity === "1"
        ) {
          animate({
            duration: 1000,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
              document.querySelector(".time-one").style.opacity = 1 - progress;
              document.querySelector(".date-one").style.opacity = 1 - progress;
            },
          });
        } else if (
          document.querySelector(".time-one").style.opacity === "0" ||
          document.querySelector(".date-one").style.opacity === "0"
        ) {
          animate({
            duration: 1000,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
              document.querySelector(".time-one").style.opacity = 1 * progress;
              document.querySelector(".date-one").style.opacity = 1 * progress;
            },
          });
        }
      }
    }
  });
};
export default time;
