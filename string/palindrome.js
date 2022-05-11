const palindrome = (s) => {
  const strOnly = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  //2 pointer
  for (let i = 0, v = strOnly.length - 1; i < strOnly.length; i++, v--) {
    if (strOnly[i] !== strOnly[v]) return false;
  }
  return true;
};

console.log(palindrome("A man, a plan, a canal: Panama"));
console.log(palindrome("race a car"));
console.log(palindrome(" "));
console.log(palindrome("0P"));
