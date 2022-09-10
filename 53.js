let time=new Date();
console.log(time);
let time1=new Date(0);
console.log(time1);
let time2=new Date(1000);
console.log(time2);
let time3=new Date("2022-09-08");
console.log(time3);

//let time4=new Date(year,month,date,day,hours,mins,second);
let time4=new Date(3030,8,7,6,12,33);
console.log(time4);

let yr=time4.getFullYear();
let mon=time4.getMonth();
let dt=time4.getDate();
let hr=time4.getHours();
let min=time4.getMinutes();
let sec=time4.getSeconds();
console.log(yr);
console.log(mon);
console.log(dt);
console.log(hr);
console.log(min);
console.log(sec);

time4.setDate(33);
console.log(time4);

setInterval(update,1000);

function update(){
    timenow.innerHTML=new Date();
}