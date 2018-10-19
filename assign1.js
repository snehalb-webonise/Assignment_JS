var number = [];
var x=5;
var count ={};

for(let i=0;i<x;i++){
 	 number[i]= prompt('enter elemnt :' + (i+1));
}
console.log(number);

number.forEach(function(i) { count[i] = (count[i]||0) + 1;});


console.log(count);
