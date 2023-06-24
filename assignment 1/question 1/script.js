function indices(nums,target) {

    for (let i = 0; i < nums.length; i++) {
       for (let j = 1; j < nums.length; j++) {
       if(nums[i] + nums[j] == target){
        return [i,j]
    }
        
       }
    }
   return "The target is out of range."    //Returning a message if the target value is not in the range of Array.//
}


//my inputs are:-//
const nums =[2,4,6,8,10,12,14,16,18,20];
const target = 10;

console.log(indices(nums,target))


