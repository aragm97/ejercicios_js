/* Write a function that performs the bubble algorithm.
Input [3, 6, 12, 5, 100, 1]
Output [1, 3, 5, 6, 12, 100]
 */
function bubbleSort(numero) {
    let index = numero.length;
    for (let i = 0; i < index; i++) {
      for (let j = 0; j < (index - i - 1); j++) {
        if (numero[j] > numero[j + 1]) {
          let temporal = numero[j];
          numero[j] = numero[j + 1];
          numero[j + 1] = temporal;
        }
      }
    }
  }
  
let input = [3, 6, 12, 5, 100, 1];
  bubbleSort(input);
  
  console.log(input);
