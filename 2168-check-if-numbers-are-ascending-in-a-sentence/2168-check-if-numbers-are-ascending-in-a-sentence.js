/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    // Regular expression to find all numbers in the string
    const regex = /\d+/g;

    // Use match() to find all numbers and parse them into an array
    const numbers = s.match(regex)?.map(Number) || [];
    for(let i=0 ; i<numbers.length;i++){
        if(numbers[i]>=numbers[i+1]){
             return false
             }

    }
   return true
    

    
};