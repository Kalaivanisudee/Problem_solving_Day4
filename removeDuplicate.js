let arr=["apple","grapes","apple","orange","grapes"];
let obj={}
for(let i=0;i<arr.length;i++){
    obj[arr[i]]=true;

}
console.log(obj);//{ apple: true, grapes: true, orange: true }
arr.length=0;
console.log(arr);//[]
for(let key in obj){
    arr[arr.length]=key;
}
console.log(arr);//[ 'apple', 'grapes', 'orange' ]

