count=""
let countvalue=new Promise(function(resolve,reject){
    if (count){
        resolve("Probject value is count")
    }else{
        reject("Probject value is not count")
    }

});
console.log(countvalue);

