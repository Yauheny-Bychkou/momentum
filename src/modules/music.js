"use strict";
const music = () => {
  const playerCont = document.querySelector(".player");
  const play = document.querySelector(".play");
  const playNext = document.querySelector(".play-next");
  const playPrev = document.querySelector(".play-prev");
  const rangeProgress = document.querySelector(".range-progress");
  const rangeVolume = document.querySelector(".range-volume");
  let player = document.createElement("audio");
  let list = document.querySelector(".play-list");
  let itemOne = document.querySelector(".li-one");
  let itemTwo = document.querySelector(".li-two");
  let itemThree = document.querySelector(".li-three");
  let itemFour = document.querySelector(".li-four");
  let currentMinutes = document.querySelector(".current-minutes");
  let currentSeconds = document.querySelector(".current-seconds");
  let duration = document.querySelector(".duration");
  let nameMusic = document.querySelector(".name-music");
  let volumeText = document.querySelector(".volume");
  let volumeSvg = document.querySelector(".volume-svg");
  let playSmallOne = document.querySelector(".play-small-one");
  let playSmallTwo = document.querySelector(".play-small-two");
  let playSmallThree = document.querySelector(".play-small-three");
  let playSmallFour = document.querySelector(".play-small-four");

  duration.innerHTML = "00:39";
  nameMusic.innerHTML = "Aqua Caelestis";
  rangeProgress.value = 0;
  rangeVolume.value = 100;
  itemOne.innerHTML = "Aqua Caelestis";
  itemTwo.innerHTML = "Ennio Morricone";
  itemThree.innerHTML = "River Flows In You";
  itemFour.innerHTML = "Summer Wind";

  let arr = [
    "../assets/sounds/Aqua Caelestis.mp3",
    "../assets/sounds/Ennio Morricone.mp3",
    "../assets/sounds/River Flows In You.mp3",
    "../assets/sounds/Summer Wind.mp3",
  ];
  let count = 0;
  player.setAttribute("src", arr[count]);
  function update() {
    rangeProgress.value = 0;
    rangeProgress.value = (player.currentTime / player.duration) * 100;
    if (player.currentTime / 60 < 1) {
      currentMinutes.innerHTML = "00";
    } else if (player.currentTime / 60 > 1) {
      currentMinutes.innerHTML = "01";
    }
    if (player.currentTime < 60) {
      if (player.currentTime < 10) {
        currentSeconds.innerHTML = `0${Math.floor(player.currentTime)}`;
      } else if (player.currentTime > 10) {
        currentSeconds.innerHTML = Math.floor(player.currentTime);
      }
    } else if (player.currentTime > 60) {
      if (player.currentTime < 70) {
        currentSeconds.innerHTML = `0${Math.floor(player.currentTime - 60)}`;
      } else if (player.currentTime > 70) {
        currentSeconds.innerHTML = Math.floor(player.currentTime - 60);
      }
    }
    if (
      rangeProgress.value === "100" &&
      player.outerHTML === '<audio src="../assets/sounds/Aqua Caelestis.mp3"></audio>'
    ) {
      playSmallOne.classList.remove("pause");
      playSmallTwo.classList.add("pause");
      playSmallThree.classList.remove("pause");
      playSmallFour.classList.remove("pause");
      player.setAttribute("src", arr[1]);
      player.play();
      nameMusic.innerHTML = "Ennio Morricone";
      duration.innerHTML = "01:37";
      itemOne.style.color = "#fff";
      itemTwo.style.color = "red";
      itemThree.style.color = "#fff";
      itemFour.style.color = "#fff";
    } else if (
      rangeProgress.value === "100" &&
      player.outerHTML === '<audio src="../assets/sounds/Ennio Morricone.mp3"></audio>'
    ) {
      playSmallOne.classList.remove("pause");
      playSmallTwo.classList.remove("pause");
      playSmallThree.classList.add("pause");
      playSmallFour.classList.remove("pause");
      player.setAttribute("src", arr[2]);
      player.play();
      nameMusic.innerHTML = "River Flows In You";
      duration.innerHTML = "01:37";
      itemOne.style.color = "#fff";
      itemTwo.style.color = "#fff";
      itemThree.style.color = "red";
      itemFour.style.color = "#fff";
    } else if (
      rangeProgress.value === "100" &&
      player.outerHTML === '<audio src="../assets/sounds/River Flows In You.mp3"></audio>'
    ) {
      playSmallOne.classList.remove("pause");
      playSmallTwo.classList.remove("pause");
      playSmallThree.classList.remove("pause");
      playSmallFour.classList.add("pause");
      player.setAttribute("src", arr[3]);
      player.play();
      nameMusic.innerHTML = "Summer Wind";
      duration.innerHTML = "01:50";
      itemOne.style.color = "#fff";
      itemTwo.style.color = "#fff";
      itemThree.style.color = "#fff";
      itemFour.style.color = "red";
    } else if (
      rangeProgress.value === "100" &&
      player.outerHTML === '<audio src="../assets/sounds/Summer Wind.mp3"></audio>'
    ) {
      playSmallOne.classList.add("pause");
      playSmallTwo.classList.remove("pause");
      playSmallThree.classList.remove("pause");
      playSmallFour.classList.remove("pause");
      player.setAttribute("src", arr[0]);
      player.play();
      nameMusic.innerHTML = "Aqua Caelestis";
      itemOne.style.color = "red";
      itemTwo.style.color = "#fff";
      itemThree.style.color = "#fff";
      itemFour.style.color = "#fff";
      duration.innerHTML = "00:39";
    }
  }
  document.addEventListener("click", (event) => {
    let target = event.target;

    if (target.classList.contains("play-small-one")) {
      if (!play.classList.contains("pause")) {
        play.classList.add("pause");
      }
      if (
        player.outerHTML === '<audio src="../assets/sounds/Ennio Morricone.mp3"></audio>' ||
        player.outerHTML === '<audio src="../assets/sounds/River Flows In You.mp3"></audio>' ||
        player.outerHTML === '<audio src="../assets/sounds/Summer Wind.mp3"></audio>'
      ) {
        player.setAttribute("src", arr[0]);
        playSmallOne.classList.add("pause");
        playSmallTwo.classList.remove("pause");
        playSmallThree.classList.remove("pause");
        playSmallFour.classList.remove("pause");
        player.play();
        player.ontimeupdate = update;
        nameMusic.innerHTML = "Aqua Caelestis";
        itemOne.style.color = "red";
        itemTwo.style.color = "#fff";
        itemThree.style.color = "#fff";
        itemFour.style.color = "#fff";
        duration.innerHTML = "00:39";
      } else if (player.outerHTML === '<audio src="../assets/sounds/Aqua Caelestis.mp3"></audio>') {
        if (player.paused === true) {
          player.play();
          player.ontimeupdate = update;
          nameMusic.innerHTML = "Aqua Caelestis";
          itemOne.style.color = "red";
          itemTwo.style.color = "#fff";
          itemThree.style.color = "#fff";
          itemFour.style.color = "#fff";
          duration.innerHTML = "00:39";
          playSmallOne.classList.add("pause");
        } else if (player.paused === false) {
          player.pause();
          play.classList.remove("pause");
          playSmallOne.classList.remove("pause");
        }
      }
    } else if (target.classList.contains("play-small-two")) {
      if (!play.classList.contains("pause")) {
        play.classList.add("pause");
      }
      if (
        player.outerHTML === '<audio src="../assets/sounds/Aqua Caelestis.mp3"></audio>' ||
        player.outerHTML === '<audio src="../assets/sounds/River Flows In You.mp3"></audio>' ||
        player.outerHTML === '<audio src="../assets/sounds/Summer Wind.mp3"></audio>'
      ) {
        playSmallOne.classList.remove("pause");
        playSmallThree.classList.remove("pause");
        playSmallTwo.classList.add("pause");
        playSmallFour.classList.remove("pause");
        player.setAttribute("src", arr[1]);
        player.play();
        player.ontimeupdate = update;
        nameMusic.innerHTML = "Ennio Morricone";
        duration.innerHTML = "01:37";
        itemOne.style.color = "#fff";
        itemTwo.style.color = "red";
        itemThree.style.color = "#fff";
        itemFour.style.color = "#fff";
      } else if (player.outerHTML === '<audio src="../assets/sounds/Ennio Morricone.mp3"></audio>') {
        if (player.paused === true) {
          player.play();
          play.classList.add("pause");
          playSmallTwo.classList.add("pause");
          player.ontimeupdate = update;
          nameMusic.innerHTML = "Ennio Morricone";
          itemOne.style.color = "#fff";
          itemTwo.style.color = "red";
          itemThree.style.color = "#fff";
          itemFour.style.color = "#fff";
          duration.innerHTML = "01:37";
        } else if (player.paused === false) {
          player.pause();
          play.classList.remove("pause");
          playSmallTwo.classList.remove("pause");
        }
      }
    } else if (target.classList.contains("play-small-three")) {
      if (!play.classList.contains("pause")) {
        play.classList.add("pause");
      }
      if (
        player.outerHTML === '<audio src="../assets/sounds/Aqua Caelestis.mp3"></audio>' ||
        player.outerHTML === '<audio src="../assets/sounds/Ennio Morricone.mp3"></audio>' ||
        player.outerHTML === '<audio src="../assets/sounds/Summer Wind.mp3"></audio>'
      ) {
        player.setAttribute("src", arr[2]);
        playSmallOne.classList.remove("pause");
        playSmallTwo.classList.remove("pause");
        playSmallThree.classList.add("pause");
        playSmallFour.classList.remove("pause");
        player.play();
        player.ontimeupdate = update;
        nameMusic.innerHTML = "River Flows In You";
        duration.innerHTML = "01:37";
        itemOne.style.color = "#fff";
        itemTwo.style.color = "#fff";
        itemThree.style.color = "red";
        itemFour.style.color = "#fff";
      } else if (player.outerHTML === '<audio src="../assets/sounds/River Flows In You.mp3"></audio>') {
        if (player.paused === true) {
          player.play();
          play.classList.add("pause");
          playSmallThree.classList.add("pause");
          player.ontimeupdate = update;
          nameMusic.innerHTML = "River Flows In You";
          itemOne.style.color = "#fff";
          itemTwo.style.color = "#fff";
          itemThree.style.color = "red";
          itemFour.style.color = "#fff";
          duration.innerHTML = "01:37";
        } else if (player.paused === false) {
          player.pause();
          play.classList.remove("pause");
          playSmallThree.classList.remove("pause");
        }
      }
    } else if (target.classList.contains("play-small-four")) {
      if (!play.classList.contains("pause")) {
        play.classList.add("pause");
      }
      if (
        player.outerHTML === '<audio src="../assets/sounds/Aqua Caelestis.mp3"></audio>' ||
        player.outerHTML === '<audio src="../assets/sounds/Ennio Morricone.mp3"></audio>' ||
        player.outerHTML === '<audio src="../assets/sounds/River Flows In You.mp3"></audio>'
      ) {
        player.setAttribute("src", arr[3]);
        playSmallOne.classList.remove("pause");
        playSmallTwo.classList.remove("pause");
        playSmallThree.classList.remove("pause");
        playSmallFour.classList.add("pause");
        player.play();
        player.ontimeupdate = update;
        nameMusic.innerHTML = "Summer Wind";
        duration.innerHTML = "01:50";
        itemOne.style.color = "#fff";
        itemTwo.style.color = "#fff";
        itemThree.style.color = "#fff";
        itemFour.style.color = "red";
      } else if (player.outerHTML === '<audio src="../assets/sounds/Summer Wind.mp3"></audio>') {
        if (player.paused === true) {
          player.play();
          play.classList.add("pause");
          playSmallFour.classList.add("pause");
          player.ontimeupdate = update;
          nameMusic.innerHTML = "Summer Wind";
          itemOne.style.color = "#fff";
          itemTwo.style.color = "#fff";
          itemThree.style.color = "#fff";
          itemFour.style.color = "red";
          duration.innerHTML = "01:50";
        } else if (player.paused === false) {
          player.pause();
          play.classList.remove("pause");
          playSmallFour.classList.remove("pause");
        }
      }
    }
  });

  playNext.addEventListener("click", () => {
    if (!play.classList.contains("pause")) {
      play.classList.add("pause");
    }
    if (player.outerHTML === '<audio src="../assets/sounds/Aqua Caelestis.mp3"></audio>') {
      playSmallOne.classList.remove("pause");
      playSmallTwo.classList.add("pause");
      playSmallThree.classList.remove("pause");
      playSmallFour.classList.remove("pause");
      player.setAttribute("src", arr[1]);
      player.play();
      nameMusic.innerHTML = "Ennio Morricone";
      duration.innerHTML = "01:37";
      itemOne.style.color = "#fff";
      itemTwo.style.color = "red";
      itemThree.style.color = "#fff";
      itemFour.style.color = "#fff";
    } else if (player.outerHTML === '<audio src="../assets/sounds/Ennio Morricone.mp3"></audio>') {
      playSmallOne.classList.remove("pause");
      playSmallTwo.classList.remove("pause");
      playSmallThree.classList.add("pause");
      playSmallFour.classList.remove("pause");
      player.setAttribute("src", arr[2]);
      player.play();
      nameMusic.innerHTML = "River Flows In You";
      duration.innerHTML = "01:37";
      itemOne.style.color = "#fff";
      itemTwo.style.color = "#fff";
      itemThree.style.color = "red";
      itemFour.style.color = "#fff";
    } else if (player.outerHTML === '<audio src="../assets/sounds/River Flows In You.mp3"></audio>') {
      playSmallOne.classList.remove("pause");
      playSmallTwo.classList.remove("pause");
      playSmallThree.classList.remove("pause");
      playSmallFour.classList.add("pause");
      player.setAttribute("src", arr[3]);
      player.play();
      nameMusic.innerHTML = "Summer Wind";
      duration.innerHTML = "01:50";
      itemOne.style.color = "#fff";
      itemTwo.style.color = "#fff";
      itemThree.style.color = "#fff";
      itemFour.style.color = "red";
    } else if (player.outerHTML === '<audio src="../assets/sounds/Summer Wind.mp3"></audio>') {
      playSmallOne.classList.add("pause");
      playSmallTwo.classList.remove("pause");
      playSmallThree.classList.remove("pause");
      playSmallFour.classList.remove("pause");
      player.setAttribute("src", arr[0]);
      player.play();
      nameMusic.innerHTML = "Aqua Caelestis";
      itemOne.style.color = "red";
      itemTwo.style.color = "#fff";
      itemThree.style.color = "#fff";
      itemFour.style.color = "#fff";
      duration.innerHTML = "00:39";
    }
  });

  playPrev.addEventListener("click", () => {
    if (!play.classList.contains("pause")) {
      play.classList.add("pause");
    }
    if (player.outerHTML === '<audio src="../assets/sounds/Aqua Caelestis.mp3"></audio>') {
      playSmallOne.classList.remove("pause");
      playSmallTwo.classList.remove("pause");
      playSmallThree.classList.remove("pause");
      playSmallFour.classList.add("pause");
      player.setAttribute("src", arr[3]);
      player.play();
      nameMusic.innerHTML = "Summer Wind";
      duration.innerHTML = "01:50";
      itemOne.style.color = "#fff";
      itemTwo.style.color = "#fff";
      itemThree.style.color = "#fff";
      itemFour.style.color = "red";
    } else if (player.outerHTML === '<audio src="../assets/sounds/Ennio Morricone.mp3"></audio>') {
      playSmallOne.classList.add("pause");
      playSmallTwo.classList.remove("pause");
      playSmallThree.classList.remove("pause");
      playSmallFour.classList.remove("pause");
      player.setAttribute("src", arr[0]);
      player.play();
      player.ontimeupdate = update;
      nameMusic.innerHTML = "Aqua Caelestis";
      itemOne.style.color = "red";
      itemTwo.style.color = "#fff";
      itemThree.style.color = "#fff";
      itemFour.style.color = "#fff";
      duration.innerHTML = "00:39";
    } else if (player.outerHTML === '<audio src="../assets/sounds/River Flows In You.mp3"></audio>') {
      playSmallOne.classList.remove("pause");
      playSmallTwo.classList.add("pause");
      playSmallThree.classList.remove("pause");
      playSmallFour.classList.remove("pause");
      player.setAttribute("src", arr[1]);
      player.play();
      nameMusic.innerHTML = "Ennio Morricone";
      duration.innerHTML = "01:37";
      itemOne.style.color = "#fff";
      itemTwo.style.color = "red";
      itemThree.style.color = "#fff";
      itemFour.style.color = "#fff";
    } else if (player.outerHTML === '<audio src="../assets/sounds/Summer Wind.mp3"></audio>') {
      playSmallOne.classList.remove("pause");
      playSmallTwo.classList.remove("pause");
      playSmallThree.classList.add("pause");
      playSmallFour.classList.remove("pause");
      player.setAttribute("src", arr[2]);
      player.play();
      nameMusic.innerHTML = "River Flows In You";
      duration.innerHTML = "01:37";
      itemOne.style.color = "#fff";
      itemTwo.style.color = "#fff";
      itemThree.style.color = "red";
      itemFour.style.color = "#fff";
    }
  });
  play.addEventListener("click", () => {
    play.classList.toggle("pause");
    if (player.paused === true) {
      player.play();
      if (player.outerHTML === '<audio src="../assets/sounds/Aqua Caelestis.mp3"></audio>') {
        playSmallOne.classList.add("pause");
        playSmallTwo.classList.remove("pause");
        playSmallThree.classList.remove("pause");
        playSmallFour.classList.remove("pause");
        itemOne.style.color = "red";
        itemTwo.style.color = "#fff";
        itemThree.style.color = "#fff";
        itemFour.style.color = "#fff";
      } else if (player.outerHTML === '<audio src="../assets/sounds/Ennio Morricone.mp3"></audio>') {
        playSmallOne.classList.remove("pause");
        playSmallTwo.classList.add("pause");
        playSmallThree.classList.remove("pause");
        playSmallFour.classList.remove("pause");
        itemOne.style.color = "#fff";
        itemTwo.style.color = "red";
        itemThree.style.color = "#fff";
        itemFour.style.color = "#fff";
      } else if (player.outerHTML === '<audio src="../assets/sounds/River Flows In You.mp3"></audio>') {
        playSmallOne.classList.remove("pause");
        playSmallTwo.classList.remove("pause");
        playSmallThree.classList.add("pause");
        playSmallFour.classList.remove("pause");
        itemOne.style.color = "#fff";
        itemTwo.style.color = "#fff";
        itemThree.style.color = "red";
        itemFour.style.color = "#fff";
      } else if (player.outerHTML === '<audio src="../assets/sounds/Summer Wind.mp3"></audio>') {
        playSmallOne.classList.remove("pause");
        playSmallTwo.classList.remove("pause");
        playSmallThree.classList.remove("pause");
        playSmallFour.classList.add("pause");
        itemOne.style.color = "#fff";
        itemTwo.style.color = "#fff";
        itemThree.style.color = "#fff";
        itemFour.style.color = "red";
      }

      player.ontimeupdate = update;
    } else if (player.paused === false) {
      if (player.outerHTML === '<audio src="../assets/sounds/Aqua Caelestis.mp3"></audio>') {
        playSmallOne.classList.remove("pause");
      } else if (player.outerHTML === '<audio src="../assets/sounds/Ennio Morricone.mp3"></audio>') {
        playSmallTwo.classList.remove("pause");
      } else if (player.outerHTML === '<audio src="../assets/sounds/River Flows In You.mp3"></audio>') {
        playSmallThree.classList.remove("pause");
      } else if (player.outerHTML === '<audio src="../assets/sounds/Summer Wind.mp3"></audio>') {
        playSmallFour.classList.remove("pause");
      }
      player.pause();
    }
  });
  rangeProgress.addEventListener("input", () => {
    player.currentTime = (rangeProgress.value / 100) * player.duration;
  });
  rangeVolume.addEventListener("input", () => {
    volumeText.innerHTML = rangeVolume.value;
    player.volume = rangeVolume.value / 100;
  });
  volumeSvg.addEventListener("click", () => {
    if (rangeVolume.value > 0) {
      rangeVolume.value = 0;
      player.volume = 0;
      volumeText.innerHTML = 0;
    } else if (rangeVolume.value < 1) {
      rangeVolume.value = 100;
      player.volume = 1;
      volumeText.innerHTML = 100;
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
    if (target.classList.contains("audio")) {
      if (playerCont.style.opacity === "" || playerCont.style.opacity === "1") {
        animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            playerCont.style.opacity = 1 - progress;
          },
        });
      } else if (playerCont.style.opacity === "0") {
        animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            playerCont.style.opacity = 1 * progress;
          },
        });
      }
    }
  });
};
export default music;
