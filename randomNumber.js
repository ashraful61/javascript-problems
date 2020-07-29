var num = 2.1234;
var num2 = 5.6798
var result = Math.floor(num);
var result2 = Math.ceil(num)
var result3 = Math.round(num)
var result4 = Math.round(num2)
console.log(result)//2
console.log(result2)//3
console.log(result3)//2
console.log(result4)//6

// var randomNumber = Math.random()*10//
var randomNumber = Math.random()*6
var result5 = Math.round(randomNumber)
console.log('Random Number:',result5)

//Using For Loop

for (var i=0; i<10; i++){
    var randomNumber = Math.random()*6
    var result5 = Math.round(randomNumber)
    console.log('Random Number Using For Loop:',result5)//Otput will show ten number from 1 to 6.
}