
var name = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl","Carl","adam","adam","mike","Mike"];
let uniqArr =[];
for( var i=0; i<name.length; i++){
    var element = name[i];
    var index = uniqArr.indexOf(element)
    if(index=== -1){
        uniqArr.push(element)
    }
}
console.log(uniqArr)//[ 'Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Carl', 'adam', 'mike' ]

//Using another way
//Using javascript Set method
var uniq=[];
var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
uniq = [...new Set(names)];
console.log(uniq)//[ 'Mike', 'Matt', 'Nancy', 'Adam', 'Jenny', 'Carl' ]


//Using function
var arrayDup = [1,2,3,4,7,5,4,3,5];
function removeDupEelArray(arr){
    let uniqArr =[];
    for( var i=0; i<arr.length; i++){
        var element = arr[i];
        var index = uniqArr.indexOf(element)
        if(index=== -1){
            uniqArr.push(element)
        }
    }
    return uniqArr
}
console.log(removeDupEelArray(arrayDup))//[ 1, 2, 3, 4, 7, 5 ]
console.log(removeDupEelArray(arrayDup).sort())//[ 1, 2, 3, 4, 5, 7 ]

function add(a, b){
    return a + b;
}
add("adam" + "eve")