function reverseString(str){
    var reverse = "";
    for(var i=0; i<str.length; i++ ){
      var  char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
var state = "Hello word";
var rs = reverseString(state);
console.log(rs)//drow olleH

//Using javascript function
var inputString = "I love you"
console.log(inputString.split("").reverse().join(""))//uoy evol I