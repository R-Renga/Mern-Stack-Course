function maxOccurringChar(str) {
  let freq = {};
  let maxCount = 0;
  let maxChar = "";

  for (let ch of str) {
    if (ch !== " ") {                       
      freq[ch] = (freq[ch] || 0) + 1;

      if (freq[ch] > maxCount) {
        maxCount = freq[ch];
        maxChar = ch;
      }
    }
  }

  return maxChar;
}

console.log(maxOccurringChar("hello world"));  // l
