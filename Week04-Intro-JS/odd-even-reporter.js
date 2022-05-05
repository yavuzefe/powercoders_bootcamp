input = window.prompt("Write a number between 0-20");
let numb = Number(input)
if (numb%2 === 0) {
    console.log(`${numb} is a even number`);
}
else{
    console.log(`${numb} is a odd number`);
}
