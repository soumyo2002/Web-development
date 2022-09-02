//loops
for(i=0;i<3;i++){
    console.log(i);
}

let client=["client 1","client 2","client 3"];

//foreach loop
client.forEach(myfunction);

function myfunction(item){
    console.log("Welcome "+item);
}

let student ={
    name: "Soumyo",
    roll: 20051110,
}

//for in loop

for(key in student){
    console.log(`${key} of student ${student[key]}`);
}