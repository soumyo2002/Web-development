// set timeout allows us to run a function ONCE after a certain interval of time
// clear timeout allows us to run a function REPEATED after a certain interval of time

let timeout=setTimeout(greet,5000,"Soumyo");
setTimeout(bye,5000,"Soumyo");

function greet(name){
    console.log("Hello "+name);
}
function bye(name){
    console.log("Bye "+name);
}

function repeat(){
    console.log("I will repeat every 5 second");
}
clearTimeout(timeout);

setInterval(repeat,5000);

function display_time(){
    time=new Date;
    console.log(time);
    document.getElementById('time').innerHTML=time;
}

setInterval(display_time,1000);