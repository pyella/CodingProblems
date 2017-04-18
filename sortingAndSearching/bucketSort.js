



function bucketSort(arr) {
    let ageArray = new Array(200).fill(0);
    let agePersonMap = {};
    let sortedArray = [];

    for (let idx = 0; idx < arr.length; idx++) {
        if ( agePersonMap[arr[idx].AGE] instanceof Array) {
            agePersonMap[arr[idx].AGE].push(arr[idx]);
        }
        else {
            agePersonMap[arr[idx].AGE] = [arr[idx]];
        }
        ageArray[arr[idx].AGE] += 1;
    }

    for (let ageIdx = ageArray.length - 1; ageIdx >= 0; ageIdx--) {
        if (ageArray[ageIdx] > 0) {
           sortedArray.push(...agePersonMap[ageIdx]);
        }
    }
    return sortedArray;
}

//Tests
bucketSort([{"AGE": 10}, {"AGE": 199}]);



