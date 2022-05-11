fizzbuzz = (n) => {
  return Array.from({ length: n }, (_, i) => i + 1).map((v) =>
    v % 15 === 0
      ? "FizzBuzz"
      : v % 5 === 0
      ? "Buzz"
      : v % 3 === 0
      ? "Fizz"
      : v.toString()
  );
};

console.log(fizzbuzz(3));
console.log(fizzbuzz(5));
console.log(fizzbuzz(15));
