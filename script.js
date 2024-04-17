const body = document.querySelector("body");
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const modeSwitch = document.querySelector(".mode-switch");

let isDarkMode = false;

modeSwitch.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  updateMode();
});

const updateMode = () => {
  if (isDarkMode) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
};

const updateTime = () => {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hourDegrees = (hours % 12 + minutes / 60) * 360 / 12;
  const minuteDegrees = (minutes + seconds / 60) * 360 / 60;
  const secondDegrees = (seconds / 60) * 360;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
};

setInterval(updateTime, 1000);
