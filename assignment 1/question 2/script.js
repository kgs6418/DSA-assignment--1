function fun(nums,val) {
let k = 0;
  for (let i = 0; i < nums.length; i++) {
   if(nums[i]!==val){
    nums[k] = nums[i];
    k++
   }
      
}
return k;
}
const nums = [3,2,2,3];
const val =3 ;

const left = fun(nums,val)
console.log(left)

console.log(nums.splice(0,left))