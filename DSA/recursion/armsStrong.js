function armstrong(n) {
    let count = 0;
    let nocopy = n;
    while (nocopy > 0) {
        nocopy = Math.floor(nocopy / 10);
        count++;
    }

    let sum = 0;
    let temp = n; // keep a copy for comparison

    while (temp > 0) {
        let digit = temp % 10;
        let power = 1;
        for (let i = 0; i < count; i++) {
            power = power * digit;
        }
        sum = sum + power;
        temp = Math.floor(temp / 10);
    }

    console.log("Sum:", sum);
    
    if (sum === n) {
        console.log(n + " is an Armstrong number");
        return true;
    } else {
        console.log(n + " is not an Armstrong number");
        return false;
    }
}

let result = armstrong(153);
console.log("Result:", result);


let a = 153;
let digits = a.toString().split("");
let count = digits.length;

let answer = digits.reduce((sum,current)=>sum + Math.pow(current,count),0)
console.log(answer);

let sum = 0;
for (let i = 0; i < digits.length; i++) {
  sum += Math.pow(Number(digits[i]), count);
}

