/* For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
 */

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

console.log(people);

console.log(people.splice(1,1));
console.log(people.splice(2,1));
console.log(people.unshift(people.splice(people.indexOf("Luis"), 1)[0]));

console.log(people.push("Araceli"));

for (let person of people) {
    if (person === "Maria") {
        console.log(person);
        break; 
      
    } 
  
}
console.log(people.indexOf("Maria"));

console.log(people.length);
console.log(people);