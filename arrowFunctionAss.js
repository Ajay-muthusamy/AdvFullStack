// Arrow Function Assignment

//1. Arrow Function without argument
greetingUser = ()=>{
    return 'Good Evening User!!'
}
console.log(greetingUser());

// 2. Arrow Function with argument
greetingUserarg = (myName)=>{
   return `Good Evening ${myName}`
}
console.log(greetingUserarg('Ajay M'))


// 3. Arrow Function without parameter
greetingUserPar = ()=>{
    console.log('Good Evening User!!') 
}
greetingUserPar();


// 4. Arrow Function with parameter
greetingUserPar1 = (myName)=>{
    console.log(`Good Evening ${myName}`)
 }
greetingUserPar1('Ajay M')
 

