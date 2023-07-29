function fibonacci(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;

  let prevPrevNum = 0;
  let prevNum = 1;
  let currentNum = 0;

  for (let i = 2; i <= num; i++) {
    currentNum = prevPrevNum + prevNum;
    prevPrevNum = prevNum;
    prevNum = currentNum;
  }

  return currentNum;
}

// Test the function
// console.log(fibonacci(0)); // Output: 0
// console.log(fibonacci(1)); // Output: 1
// console.log(fibonacci(2)); // Output: 1
// console.log(fibonacci(3)); // Output: 2
// console.log(fibonacci(4)); // Output: 3
// console.log(fibonacci(5)); // Output: 5
// and so on...
