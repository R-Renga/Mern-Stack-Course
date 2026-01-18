function removeVowels(str) {
    let vowels = "aeiouAEIOU";
    let result = "";

    for (let ch of str) {
        if (!vowels.includes(ch)) {
            result += ch;
        }
    }

    return result;
}

console.log(removeVowels("JavaScript"));
