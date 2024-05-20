let arr=[1,2,3,2,5,3];
let obj={}
for(let i=0;i<arr.length;i++){
    obj[arr[i]]=true;

}
console.log(obj);//{ '1': true, '2': true, '3': true, '5': true }
arr.length=0;
console.log(arr);//[]
for(let key in obj){
    arr[arr.length]=+key;
}
console.log(arr);//[ 1, 2, 3, 5 ]

