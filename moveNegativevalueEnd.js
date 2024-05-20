let arr=[3,-1,4,-2,7,-5];
// console.log(arr.sort((a,b)=>b-a));//[ 7, 4, 3, -1, -2, -5 ] but we need [3,4,7,-1,-2,-5]

//method-1
/*
arr.sort((a,b)=>{
    if(a>=0 && b<0){
        return -1;//a should come befor b.
    }else if(a<0 && b>=0){
        return 1;//b should come before a.
    }else{
        return 0;//No need to change the order
    }
})
console.log(arr);//[ 3, 4, 7, -1, -2, -5 ] 
*/
//Method-2
let postiveArr=[];
let negativeArr=[];
for (let i=0;i<arr.length;i++){
    if(arr[i]>=0){
        postiveArr.push(arr[i]);
    }else{
        negativeArr.push(arr[i]);
    }
}
let resultArray=postiveArr.concat(negativeArr);
console.log(resultArray);//[ 3, 4, 7, -1, -2, -5 ]



