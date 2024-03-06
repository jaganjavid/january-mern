

function removeElement(nums, val){


    let k = 0;

    for(let i = 0; i< nums.length; i++){
        if(nums[i] !== val){
            swap(nums, i, k);
            k++;
        }

        return k;
    }

    function swap(nums, i, j){
        [nums[i], nums[j]] = [nums[j], [nums[i]]]
    }

}

const nums =[3,2,2,3];
let val = 3;

let z = removeElement(nums, 3);
console.log(z);



