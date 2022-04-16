for (let numbers = 1; numbers <= 100; numbers++) {
    if (numbers%35 == 0) {
        console.log("PowerCoders");
    } else if (numbers%5==0) {
        console.log("Power");     
    } else if (numbers%7==0) {
        console.log("Coders");
    } else{
        console.log(numbers);
    }
}