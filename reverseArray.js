/*
let arr=[1,2,3,4,5,6,7];
for(start=0,end=arr.length-1;start<end;start++,end--){
    arr[start]=arr[start]+arr[end];//1+7=8;//arr[start]=8
    arr[end]=arr[start]-arr[end];//8-7=1;//arr[end]=1
    arr[start]=arr[start]-arr[end];//8-1=7//arr[start]=7
}
console.log(arr);//7, 6, 5, 4,3,2,1
*/
//Reverse array in place
let arr = ["Apple","Orange","Grapes"];
function reverse(arr){
   for(let start=0,end=arr.length-1;start<end;start++,end--){
     temp=arr[start];
     arr[start]=arr[end];
     arr[end]=temp;
}
return arr;
}
console.log(reverse(arr));