const occurenceOfStrInStr = (haystack, needle) => {
  if (needle === "") return 0;

  for (let idx = 0; idx < haystack.length; idx++) {
    const subStr = haystack.slice(idx, idx + needle.length);
    if (subStr === needle) {
      return idx;
    }
  }
  return -1;
};

console.log(occurenceOfStrInStr("hello", "ll"));
console.log(occurenceOfStrInStr("aaaaa", "bba"));
console.log(occurenceOfStrInStr("aaa", "a"));
