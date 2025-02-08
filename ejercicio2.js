/* Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]
 */

let array = [1, 2, 4, 5];
let doubleArray = array.map(function(array){
    return array *2;
});

console.log(doubleArray);