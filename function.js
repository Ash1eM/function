//First letter of name
function firstName (name)  {
  console.log(name); 
   alert("The name "+ name + " starts with " + name[0])
}

//Number divisible by 2
function divisibleByTwo(x){
    if(x % 2 == 0){
    return "true" 
} else {
    return "false" 
}
}

//Largest number in function 
function largestNum(arr) {
    console.log(Math.max(...arr));
    }


firstName();
divisibleByTwo();
largestNum();