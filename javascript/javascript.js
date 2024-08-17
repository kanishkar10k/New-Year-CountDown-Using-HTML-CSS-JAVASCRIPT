const countdownContainer = document.querySelector('.countdown-container');
const daysSpan = document.querySelector('#days');
const hoursSpan = document.querySelector('#hours');
const minutesSpan = document.querySelector('#minutes');
const secondsSpan = document.querySelector('#seconds');
const messageParagraph = document.querySelector('#message');

let countdownDate = new Date(new Date().getFullYear() + 1, 0, 1); // Set the countdown date to next New Year's Eve
let countdownInterval;

function updateCountdown() {
const now = new Date();
const timeDiff = countdownDate.getTime() - now.getTime();
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

daysSpan.textContent = days.toString().padStart(2, '0');
hoursSpan.textContent = hours.toString().padStart(2, '0');
minutesSpan.textContent = minutes.toString().padStart(2, '0');
secondsSpan.textContent = seconds.toString().padStart(2, '0');
if (timeDiff <= 0) {
    clearInterval(countdownInterval);
    messageParagraph.textContent = "Happy New Year!";
}
}
countdownInterval = setInterval(updateCountdown, 1000);
setInterval(updateCurrentTime, 1000);