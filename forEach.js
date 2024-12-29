arr = [10,20,30,[40.5,50.6],'a','KEC',true]

arr.forEach((elemen,index) => {
    console.log(index,elemen)
});


obj ={
    "firstName":"ajay",
    "lastName":"M",
    "age":30
}

for (const [key,value] of Object.entries(obj)) {
    console.log("for of loop",key,value)
}



// for(var key in obj){
//     const value = obj[key]
//     console.log("For in key",key,"and it's value ",value)
// }