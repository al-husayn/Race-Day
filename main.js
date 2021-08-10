let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let age = 16;
if (age >= 18 && registeredEarly) {
    raceNumber += 1000;
}
if (age > 18 && registeredEarly){
    console.log(`Racer number ${raceNumber}, you will be running at 9:30 am.`);
} else if (age >= 18 && !registeredEarly){
    console.log(`Racer number ${raceNumber}, you will be running at 11:00 am.`);
} else if(age < 18){
    console.log(`Racer number ${raceNumber} you will be running at 12:30 pm.`);
}else {
    console.log('You did not register');
}