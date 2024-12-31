alert("Welcome")

var userName = prompt("Enter your name")
alert("Hi " + userName);

let totalValue = parseFloat(prompt("Enter the total value:"));

let obtainedValue = parseFloat(prompt("Enter the obtained value:"));

let percentage = (obtainedValue / totalValue) * 100;

alert("The percentage is: " + percentage.toFixed(2) + "%");
