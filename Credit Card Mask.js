function maskify(cc) {
    let str=[];
       
        if(cc.length>4){
            for(i=0;i<cc.length-4;i++){
                str[i]="#";
            }
         
            for(i=cc.length-4;i<cc.length;i++){
                str[i]=cc[i];
            }
            print=str.join('');
            return print;
        }
        else{
        return cc;
        }

}

 console.log(maskify("abcdef")); 