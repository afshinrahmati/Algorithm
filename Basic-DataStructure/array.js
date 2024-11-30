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

const result_1 = r1("afshin");

console.log(result_1)