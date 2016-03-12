/*jshint multistr:true */

var text = "Hello my name is Akash. I'm learning JavaScript! \
Creating this program to practice loops,arrays, booleans and more! This is a project to see if the name Akash is mentioned! \
Blah blah blah Akash blah blah.";
var myName = "Akash";
var hits = [];

for (var i = 0; i < text.length; i++){
    
    if (text[i] === 'A'){
        for (var j = i; j < i+myName.length; j++){
            hits.push(text[j]); 
        }
    }    
}
if (hits.length === 0) {
    console.log("Your name was not found!");
}
else {
    console.log(hits);
}
