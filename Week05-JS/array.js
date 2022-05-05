
const digitalClock = () => {
    let currentDate = new Date();
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let second = currentDate.getSeconds();
    let digitalClockScreen = `${hour} : ${minute} : ${second}`;
    // document.write(digitalClockScreen);
    console.log();
}
// console.log(setInterval(digitalClock, 1000));
setInterval(digitalClock, 1000);

// function printTime(){
//     let currentDate = new Date();
//     let hours = currentDate.getHours();
//     let mins = currentDate.getMinutes();
//     let secs = currentDate.getSeconds();
  
//     document.write(hours + ":" + mins + ":" + secs +"\n");
//   }
  
//   setInterval(printTime, 1000); // prints current time each second
