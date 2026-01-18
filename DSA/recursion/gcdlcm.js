//GCD (Greatest Common Divisor)

// Let’s take 12 and 18

// 👉 Factors of 12 = 1, 2, 3, 4, 6, 12
// 👉 Factors of 18 = 1, 2, 3, 6, 9, 18

//LCM (Least Common Multiple)

// For 12 and 18

// 👉 Multiples of 12 = 12, 24, 36, 48, 60, ...
// 👉 Multiples of 18 = 18, 36, 54, 72, ...


function gcd(a,b){
    if(b==0) return a;
    return gcd(b,a%b);
}

function lcd(a,b){
    return (a*b) / gcd(a,b)
}