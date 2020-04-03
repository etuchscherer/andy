let currentSpeed = 63;
let speedLimit = 55;
let isSpeeding = currentSpeed > speedLimit;
let yell;

if (isSpeeding) { // call the cops
  yell = 'crap its the fuzz';

} else { // everything is ok
  yell = `don't crap yourself, we're going under ${speedLimit}`;
}

console.log(yell);