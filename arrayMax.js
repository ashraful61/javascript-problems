var marks = [45, 65, 67, 34, 98, 87]
var max = marks[0]

for (var i=0; i<marks.length; i++ ){
    var element = marks[i]
    if (element > max){
        max = element
    }
}
console.log('Max value of marks array is ',max)//98