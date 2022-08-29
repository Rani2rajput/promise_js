let promise = new Promise(function(resolve, reject){
    //do something
});const fun2=(a,b)=>{
    setTimeout(()=>{
        console.log("fun2 is starting",a)
        b()
    },3000);
    // b()
    

}
const fun1=()=>{
    console.log("fun1 is starting")
    fun2(2);
    console.log("fun1 is starting")

}
fun1();

