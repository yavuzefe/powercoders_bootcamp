var list = [34, 666, 5, 4, 65, 2, 3, 10, 1, 45, -3];
// var comparaisonsCount = 0;
for (let index = 0; index < list.length; index++) {
    for (let i = 0; i < list.length; i++) {
        // comparaisonsCount++;
        if (list[index] > list[index + i]) {
            let temp = list[index + i];
            list[index + i] = list[index];
            list[index] = temp;
        }
    }
}
console.log(list);
// console.log(comparaisonsCount);
