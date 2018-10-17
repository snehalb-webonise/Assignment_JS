var number = [];
var x=5;
var count ={};

for(let i=0;i<x;i++){
 	 number[i]= prompt('enter elemnt :' + (i+1));
}
console.log(number);

for(let i =0; i < number.length;i++){
 	 count[number[i]] = (count[number[1]] || 0)+1;
}
console.log(count);
