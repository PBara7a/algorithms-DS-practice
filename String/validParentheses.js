// Create an array and push the first parentheses in
// Iterate over remaining parentheses
//    if the current parentheses is the closing pair of the last parentheses in the array
//        remove last parentheses from array
//    otherwise
//        push current parentheses into the array
// The string is valid if the array is empty at the end

const validParentheses = (str) => {
  const parenthesesStack = [];
  parenthesesStack.push(str[0]);

  const parenthesesPairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 1; i < str.length; i++) {
    const lastIn = parenthesesStack[parenthesesStack.length - 1];

    if (str[i] === parenthesesPairs[lastIn]) {
      parenthesesStack.pop();
    } else {
      parenthesesStack.push(str[i]);
    }
  }
  return parenthesesStack.length === 0;
};
