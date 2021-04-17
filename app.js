//SYNCHRONOUS CODE
// let result=0;
// for(let i=0;i<10000;i++){
//     result +=i;
// }
// console.log(result);
//ASYNCHRONOUS CODE

// setTimeout(function(){
// let div =document.createElement("div");//creating element without html
// div.innerHTML=`<h1 style="color:red">this is js class</h1>`;
// document.body.append(div);
// },1000);

const promise1 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log("promise if fulfilled");
        resolve(20);
    },1000);
});
const promise2 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        console.log("promise is failed");
        reject(30);
    },2*1000);
});
Promise.all([promise1,promise2]).then(console.log).catch(console.log);
