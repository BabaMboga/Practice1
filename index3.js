const name = "Byron the Poodle";
const probabilityOfRain = 0.2;
const temperatureInC = 26;

console.log(
  `Hello, ${name}, with a rain chance of ${
    probabilityOfRain * 100
  }% and a temperature of ${temperatureInC}C we recommend that you ` +
    (rainPercentage > 0.3 ? "take an umbrella" : "enjoy this rain-free day") +
    `${
      temperatureInC >= 26
        ? " and watch out for heatstroke."
        : " and bask in this fine weather."
    }`
);
