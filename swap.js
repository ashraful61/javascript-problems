var a = 5
var b = 7;
console.log("Before swap: a = ",a, ", b=", b)//Before swap: a =  5 , b= 7
var temp = a
 a = b
 b = temp
 console.log("After swap: a = ",a, ", b=", b)//After swap: a =  7 , b= 5

 //Swap variable withut Temp.

 var a = 10
 var b = 12
 console.log("Before swap: a = ",a, ", b=", b)
 a = a + b
 b = a - b
 a = a - b
 console.log("After swap: a = ",a, ", b=", b)


//Using Javascript built in function
var p=10; q=20;
// console.log("After swap: p = ",p, ", q =", q) why this line  not commenting code not will work 
 [p, q]=[q, p];
console.log("After swap: p = ",p, ", q =", q)




// console.log(p,q)

