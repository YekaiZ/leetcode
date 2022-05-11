const firstUniqueCharInString = (s) => {
  const charCount = s.split("").reduce((acc, next) => {
    const count = acc.get(next);
    if (count) {
      acc.set(next, count + 1);
    } else {
      acc.set(next, 1);
    }
    return acc;
  }, new Map());

  for (const [k, v] of charCount.entries()) {
    if (v === 1) {
      return s.indexOf(k);
    }
  }
  return -1;
};

console.log(firstUniqueCharInString("leetcode"));
console.log(firstUniqueCharInString(" "));
