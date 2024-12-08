//  which number repeat earler
// [2,5,1,2,3,4,1,2,4]

function H1(array) {
    const obj = {};

    for(let  i = 0 ; i < array.length ; i++) {
        if(obj[array[i]] !== undefined ) {
            return array[i];
        }else{
            obj[array[i]] += 1;
        }
    }
    return "undefined"
}

const q1 = H1([2,5,1,2,3,4,1,2,4]);
console.log(q1)