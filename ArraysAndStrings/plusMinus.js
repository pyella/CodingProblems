

const plusMinusZeroFractions = (arr) => {
    return arr.reduce( (acc, val) => {
        if (val > 0) {
            acc.positiveCount++;
        }
        else if (val < 0) {
            acc.negativeCount++;
        }
        else {
            acc.zeroCount++;
        }

        return acc;
    }, { "positiveCount": 0, "negativeCount": 0, "zeroCount": 0 });
};

let testArray = [ -4, 3, -9, 0, 4, 1 ];
let testArrCount = testArray.length;

let {positiveCount, negativeCount, zeroCount} = plusMinusZeroFractions(testArray.map(Number));


console.log((positiveCount / testArrCount).toFixed(6));
console.log((negativeCount / testArrCount).toFixed(6));
console.log((zeroCount / testArrCount).toFixed(6));
