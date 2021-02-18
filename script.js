// script for reverseArray, reversing elements from function param. into new array.

function reverseArray (...numbers) {
    let result = [];
    
    while (numbers.length != 0) {
        result.push(numbers.pop());
    }
   return result;     
}

console.log(reverseArray('a', 'b', 'c'));

