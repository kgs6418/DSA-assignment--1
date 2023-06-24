function fun(nums1,m,nums2,n,) {
    // const merge = nums1.concat(nums2)
    // merge.sort();

    let i = m-1;
    let j = n-1;
    let k = m+n-1;
    
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
          nums1[k] = nums1[i];
          i--;
        } else {
          nums1[k] = nums2[j];
          j--;
        }
        k--;
   
}
while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}

const nums1 = [1,2,3];
const m =nums1.length;  //3

const nums2 = [2,5,6];
const n =nums2.length;  //3


fun(nums1,m,nums2,n,);

console.log(nums1)