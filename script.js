function reverseArray (...iArray) {
    let oArray = [];
    lastPos = iArray.length;
    for (oArray in iArray) {
        oArray.push(iArray[lastPos]);
    }
    console.log(oArray);
}
reverseArray(1,2,3,4);

