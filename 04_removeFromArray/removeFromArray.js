const removeFromArray = function(startList, ...excludeList) {
    let excludeIndex = -1;
    
    for (i = 0; i < excludeList.length; i++) {
        excludeIndex = startList.indexOf(excludeList[i]);
        
        if (excludeIndex !== -1) {
            startList.splice(excludeIndex,1);
        };
    };

    return startList;
};

// Do not edit below this line
module.exports = removeFromArray;
