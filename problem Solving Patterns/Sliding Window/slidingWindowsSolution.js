// TODO:
//  "Find the maximum sum of sub-array of size k with the time complexity of O(N).
// Array = [1, 2, 6, 2, 4, 1], k = 3"

function findMaxSumOfSequence(listOfItems, sequenceLength){
    if (listOfItems < sequenceLength ){
        return null;
    }

    let start = 0;
    let end = 0;
    let maxSum = 0;
    let windowSum = 0;

    while (end < sequenceLength){
        windowSum += listOfItems[end];
        end++;
        maxSum = windowSum;
    }

    while (start + sequenceLength < listOfItems.length){
        windowSum = windowSum - listOfItems[start] + listOfItems[end];
        maxSum = Math.max(windowSum, maxSum);
        start++;
        end++;
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