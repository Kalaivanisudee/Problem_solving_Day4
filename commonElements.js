let arr1=[1,2,3,4,5,6,7,8,9,10];
let arr2=[11,12,13,14,15,3,5,16,17];
let obj={}
for(let i=0; i<arr1.length;i++){
obj[arr1[i]]=true;
}
console.log(obj);
let common =[];
for(let j=0;j<arr2.length;j++){
    if(obj[arr2[j]]) {
        common[common.length] = arr2[j];
    }
}
console.log(common);//[ 3, 5 ]