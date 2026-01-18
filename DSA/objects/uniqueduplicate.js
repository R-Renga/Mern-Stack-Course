



const arr = [1, 2, 2, 3, 4, 4, 5];

const noDuplicates = [...new Set(arr)];

console.log(noDuplicates);



const seen = new Set();
const duplicates = new Set();

for (let num of arr) {
  if (seen.has(num)) {
    duplicates.add(num);
  } else {
    seen.add(num);
  }
}

console.log([...duplicates]); 


