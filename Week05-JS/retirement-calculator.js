let age = prompt("What's your age");
let retireAge = prompt("At what age do you want to retire?");
let year = new Date().getFullYear();
// console.log(date);
const retCalculator = (age, retireAge) => {
    let yearsLeft = retireAge - age;
    retireYear = year + yearsLeft;
    return retireYear; 
}
console.log(`It's ${year}, so you can retire at ${retCalculator(age, retireAge)}`);
alert(`It's ${year}, so you can retire at ${retCalculator(age, retireAge)}`);