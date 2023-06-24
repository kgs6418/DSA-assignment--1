function fun(nums) {
   let i = 0;
   for (let j = 1; j < nums.length; j++) {
    if(nums[i] == nums[j]){
        return true;
    }
    
}
return false;
}

let nums = [1,2,3,1]

console.log(fun(nums))
