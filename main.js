// Step 1
let raceNumber = Math.floor(Math.random() * 1000);

// Step 2
var earlyRegistration = false;

// Step 3
var runnerAge = 19;

// Step 4
if (runnerAge >= 18 && earlyRegistration === true) {
    raceNumber += 1000;
}

// Step 5 & 6 & 7
if (runnerAge >= 18 && earlyRegistration === true) {
    console.log(`You will race at 9:30am. Your race number is ${raceNumber}`);
} else if (runnerAge >= 18 && earlyRegistration === false) {
    console.log(`You will race at 11:00am. Your race number is ${raceNumber}`);
} else if (runnerAge < 18) {
    console.log(`You will race at 12:30pm. Your race number is ${raceNumber}`);
} else {
    console.log("Invalid input. Please try again")
}
