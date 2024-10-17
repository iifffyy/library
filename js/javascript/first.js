let btn1 = document.querySelector("#btn1");
// btn1.onclick=(evt)=>{ 
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// }

let div = document.querySelector("div");
// div.onmouseover = (evt)=>{
//     console.log("you are inside div");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// };

// btn1.addEventListener("click",() => {
//     console.log("button was clicked");  
// })



// let modeBtn = document.querySelector('#mode');
// let currMode="light";
// modeBtn.addEventListener("click", () =>{
//     //  console.log("you are trying to change mode");
// if(currMode=="light"){
//     currMode="dark";
//     document.querySelector("body").style.backgroundColor="black";
// }
// else
// {
//     currMode="light";
//     document.querySelector("body").style.backgroundColor="white";
// }
// console.log(currMode);
// })

let num = prompt("enter a number");

if(num%5===0)
{
    console.log(num,"is  multiple of 5")
}
else{
    console.log(num,"is not multiple of 5")
}