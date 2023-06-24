const prompt = require("prompt-sync")({sigint: true});

//convert temperature from Fahrenheit to Kelvin
function temperature_converter(F) {
    return (F - 32) * 5/9;
}

//Input your temperature in Fahrenheit here
let number1 = parseFloat(prompt("Enter your number in Fahrenheit: "));


let result = temperature_converter(number1);

//It will give an output of this form
console.log("The temperature in Celsius is " + result);