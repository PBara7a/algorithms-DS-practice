// Split the parentheses string into an array
// While the array has a pair of valid parentheses
//    Iterate over the array removing valid pairs of parentheses
// The string is valid if the array is empty at the end

const isValid = (str) => {
  let parenthesesArr = str.split("");

  while (hasValidParentheses(parenthesesArr.join(""))) {
    for (let i = 0; i < parenthesesArr.length - 1; i++) {
      const parenthesesPair = parenthesesArr[i] + parenthesesArr[i + 1];

      if (isValidParenthesesPair(parenthesesPair)) {
        parenthesesArr.splice(i, 2);
        i--;
      }
    }
  }
  return parenthesesArr.length === 0;
};

const isValidParenthesesPair = (parens) =>
  parens === "()" || parens === "{}" || parens === "[]";

const hasValidParentheses = (parens) =>
  parens.includes("()") || parens.includes("{}") || parens.includes("[]");
