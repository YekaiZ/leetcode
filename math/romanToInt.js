const romanToInteger = (s) => {
  const valueMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let value = 0;
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    const rule = {
      IV: true,
      IX: true,
      XL: true,
      XC: true,
      CD: true,
      CM: true,
    };
    if (rule[s.slice(i, i + 2)]) {
      value -= valueMap[curr];
    } else {
      value += valueMap[curr];
    }
  }
  return value;
};

console.log(romanToInteger("III"));
console.log(romanToInteger("LVIII"));
console.log(romanToInteger("MCMXCIV"));
