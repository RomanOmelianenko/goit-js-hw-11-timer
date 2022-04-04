// ================== 1 Class =================

class CountdownTimer {
  constructor({ rootSelector, targetDate }) {
      this._refs = this._getRefs(rootSelector);
      this._targetDate = targetDate
  }
   _getRefs(rootSelector) {
      const refs = {}
      refs.selector = document.querySelector(`${rootSelector} [data-value="days"]`),
      refs.days = document.querySelector(`${rootSelector} [data-value= "days"]`),
      refs.hours = document.querySelector(`${rootSelector} [data-value="hours"]`),
      refs.minutes = document.querySelector(`${rootSelector} [data-value="mins"]`),
      refs.seconds = document.querySelector(`${rootSelector} [data-value="secs"]`);
        
      return refs;
  }
   _start() {
      this.intervalId = setInterval(() => {
        this.currentTime = Date.now();
        this.deltaTime = this._targetDate - this.currentTime;
        // console.log(this.currentTime);
        // console.log(this.deltaTime);
      
        this.updateClockFace(this.deltaTime);

        if(this.deltaTime < 0) {
          clearInterval(this.intervalId)
        }
      }, 1000);
      
  };
  
  updateClockFace(time) {
    const days = this.padDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    // console.log(`${days}:${hours}:${mins}:${secs}`);
    this._refs.days.textContent = `${days}`;
    this._refs.hours.textContent = `${hours}`;
    this._refs.minutes.textContent = `${mins}`;
    this._refs.seconds.textContent = `${secs}`;
  }

  padDays(value) {
    return String(value).padStart(3, "0");
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}
  
const timer1 = new CountdownTimer({
  rootSelector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
});

timer1._start()
// console.log(timer1);





// ================= 2 ========================

// const refs = {
//   selector: document.getElementById("timer-1"),
//   days: document.querySelector('span[data-value= "days"]'),
//   hours: document.querySelector('span[data-value="hours"]'),
//   minutes: document.querySelector('span[data-value="mins"]'),
//   seconds: document.querySelector('span[data-value="secs"]'),
// };

// // const timer = {
//   function start() {
//     const targetDate = new Date("Nov 17, 2020");
//       const intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = targetDate - currentTime;
      
//       updateClockFace(deltaTime);

//       if(deltaTime < 0) {
//         clearInterval(intervalId)
//       }
//     }, 1000);
// };
// // };

// // timer.start()
// start();

// function updateClockFace(time) {
//   const days = padDays(Math.floor(time / (1000 * 60 * 60 * 24)));
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
//   // console.log(`${days}:${hours}:${mins}:${secs}`);
//   refs.days.textContent = `${days}`;
//   refs.hours.textContent = `${hours}`;
//   refs.minutes.textContent = `${mins}`;
//   refs.seconds.textContent = `${secs}`;
// }

// function padDays(value) {
//   return String(value).padStart(3, "0");
// }

// function pad(value) {
//   return String(value).padStart(2, "0");
// }

