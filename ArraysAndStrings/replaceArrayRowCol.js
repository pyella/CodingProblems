//In a 2D array if it contains a value of 0, Replace the entire row and column with a given value.
const setArrayRowColumn = (arr, val) => { 
    let newArr = [ ...arr ]; //Unfortunately es6 doesn't copy for multiple dimensions array. 
    //This spread operator here wouldn't be needed but keeping it as a lesson learnt.
    let rowIndexes = new Array(newArr.length).fill(false);
    let colIndexes = new Array(newArr.length).fill(false);
    
    for (let rowIndex = 0; rowIndex < newArr.length; rowIndex++) { 
        for (let colIndex = 0; colIndex < newArr.length; colIndex++) { 
            if (newArr[rowIndex][colIndex] === 0) { 
                rowIndexes[rowIndex] = true;
                colIndexes[colIndex] = true;
            }
        }
    }

    for (let rowIndex = 0; rowIndex < newArr.length; rowIndex++) { 
        for (let colIndex = 0; colIndex < newArr.length; colIndex++) { 
            if (rowIndexes[rowIndex] || colIndexes[colIndex]) {
                newArr[rowIndex][colIndex] = val;
            }
        }
    }
    return newArr;
};
let zeroValuesArray = [ [ 1, 2, 0, 4 ], [ 5, 0, 6, 7 ], [ 8, 9, 10, 11 ], [ 12, 13, 14, 15 ]];


console.log("New Array :");
//Had to do JSON.parse(JSON.stringify to make a copy of multi dimensions array as spread operator in function wouldn't help me in that.
console.log(setArrayRowColumn(JSON.parse(JSON.stringify(zeroValuesArray)), 0));
console.log("Old Array : ");
console.log(zeroValuesArray);

