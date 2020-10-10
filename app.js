const refs = {
  selector: document.getElementById("timer-1"),
  days: document.querySelector('span[data-value= "days"]'),
  hours: document.querySelector('span[data-value="hours"]'),
  minutes: document.querySelector('span[data-value="mins"]'),
  seconds: document.querySelector('span[data-value="secs"]'),
};

const timer = {
  start() {
    const targetDate = new Date("Nov 17, 2020");
      const intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = targetDate - currentTime;
      
      updateClockFace(deltaTime);

      if(deltaTime < 0) {
        clearInterval(intervalId)
      }
    }, 1000);
  },
};

timer.start();

function updateClockFace(time) {
  const days = padDays(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  // console.log(`${days}:${hours}:${mins}:${secs}`);
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.minutes.textContent = `${mins}`;
  refs.seconds.textContent = `${secs}`;
}

function padDays(value) {
  return String(value).padStart(3, "0");
}

function pad(value) {
  return String(value).padStart(2, "0");
}

