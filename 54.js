// Normal way of writing function
function greet(){
    console.log("Good morning");
}
greet();
//function using arrow
greet = () => {
    console.log("Good morning");
}
greet();

setTimeout(() => {
    console.log("Inside timeout function");
}, 3000);

let sum = (a,b) => a+b;
let half = a => a/2;

let obj={
    names: ["Ram","Syam","Hari"],
    speak(){
        this.names.forEach((student)=>{
            console.log("Hello"+student);
        });
    }
}
obj.speak();