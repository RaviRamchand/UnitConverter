//Run specified methods when user clicks respective buttons
//Get the element user interacted with by using document.getElementById();
document.getElementById("clear").onclick = function () {
    return clear();
}

document.getElementById("toCelsius").onclick = function () {
    return toCelsius();
}

document.getElementById("toFahrenheit").onclick = function () {
    return toFahrenheit();
}

document.getElementById("toFeet").onclick = function () {
    return toFeet();
}

document.getElementById("toMeters").onclick = function () {
    return toMeters();
}

document.getElementById("toInches").onclick = function () {
    return toInches();
}

document.getElementById("toCentimeters").onclick = function () {
    return toCentimeters();
}

document.getElementById("toPounds").onclick = function () {
    return toPounds();
}

document.getElementById("toKilograms").onclick = function () {
    return toKilograms();
}

function clear() {
    document.getElementById("numberToConvert").value = "";
    text.style.color = "black";
    text.innerHTML = "Add a value to be converted!";
}

var text = document.getElementById("text");

//Methods implementation
function toCelsius() {
    var userInput = document.getElementById("numberToConvert").value;
    var converter = document.getElementById("converter").value;
    var ans;

    if (userInput == "") {
        text.style.color = "red";
        text.innerHTML = "You must enter a number";
    } else if (converter === 'Fahrenheit') {
        ans = Math.floor((userInput - 32) * 5 / 9);
        ans = ans.toFixed(2);
        text.style.color = "green";
        text.innerHTML = `${userInput}°F to Celsius is ${ans}°C`;
    } else if (converter === 'Celsius') {
        text.style.color = "green";
        text.innerHTML = `${userInput}°C to Celsius is ${userInput}°C`;
    } else {
        text.style.color = "#eed202";
        text.innerHTML = "Types incompatible";
    }
}

function toFahrenheit() {
    var userInput = document.getElementById("numberToConvert").value;
    var converter = document.getElementById("converter").value;
    var ans;

    if (userInput == "") {
        text.style.color = "red";
        text.innerHTML = "You must enter a number"
    } else if (converter === 'Celsius') {
        ans = (userInput * 9 / 5) + 32;
        ans = ans.toFixed(2);
        text.style.color = "green";
        text.innerHTML = `${userInput}°C to Fahrenheit = ${ans}°F`;
    } else if (converter === 'Fahrenheit') {
        text.style.color = "green";
        text.innerHTML = `${userInput}°F to Celsius is ${userInput}°F`;
    } else {
        text.style.color = "#eed202";
        text.innerHTML = "Types incompatible";
    }
}

function toMeters() {
    var userInput = document.getElementById("numberToConvert").value;
    userInput = parseFloat(userInput);
    var converter = document.getElementById("converter").value;
    var ans;

    if (userInput == "") {
        text.style.color = "red";
        text.innerHTML = "You must enter a number";
    } else if (converter === 'Feet') {
        ans = userInput * 0.3048;
        ans = ans.toFixed(2);
        text.style.color = "green";
        text.innerHTML = `${userInput}ft is ${ans}m`;
    } else if (converter === 'Meters') {
        text.style.color = "green";
        text.innerHTML = `${userInput}m is ${userInput}m`;
    } else if (converter == "Inches") {
        ans = Math.floor(userInput / 39.37);
        ans = ans.toFixed(2);
        text.style.color = "green";
        text.innerHTML = `${userInput}inch is ${ans}m`;
    } else if (converter == "Centimeters") {
        ans = userInput / 100;
        ans = ans.toFixed(2);
        text.style.color = "green";
        text.innerHTML = `${userInput}cm is ${ans}m`;
    } else {
        text.style.color = "#eed202";
        text.innerHTML = "Types incompatible";
    }
}

