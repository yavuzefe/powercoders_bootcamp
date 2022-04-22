const tipCalculator = (amount, tipRate) => {
    let tip = amount * tipRate/100;
    totalAmount = amount + tip;
    console.log(`Your bill is: ${amount} and tip is: ${tip}. Total amount is: ${totalAmount}`);
}
tipCalculator(300, 6);