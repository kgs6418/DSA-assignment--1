function fun(arr,target,start,end) {
    // base consition check//
   if(start > end) {
    return false }

    //finding the middle index//
    let mid = Math.floor((start+end)/2);

     // Compare mid with given key target
    if(arr[mid] == target){
        return arr.indexOf(arr[mid])
    }

    // If element at mid is greater than target,
    // search in the left half of mid
    if(arr[mid] > target){
            return fun(arr,target,start,mid-1)
                 }else{
                    return fun(arr,target,mid+1,end)

                 }
    }

// example:-//

const arr = [1,2,3,4,5,6,7,8,9];
const target = 9;

console.log(fun(arr,target,0,arr.length-1))