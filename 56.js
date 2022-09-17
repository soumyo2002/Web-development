// JSON stands for JavaScript Object Notation

// JSON is a lightweight format for storing and transporting data

// JSON is often used when data is sent from a server to a web page
//server stringify the string and webpage converts it to object upon recieving it.

let obj={
    name: "Soumyo",
    roll: 20051110,
    school: "ex-gdbian"
};
console.log(obj);

//to send this object to another server we convert this object to a string 
str=JSON.stringify(obj);
console.log(str);

//we can use functions for manipulation
newstr=str.replace("ex-gdbian","ex-wellandian");
console.log(newstr);

//Now suppose we recieve a JSON string then we need to convert it to a JSON object
newobj=JSON.parse(newstr);
console.log(newobj);