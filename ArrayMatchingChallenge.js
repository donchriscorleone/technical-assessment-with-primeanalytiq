//HHave the function ArrayMatching(strArr) read the array of strings stored
// in strArr which will contain only two elements, both of which will represent
// an array of positive integers. For example: if strArr
// is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], then both elements in the input
// represent two integer arrays, and your goal for this challenge is to
// add the elements in corresponding locations from both arrays. For the
// example input, your program should do the following additions:
// [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then equals [6, 4, 13, 17].
// Your program should finally return this resulting array in a string format
// with each element separated by a hyphen: 6-4-13-17.
//
// If the two arrays do not have the same amount of elements, then simply
// append the remaining elements onto the new array (example shown below). B
// oth arrays will be in the format: [e1, e2, e3, ...] where at least one element
// will exist in each array.

function ArrayMatchingChallenge(strArr) {
  let arr1 = JSON.parse(strArr[0]);
  let arr2 = JSON.parse(strArr[1]);
  let newArray = [];

  for (let num = 0; num < arr2.length; num++) {
    let newNum = arr1[num] + arr2[num];
    if (isNaN(newNum)) {
      newNum = arr2[num];
    }
    newArray[num] = newNum;
  }

  newArray = newArray.map((num) => num).join("-");
  return newArray.toString();
}

function run_test() {
  let test_case_1 = ArrayMatchingChallenge(["[1, 2, 5, 6]", "[5, 2, 8, 11]"]);
  console.log(
    "Test Case 1: ",
    test_case_1 === "6-4-13-17" ? "Correct" : "Incorrect "
  );
  let test_case_2 = ArrayMatchingChallenge(["[10, 1, 41]", "[2, 1, 0, 18]"]);
  console.log(
    "Test Case 2: ",
    test_case_2 === "12-2-41-18" ? "Correct" : "Incorrect"
  );
}

run_test();
