function findMedian(arr) {
    const sortedArr = arr.slice().sort((a, b) => a - b);
    const len = sortedArr.length;
    const middle = Math.floor(len / 2);
    if (len % 2 === 0) {
        console.log((sortedArr[middle - 1] + sortedArr[middle]) / 2);
    } else {
        console.log(sortedArr[middle]);
    }
}

findMedian([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);