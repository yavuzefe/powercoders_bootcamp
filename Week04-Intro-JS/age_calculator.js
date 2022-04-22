let birthYear = 1983;
let futureYear = 2023;
// let age = futureYear - bearthYear
// console.log(`I'll be either ${age} or ${age-1} in ${futureYear}`);

// With function
const ageCalculartor= (birth, future) => {
    let age = future- birth;
    console.log(`I'll be either ${age} or ${age-1} in ${future}`);
}
ageCalculartor(birthYear, futureYear);