function toFeet() {
    var userInput = document.getElementById("numberToConvert").value;
    var converter = document.getElementById("converter").value;
    var ans;

    if (userInput == "") {
        text.style.color = "red";
        text.innerHTML = "You must enter a number";
    } else if (converter === 'Meters') {
        ans = userInput * 3.28084;
        ans = ans.toFixed(2);
        text.style.color = "green";
        text.innerHTML = `${userInput}m is ${ans}ft`;
    } else if (converter == "Feet") {
        text.style.color = "green";
        text.innerHTML = `${userInput}ft is ${userInput}ft`;
    } else if (converter == "Inches") {
        ans = userInput * 0.0833;
        ans = ans.toFixed(2);
        text.style.color = "green";
        text.innerHTML = `${userInput}inch is ${ans}ft`;
    } else if (converter == "Centimeters") {
        ans = userInput / 30.48;
        ans = ans.toFixed(2);
        text.style.color = "green";
        text.innerHTML = `${userInput}cm is ${ans}ft`;
    } else {
        text.style.color = "#eed202";
        text.innerHTML = "Types incompatible";
    }
}

function toInches() {
    var userInput = document.getElementById("numberToConvert").value;
    var converter = document.getElementById("converter").value;
    var ans;

    if (userInput == "") {
        text.style.color = "red";
        text.innerHTML = "You must enter a number";
    } else if (converter == "Centimeters") {
        ans = userInput / 2.54;
        ans = ans.toFixed(2);
        text.style.color = "green";
        text.innerHTML = `${userInput}cm is ${ans}inch`
    } else if (converter == "Inches") {
        text.style.color = "green";
        text.innerHTML = `${userInput}inch is ${userInput}inch`;
    } else if (converter == "Feet") {
        text.style.color = "green";
        ans = userInput * 12;
        ans = ans.toFixed(2);
        text.style.color = "green";
        text.innerHTML = `${userInput}ft is ${ans}inch`;
    } else if (converter == "Meters") {
        ans = userInput * 39.37;
        ans = ans.toFixed(2);
        text.style.color = "green";
        text.innerHTML = `${userInput}m is ${ans}inch`;
    } else {
        text.style.color = "#eed202";
        text.innerHTML = "Types incompatible";
    }
}

function toCentimeters() {
    var userInput = document.getElementById("numberToConvert").value;
    var converter = document.getElementById("converter").value;
    var ans;

    if (userInput == "") {
        text.style.color = "red";
        text.innerHTML = "You must enter a number";
    } else if (converter == "Inches") {
        ans = userInput * 2.54;
        ans = ans.toFixed(2);
        text.style.color = "green";
        text.innerHTML = `${userInput}inch is ${ans}cm`;
    } else if (converter == "Centimeters") {
        text.style.color = "green";
        text.innerHTML = `${userInput}cm is ${userInput}cm`;
    } else if (converter == "Meters") {
        ans = userInput * 100;
        ans = ans.toFixed(2);
        text.style.color = "green";
        text.innerHTML = `${userInput}m is ${ans}cm`;
    } else if (converter == "Feet") {
        ans = userInput * 30.48;
        ans = ans.toFixed(2);
        text.style.color = "green";
        text.innerHTML = `${userInput}ft is ${ans}cm`;
    } else {
        text.style.color = "#eed202";
        text.innerHTML = "Types incompatible";
    }
}

function toPounds(){
    var userInput = document.getElementById("numberToConvert").value;
    var converter = document.getElementById("converter").value;
    var ans;

    if (userInput == "") {
        text.style.color = "red";
        text.innerHTML = "You must enter a number";
    }
    else if(converter == "Kilograms"){
        ans = userInput * 2.205;
        ans = ans.toFixed(2);
        text.style.color = "green";
        text.innerHTML = `${userInput}kg is ${ans}lbs`;
    }
    else if(converter == "Pounds"){
        text.style.color = "green";
        text.innerHTML = `${userInput}lbs is ${userInput}lbs`;
    }
    else{
        text.style.color = "#eed202";
        text.innerHTML = "Types incompatible";
    }
}

function toKilograms() {
    var userInput = document.getElementById("numberToConvert").value;
    var converter = document.getElementById("converter").value;

    if (userInput == "") {
        text.style.color = "red";
        text.innerHTML = "You must enter a number";
    }
    else if(converter == "Pounds"){
        ans = userInput / 2.205;
        ans = ans.toFixed(2);
        text.style.color = "green";
        text.innerHTML = `${userInput}lbs is ${ans}kg`;
    }
    else{
        text.style.color = "#eed202";
        text.innerHTML = "Types incompatible";
    }
}