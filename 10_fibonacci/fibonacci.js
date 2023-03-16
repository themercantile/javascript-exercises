const fibonacci = function(indexNum) {
    let myFib = 0;
    if (indexNum < 0 ) {
        return ("OOPS");
    } else if (typeof(indexNum) === 'string') {
        indexNum = parseInt(indexNum);
    } 
    for (let count = 1; count <= indexNum; count ++) {
        myFib[count] = myFib[count-1] + 
    }
    return myFib;
    
};
// Given a number, say 4, we start with 0, 1, 1, 2, 3, 5, 8, 13
// Use typeof to see if strings are asseptable
// Do not edit below this line
module.exports = fibonacci;
