// Convert all the strings to title caps in a string array

let str = ["i am a full stack developer"];

let result = str[0].split(' ').map(function (res) {
    return res.charAt(0).toUpperCase() + res.slice(1);
}).join(' ');

console.log("Title caps in a string array is: ", result);