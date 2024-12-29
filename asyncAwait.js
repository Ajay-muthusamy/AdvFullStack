async function funName() {
  setTimeout(() => {
    console.log("KEC FunName");
  }, 1000);
  return await "KEC 1";
}

arrowFun = async () => {
  setTimeout(() => {
    console.log("KEC FunName1");
  }, 4000);
  return await "KEC 2";
};

// console.log(funName())
funName()
  .then((resolve) => console.log("Promise Resolved", resolve))
  .catch((e) => console.log("Promise Rejected", e));
// arrowFun()

async function sample() {
    setTimeout(()=>{
        console.log("Promise")
    },3000)
    return  "Await async"
}

console.log(sample())
