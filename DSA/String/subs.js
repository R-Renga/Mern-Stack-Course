function longestsubs(str) {
    let j = 0;
    let map = {};
    let maxw = 0;
    let res = "";
  
    for (let i = 0; i < str.length; i++) {
      if (map[str[i]] !== undefined && map[str[i]] >= j) {
        j = map[str[i]] + 1;
      }
  
      map[str[i]] = i;
  
      if (i - j + 1 > maxw) {
        maxw = i - j + 1;
        res = str.slice(j, i + 1);
      }
    }
  
    return res;
  }
  
  console.log(longestsubs("pwwke"));
  