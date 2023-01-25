function sum(fromN, toN) {
  let sum = 0;
  for (let i=fromN; i <= toN; i++) {
    sum+=i;
  }
  return sum;
}

module.exports = sum;