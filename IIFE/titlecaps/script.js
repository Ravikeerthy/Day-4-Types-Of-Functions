// Convert all the strings to title caps in a string array

(function(arr){
    let result = arr[0].split(' ').map(function(str){
      return str.charAt(0).toUpperCase() + str.slice(1);
    }).join(' ');
    console.log("Title caps in a array string is: ", result);
    return result;

})(["the difference between ordinary and extraordinary is that little extra."]);