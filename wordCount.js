var speech = "Amar sonar Bangla ami tomay valobashi. hello i     chh   am Ashraf. ass"
var count =0;
for(var i=0; i<speech.length; i++){
    var ch = speech[i]
  if(ch == " " && speech[i-1] != " "){
      count++;
  }
}
count++;
console.log(count)