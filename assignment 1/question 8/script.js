function fun(arr) {

    let n = arr.length;
    let count = 0;
    let resultArr =[];

for (let i = 0; i < n-1; i++) {
   if(arr[i+1] === arr[i]){
    resultArr.push(arr[i])
    count = arr[i+1]+1;
    resultArr.push(count)

   }
    
}
return resultArr;
   
}

const arr = [1,2,2,4]


console.log(fun(arr));
