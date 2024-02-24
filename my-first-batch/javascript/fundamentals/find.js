

function myFind(item, myArr){
    for(let i = 0; i < myArr.length; i++){    
        if(myArr[i] === item){
            return myArr[i];
        }
    }
    return -1;
}

const arr = [1,2,2,3,4,5];
const result = myFind(2, arr);

console.log(result);