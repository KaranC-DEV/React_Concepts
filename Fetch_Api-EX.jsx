// debugger;
// let data1 = fetch("https://fakestoreapi.com/products")
// data1.then((res)=>{
//     res.json()
// }).then((data)=>console.log(data))
// .catch((e)=>{
//     console.log(e)
// }).finally(()=>{
//     console.log("finally")
// })


// async function fetchData(){
//     let data1 =  await fetch("https://fakestoreapi.com/products")
//     let r =  await data1.json()
//     console.log(data1)
//     console.log(r)
// }
// fetchData()
// for(let i=0;i<=10;i++){
//     console.log(i)
// }
//json()


// let a = [{
//     id:1,
//     title:"hi",
//     price:10
// },{
//     id:2,
//     title:"hi",
//     price:10
// },{
//     id:3,
//     title:"hi",
//     price:10
// },{
//     id:4,
//     title:"hi",
//     price:10
// }]
// a.forEach((ele,index,array)=>{
//     console.log("ele=",ele)
//     console.log("index = ",index)
//     console.log("arrray = ",array)
// })  


// let b = [10,20,30,40]
// b.forEach((e,i,array)=>{
//     console.log(e)
//     console.log(i)
//     console.log(array)
// })

// debugger;
let c = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  }
]

  c.forEach((e,i,array)=>{
    console.log(e)
    console.log(i)
    console.log(array)
  })