function fun(arr,m) {

    let z =0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
          arr[z] = arr[i];
          z++;
        }
      }
    
      for (let i = z; i < arr.length; i++) {
        arr[i] = 0;
      }
    }




let arr = [0,1,0,3,12]
let m = arr.length;  


fun(arr,m)

console.log(arr)