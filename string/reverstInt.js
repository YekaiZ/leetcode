const reverseInt = (x) => {
  const maxInt = 0x7fffffff;
  const minInt = -0x7fffffff;

  if (x > maxInt || x < minInt) return 0;

  const num = +Math.abs(x).toString().split("").reverse().join("");

  return x > 0 ? num : num * -1;
};

console.log(reverseInt(120));
console.log(reverseInt(123));
console.log(reverseInt(-321));
