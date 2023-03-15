const repeatString = function(repeatPhrase, numRepeats) {
    let returnString = "";
    if (numRepeats < 0) {
        return("ERROR");
    } else {
            for (let count = 0; count < numRepeats; count ++) {
                returnString += repeatPhrase;
            }
        return(returnString);
    }
    
};
// repeatString('hey', 3) // returns 'heyheyhey'
// Do not edit below this line
module.exports = repeatString;
