const nums = [1,2,3,4,5,6,7,8,9];
let i =0;
while(i !== nums.length){
    i++;
    if(nums[i] === 4){
        continue;
    }
    console.log(i);
    if(nums[i]===8){
        break;
    }
}