// Convert all the strings to title caps in a string array

let arr2 = ["welcome to my world"];

let new1 = arr2[0].split(" ");

let firstCaps = new1
  .map((str) => str.charAt(0).toUpperCase() + str.slice(1))
  .join(" ");

console.log(firstCaps);