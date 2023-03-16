const reverseString = function(inputWord) {
    // Use a loop from 0 to string length and build a new string using the array methods
    // pop() returns the last element of an array
    let strLen = inputWord.length; // Length of the string.
    console.log(strLen);
    let arrStr = inputWord.split("");
    console.log(arrStr);
    let newStr = [];
    if (strLen === 0) {
        newStr = "";
    } else {
        for (let count = 0; count < strLen; count ++) {
            newStr[count] = arrStr.pop();
        }
        return(newStr.join(""));        
    }    
};

console.log(reverseString("Hello!"));
