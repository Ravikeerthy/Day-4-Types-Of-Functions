// Rotate an array by k times

let mainarray = [1,2,3,4,5,6,7];
let k = 2;

let rotate = function(p, k){
    let i = p.length;

    k = k % i;

    let afterrotate = p.slice(i-k).concat(p.slice(0,i-k));

    return afterrotate;
};

let afterrotate = rotate(mainarray, k);

console.log("Before Rotate: ", mainarray);
console.log("After Rotate: ", afterrotate);