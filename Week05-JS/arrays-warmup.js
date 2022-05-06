var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// 1. Access and output Oranges.
let orange = array.splice(2,1);
console.log(orange);
// 2. Remove the Banana from the array.
array.shift();
console.log(array);
// 3. Sort the array in order.
array.sort();
console.log(array);
// 4. Put "Kiwi" at the end of the array.
array.push("Kiwi");
console.log(array);
// 5. Remove "Apples" from the array.
array.shift();
console.log(array);
// 6. Sort the array in reverse order, i.e. ['a','c','b'] becomes ['b','c','a'])
array.sort().reverse();
console.log(array);