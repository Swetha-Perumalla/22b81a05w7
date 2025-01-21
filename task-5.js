const temperatureConverter = {
    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * (5 / 9);
    },
    toFahrenheit(celsius) {
        return (celsius * (9 / 5)) + 32;
    }
};

let tempCelsius = parseFloat(prompt("Enter temperature in Celsius:"));
let tempFahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit:"));

console.log(`${tempCelsius}°C is ${temperatureConverter.toFahrenheit(tempCelsius)}°F`);
console.log(`${tempFahrenheit}°F is ${temperatureConverter.toCelsius(tempFahrenheit)}°C`);