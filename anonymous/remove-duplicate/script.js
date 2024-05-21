// Remove duplicates from an array

let x1 = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];

let removeDuplicates = function(arrayset){
    let set1 = new Set(arrayset);

    let as1 = [...set1];

    return as1;

}

let result2 = removeDuplicates(x1);

console.log("Orginal Array: ", x1);
console.log("After removing duplicate: ", result2);