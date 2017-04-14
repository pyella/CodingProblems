


const diagonalDifference = (arr) => {
    let arrLen = arr.length - 1;
    let sumForwardDiagonal = 0;
    let sumBackwardDiagonal = 0;
    for (let idx = 0; idx <= arrLen; idx++) {
        sumForwardDiagonal += arr[idx][idx];
        sumBackwardDiagonal += arr[idx][arrLen - idx];
    }
    return Math.abs(sumForwardDiagonal - sumBackwardDiagonal);
};


// arr [ [ 11, 2, 4], [4, 5, 6], [10, 8, 12]]
//Result 15;

console.log(diagonalDifference([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]));
