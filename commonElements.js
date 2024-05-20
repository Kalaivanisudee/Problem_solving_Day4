let arr1=["apple","orange"];
let arr2=["grape","apple"];
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
console.log(common);//[ apple]