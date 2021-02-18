// script for reverseArrayInPlace, taking external variable with array elements and reversing elements within variable

let arrayValue = [1,2,3,4,5];

let bPos = 1;

const remove = (arrayValue, bPos) => {
    let aPos = 0;
    
    console.log(arrayValue);
     arrayValue.slice(aPos, bPos)
     
        .concat(arrayValue.slice(bPos+1));
    console.log(arrayValue);
}

remove(arrayValue,bPos  );

const move = (arrayValue, index) => {
    null;
}

const reverseArrayInPlace = (arrayValue) => {
    let elemCopy =[];
    let lenArray = arrayValue.length - 1;
    let reps = ((Math.floor(lenArray) / 2)-1)
    let pos = 0;
    let ePos = 1;
    console.log(reps);

    // elemCopy slice loop

    for (let counter = 0; counter <= reps; counter ++) {
        // creates elemCopy
        elemCopy = arrayValue.slice(pos,ePos);
        // moves 5th element to position 0 on array
        
        console.log(elemCopy);
        pos ++;
        ePos ++;
    }
    

    
    console.log(arrayValue);
}
    
// reverseArrayInPlace(arrayValue);

/*
    for (let counter = 0; counter <= len; counter ++) {
        sub = (arrayValue.slice(pos,ePos));
        console.log(sub);
        pos ++;
        ePos ++;
        
    }
*/

/* popping last element and unshifting same element to front of array

for (let count = 0; count <= arrayValue.length; count ++) {
    arrayValue.unshift(arrayValue.pop());  
    console.log(arrayValue);     
*/