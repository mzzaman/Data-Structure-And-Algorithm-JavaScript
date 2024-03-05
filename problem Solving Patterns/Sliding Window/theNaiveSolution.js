// TODO:
//  "Find the maximum sum of sub-array of size k with the time complexity of O(N).
// Array = [1, 2, 6, 2, 4, 1], k = 3"

function findMaxSumOfSequence(listOfItems, sequenceLength) {
    if (listOfItems.length < sequenceLength) {
        return null;
    }

    let maxSum = -Infinity;
    for (let i = 0; i <= listOfItems.length - sequenceLength; i++) {
        let sum = 0;
        for (let j = i; j < i + sequenceLength; j++) {
            sum += listOfItems[j];
        }
        maxSum = Math.max(maxSum, sum);
    }

    return maxSum;
}

const input = [1, 2, 6, 2, 4, 1],
    windowSize = 3;

console.log(
    `Maximum sum of a sub-array of window size ${windowSize} is ${findMaxSumOfSequence(
        input,
        windowSize
    )}`
);