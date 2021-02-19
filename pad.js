let array = [1,2,3,4,5];

let beg =0;
let end = -1;
let sub = [];
let limit = -1;
let len = array.length -1; // returns 1 
let ssub = array.slice(limit ); // returns a copy of element at end of input array
let elim 

// array.length = 5 


const move = array => {
    for (let counter = 0; counter <= len; counter ++) {
        sub = array.slice[end];
        end --;
        array.pop();
        array.push(sub);
        console.log(array);

    }
}
move(array);