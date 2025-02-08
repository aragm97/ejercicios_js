/* Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
 */

const sumaYMultiplicacion = (arrayNumbers =[]) => `El resultado de la suma de todos los numeros es: ${arrayNumbers.reduce((acc,curr) =>acc +(curr*1),0 )}. El resultado de la multiplicacion de todos los numeros es: ${arrayNumbers.reduce((acc,curr) =>acc *curr,1 )}`
console.log(sumaYMultiplicacion([1,2,3,4]));