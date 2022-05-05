const getNumber = max => {
    return Math.floor(max*(Math.random()));
}
let ourNumber = getNumber(100);
let inputNumber;
do { 
    inputNumber = Number(window.prompt('Guess number between 1-100'));
    if (inputNumber > ourNumber) {
    window.alert(`The number is smaller than ${inputNumber}`);
    inputNumber = Number(window.prompt(`Guess number between 1-${inputNumber}`));
} 
else if (inputNumber < ourNumber){
    window.alert(`The number is bigger than ${inputNumber}`);
    inputNumber = Number(window.prompt(`Guess number between ${inputNumber}-100`));
}
else{
    window.alert(`Congratulations the number is: ${ourNumber}`);
}
}
while(ourNumber == inputNumber);