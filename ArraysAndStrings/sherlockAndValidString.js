


const isValidString = (strInput) => {
    let isValid = false;

    let charOccObj = strInput.split("").reduce( (acc, value) => {
      acc[value] ? acc[value] += 1 : acc[value] = 1;
      return acc;
    }, {});
    
    let occCountObj = {};

    for (let key in charOccObj) {
        occCountObj[charOccObj[key]] ? occCountObj[charOccObj[key]] +=1 : occCountObj[charOccObj[key]] = 1;
    }

    let occCountObjKeysLength = Object.keys(occCountObj).length;
    if (occCountObjKeysLength === 1) {
       isValid = true;
    }
    else if (occCountObjKeysLength === 2) {
        for (let occCountObjKey in occCountObj) {
            if (occCountObj[occCountObjKey] === 1) {
                isValid = true;
            }
        }

    }
    else {
         isValid = false;
    }

    return isValid;
};


console.log(isValidString("aabbc"));//true
console.log(isValidString("aabbcd"));//false