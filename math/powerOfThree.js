const powerOfThree = (n) => {
  if (n <= 0) return false;
  const max = Math.pow(3, 20);
  return max % n === 0;
};

console.log(powerOfThree(27));
console.log(powerOfThree(0));
console.log(powerOfThree(9));
console.log(powerOfThree(1));
