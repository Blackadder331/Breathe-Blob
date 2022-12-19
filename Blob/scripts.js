let countdown = 7;

function updateCountdown() {
  document.getElementById("countdown").innerHTML = countdown;
  countdown--;

  if (countdown < 0) {
    countdown = 7;
  }
}

setInterval(updateCountdown, 1000); // repeat the function every 1000 milliseconds (1 second)

