// finding the GREATEST COMMON DIVISOR

// finding the GREATEST COMMON DIVISOR
let a;
let b;
let asd;
const gcd = (num1, num2) => {
    if (num1 % num2 == 0) {
      asd = num2;
  } else {
      a = num2;
      b = (num1 % num2);
      gcd(a, b);
  }
return asd;
}
console.log(gcd(40, 16));