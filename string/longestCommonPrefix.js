const longestCommonPrefix = (strs) => {
  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    const letter = strs[0][i];
    const result = strs.every((v) => v[i] === letter);
    if (result) {
      prefix += letter;
    } else {
      return prefix;
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
