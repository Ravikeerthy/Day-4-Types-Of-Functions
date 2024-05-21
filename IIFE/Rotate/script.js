// Rotate an array by k times

let mainarray = [1, 2, 3, 4, 5, 6, 7];

(function(mainarray){ 
let k = 2;

function rotate(p, k) {
  let i = p.length;

  k = k % i;

  let afterrotate = p.slice(i - k).concat(p.slice(0, i - k));

  return afterrotate;
}

let afterrotate = rotate(mainarray, k);

console.log("Before Rotate: ", mainarray);
console.log("After Rotate: ", afterrotate);
})(mainarray);