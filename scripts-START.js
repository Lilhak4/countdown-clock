let countdown;

function timer(seconds) {
  const now = Date.now(); // Use milliseconds
  const then = now + seconds * 1000 // multiply 1000 to convert seconds into milliseconds

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000) //Can't use now again because that captured the start time and cant access current time
    //check to see if we should stop
    if (secondsLeft < 0) {
      clearInterval(countdown);
    }
    //display it
    console.log(secondsLeft);
  }, 1000)
};