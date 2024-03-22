function speedDetector(speed) {

    const speedLimit = 70;
    const kmPerPoint = 5;
    let demeritPoints = 0;

    if (speed >= speedLimit)
demeritPoints = Math.floor(5.5);

if (demeritPoints > 12 ) {


    return 'License Suspended';

} else {
    return `Points; ${demeritPoints}`;

}

}
console.log(speedDetector(80));

console.log(speedDetector(65));
console.log(speedDetector(150));