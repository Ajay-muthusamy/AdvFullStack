//1. Assignment Operator

a = 10;
console.log(a)

//2. Unary Operator
a++;
console.log(a)

//3.Arithemetic Operator
var b = 20 ,c = 40;
let cnt = 0,sum = 0;

if(b >= c){
    sum = b + c;
    console.log("Addition: ",sum)
    cnt++;
}else if(b==c){
    sum = b - c;
    console.log("Subtract: ",sum)
    cnt = -1
}else if(b<=c){
    sum = b * c;
    console.log("Multiply: ",sum)
    cnt++;
}else{
    sum = b / c;
    console.log("divide: ",sum)
    cnt++;
}
console.log("count :",cnt)



var arr = [10,20,30,40,50]
var sumResult = 0;
let last  = 0;
for(var a = 0;a<arr.length;a++){
    sumResult+=arr[a]
     last = arr[arr.length-1]
}
if(sum == last ){
    console.log("Sum of the Array is Equal to Last element in the Array: ",true)
}
else{
    console.log("Not Equal")
}

console.log("Sum of the Array is : ",sumResult)

//Relational Operator
var a1 = 20;
var a2 = 40;
if(a1 === a2){
    console.log(true)
}else{
    console.log(false)
}

if((a1>=a2) && (a2 == 10)){
    console.log(true)
}else{
    console.log(false)
}

if((a1!=a2) || (a2 == 40)){
    console.log(true)
}
else{
    console.log(false)
}


var log1 = 10;
var log2 = 20;
console.log(log1 >> 2)
console.log(log2 << 2)
console.log(log2 & log1)


const age = 11
age>=18 ? (console.log("Eligible for vote")):(console.log("Note Eligible for vote"))