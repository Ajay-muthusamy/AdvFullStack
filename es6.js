    const add = (a,b) =>{
    let sum = a + b;
    return sum
}
console.log("Sum of two Number",add(10,20))


//forEach

arr = ['ajay','anand','dinesh','aaabbbccc']
arr.forEach((data)=>{
    console.log(data)
})


//map
arr.map((ele)=>{
    console.log(ele)
})


//destructing Operator
var  marks = [10,20,30]
var[m1,m2,m3] = marks
console.log("destructing arr",m1,m2,m3)

//spread operator
studentList = ['Tom','Jerry','Robert']
newStudentList = ['Dinesh','Anand','Ajay','Madhav']

const finalResult = [...studentList,...newStudentList]
console.log(finalResult)


//Rest Operator
function restOperator(a,b,...c){ //rest operator
    console.log(c)
    const combined = [a,b,...c] //spread operator
    console.log('Combined Array',combined);
}


restOperator(10,20,'Ajay','Dinesh','Anand','aaaadddd')
