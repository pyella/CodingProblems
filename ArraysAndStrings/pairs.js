

const hasPairs = function(arr, sum) {
    let complimentObj = {};

    for (let idx = 0; idx < arr.length; idx++) {
        if (complimentObj[arr[idx]]) {
            return true;
        }
        else {
            complimentObj[Math.abs(sum - arr[idx])] = true;
        }
    }
    return false;
};


console.log(hasPairs([1,2,3,9], 8));

console.log(hasPairs([1,2,4,4], 8));
