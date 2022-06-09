function findUniq(arr) {
if (arr.length==1) {
    return arr[0];
}
else{
for(i=0;i<arr.length;i++){
    for(j=1;j<arr.length;j++){
        if(arr[i]!=arr[j]){
            if(arr[i]==arr[j+1]){
                return arr[j];
               
            }
            else{
                if (j==(arr.length-1)) {
                    return arr[arr.length-1];
                    
                }
            return arr[0];
            }
        }
    }
}
}
}
a=[1,1,5,1,1];
console.log(findUniq(a)); 