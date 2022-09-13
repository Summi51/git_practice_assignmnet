// Number is Prime or Not Prime

let count = 0;
let n = 17;
for(let i = 1; i<=n; i++){
  if(n%i==0){
    count++;
  }
}
if(count==1){
  console.log("Prime");
} else{
  console.log("Not Prime");
}



//Check whether a string is palindrome or not.

str1="";
str2= "madam";
for(let i = str2.length-1;i>=0;i--){
  str1= str1+str2[i];
}
if(str2==str2){
  console.log("Yes");
}else{
  console.log("No");
}