// Create a map to store numbers and their indexes
// Add 1st element of nums array to the map
// Iterate over the remaining nums
//    Calculate difference between the target and current num
//    Look for difference in the map
// Add num to map

const twoSumSingleSolution = (nums, target) => {
  const numsMap = {};

  numsMap[nums[0]] = 0;

  for (let i = 1; i < nums.length; i++) {
    const neededValueOfPair = target - nums[i];

    if (neededValueOfPair in numsMap) {
      return [numsMap[neededValueOfPair], i];
    }

    numsMap[nums[i]] = i;
  }
};

const twoSumSolutionsArray = (nums, target) => {
  const numsMap = {};
  const results = [];

  numsMap[nums[0]] = 0;

  for (let i = 1; i < nums.length; i++) {
    const neededValueOfPair = target - nums[i];

    if (neededValueOfPair in numsMap) {
      results.push([numsMap[neededValueOfPair], i]);
    }

    numsMap[nums[i]] = i;
  }

  return results;
};
