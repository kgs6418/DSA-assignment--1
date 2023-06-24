function fun(digit) {

   let arr = Number(digit.join(''));
   const add = arr+1;
//    console.log(arr)
//    console.log(add);

const digits = String(add).split('').map(Number);

return digits

}

const digit = [1,2,3];
console.log(fun(digit))
