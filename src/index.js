module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openingBrackets = new Set();
  const closingBrackets = new Set();
  const matchingPairs = {};

  for (const pair of bracketsConfig) {
    openingBrackets.add(pair[0]);
    closingBrackets.add(pair[1]);
    matchingPairs[pair[1]] = pair[0];
  }

  for (const char of str) {
    if (openingBrackets.has(char)) {
      if (char === matchingPairs[char] && stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        stack.push(char);
      }
    } else if (closingBrackets.has(char)) {
      if (
        stack.length === 0 ||
        stack[stack.length - 1] !== matchingPairs[char]
      ) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
};
