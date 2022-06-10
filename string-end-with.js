function solution(str, ending){
    let count=0;

    for(let i=str.length-1;i>-1;i--){

      for( let j=ending.length-1;j>-1;j--){
        if(str[i]==ending[j]){
          count++;
        }
      }
    }
    if(count==ending.length){
      return true;
    }
    else
      return false;
  }
  console.log(solution('abcd', 'b'));