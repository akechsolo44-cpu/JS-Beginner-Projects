
let number = Number(prompt("Enter a number:"));

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}



let score = Number(prompt("Enter student score:"));

if (score >= 60) {
    console.log("Pass");
} else {
    console.log("Fail");
}



let a = Number(prompt("Enter the first number:"));
let b = Number(prompt("Enter the second number:"));

if (a > b) {
    console.log(a + " is larger");
} else if (b > a) {
    console.log(b + " is larger");
} else {
    console.log("Both numbers are equal");
}



let grade = Number(prompt("Enter student grade:"));

if (grade < 0 || grade > 100) {
    console.log("Invalid grade");
} else if (grade >= 80) {
    console.log("Grade A");
} else if (grade >= 70) {
    console.log("Grade B");
} else if (grade >= 60) {
    console.log("Grade C");
} else if (grade >= 50) {
    console.log("Grade D");
} else {
    console.log("Grade E");
}




let username = prompt("Enter username:");
let password = prompt("Enter password:");

if (username !== "admin") {
    console.log("Incorrect username");
} else if (password !== "12345") {
    console.log("Incorrect password");
} else {
    console.log("Login successful");
}




let color = prompt("Enter traffic light color:").toLowerCase();

if (color === "red") {
    console.log("Stop");
} else if (color === "yellow") {
    console.log("Get Ready");
} else if (color === "green") {
    console.log("Go");
} else {
    console.log("Invalid Color");
}




let percentage = Number(prompt("Enter student percentage:"));
let attendance = Number(prompt("Enter attendance percentage:"));
let assignments = Number(prompt("Enter completed assignments percentage:"));

let passed = true;

if (percentage < 60) {
    console.log("Failed: Percentage is below 60");
    passed = false;
}

if (attendance < 75) {
    console.log("Failed: Attendance is below 75%");
    passed = false;
}

if (assignments < 80) {
    console.log("Failed: Assignments are below 80%");
    passed = false;
}

if (passed) {
    console.log("Pass");
} else {
    console.log("Overall Result: Fail");
}




let hours = Number(prompt("Enter parking duration in hours:"));
let fee = 0;

if (hours <= 0) {
    console.log("Invalid parking duration");
} else {
    fee = 5000 + (Math.ceil(hours) - 1) * 3000;

    if (fee > 20000) {
        fee = 20000;
    }

    console.log("Parking fee: Rp" + fee);
}
