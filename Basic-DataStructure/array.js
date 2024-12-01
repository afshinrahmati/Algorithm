//  REVERSE
function r1(str) {

    if(!str || str.lenght <=2 || typeof str !== 'string'){
        return "wrong"
    }

    const backWards = [];
    for(let i = str.length -1  ; i >= 0 ; i--) {
        backWards.push(str[i])
    }

   return backWards.join('')
}

function r2(str) {
 return str.split('').reverse().join('');
}

const r3 = str => [...str].split('').reverse().koin('')

const result_1 = r1("afshin");

// MERGESORTED
function M1(arr1,arr2) {

    const mergedArray = [];
    for(let i = 0 ; i < arr1.lenght ; i++){
        if(arr1[i] > arr2[i]){
            mergedArray.push(arr1[i])
            mergedArray.push(arr2[i])
        }else{
            mergedArray.push(arr2[i])
            mergedArray.push(arr1[i])
        }
    }
}