var greet=23
let sum= new Promise(function(resolve,reject){
    if (greet%2==0){
        resolve("even")
    }
    else{
        reject("odd")
    }

})
sum.then(()=>{
    console.log("its true")
})
.catch(()=>{
    console.log("its not true")
})