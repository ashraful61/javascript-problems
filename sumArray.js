var numbers = [45, 65, 67, 34, 98, 87]
var sum = 0;
for(var i=0; i<numbers.length; i++){
    var element = numbers[i];
    sum = sum + element

}
console.log('Total sum of numbers array is ', sum)//396

// using function

function getSumArray(numarray){
    var sum = 0;
        for(var i=0; i<numarray.length; i++){
            var element = numbers[i];
            sum = sum + element

        }
        return sum
}
var result = getSumArray(numbers)//396
console.log('Sum numbers array via getSumArray function ', result)





//Extra method
// var arrt = [1, 2, 3,5,89,5,5,5,3,8,9];
// var max = Math.max(...arrt);
// console.log(max)

// var array = [3 , 6, 2, 56, 32, 5, 8, 32];
// var largest= 0;

// for (i=0; i<=largest;i++){
//     if (array[i]>largest) {
//         var largest=array[i];
//         console.log(largest)
//     }
// }
// console.log(largest)
const arr = [1, 2, 3, 4,10,80];

// function total(arr) {
//     if(!Array.isArray(arr)) return;
//     return arr.reduce((a, v)=>a + v);
//   }

function total(ar) {
    let sum=0;
    ar.forEach(each => {
      sum+=each;
    });
    return sum;
  };
   console.log(total(arr))