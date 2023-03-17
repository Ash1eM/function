function firstName (name)  {
  console.log(name); 
   alert("The name "+ name + " starts with " + name[0])
}
firstName();

function divisibleByTwo(x){
    if(x % 2 == 0){
    return "true" 
} else {
    return "false" 
}
}
divisibleByTwo();


function largestNum(arr) {
    console.log(Math.max(...arr));
    }
largestNum();