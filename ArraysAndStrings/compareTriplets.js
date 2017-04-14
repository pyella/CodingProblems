//Hacker rank problem compare triplets


const compareArraysVal = (arr1, arr2) => {
    let compKeyVals = arr1.reduce( (acc, currVal, currIndex) => {
        if (arr1[currIndex] > arr2[currIndex]) {
           acc.arr1GreaterCnt++;
        }
        if (arr1[currIndex] > arr2[currIndex]) {
            acc.arr2GreaterCnt++;
        }
        return acc;
    }, { "arr1GreaterCnt": 0, "arr2GreaterCnt": 0 });
    return compKeyVals;
};
// arr1 [ 5, 6, 7 ] arr2  [ 3, 6, 10 ]
// Expected result 1 1

let compKeyVals = compareArraysVal( [ 5, 6, 7 ], [ 3, 6, 10 ] );
let { arr1GreaterCnt, arr2GreaterCnt } = compKeyVals;
console.log(arr1GreaterCnt+" "+arr2GreaterCnt);




