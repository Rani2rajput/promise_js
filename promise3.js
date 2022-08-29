// var proObj= new Promise((resolve,reject) => {
//     // resolve()
//     reject()
// });
// proObj.then(()=>{
//     console.log("promise is fullfield")
// }).catch(()=>{
//     console.log("promise is reject")
// });





var promise=(n)=>{
    return new Promise((resolve,reject)=>{
      if (n%2==0)
          resolve("i am selected")
      else
          reject("i am rejected")
      })
  }
  promise(3).then((msg)=>{
      console.log(msg)
  }).catch((msg)=>{
      console.log(msg)
  })
  


