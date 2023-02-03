const clock=()=>{
let d = new Date();
usa.innerHTML= d.toLocaleString('en-US', { timeZone: 'America/New_York' }).split(",")[1];

let a=new Date();
india.innerHTML=a.toLocaleString('en-US', { timeZone: 'Asia/kolkata' }).split(",")[1];;


let b=new Date();
china.innerHTML=b.toLocaleString('en-US', { timeZone: 'Asia/Shanghai' }).split(",")[1];;
}
const update=setInterval(clock, 1000);