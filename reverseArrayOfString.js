let arr=["Apple","Orange","Grapes","Mango"];

function reverseStr(str){
    let reveserdString="";
    for(let i=str.length-1;i>=0;i--){
        reveserdString += str[i];
    }
    return reveserdString;
}
for(let i=0; i<arr.length;i++){
    arr[i]=reverseStr(arr[i])
}
console.log(arr);
