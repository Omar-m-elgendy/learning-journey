const path = require("node:path");
let filepath = "F:\Omar\Back End Node.js\MODULES (2)\Session 1\attachments\ali\mohamed\profile\cover\post\image.png"; //DB 
// d:n >> skip char >> property char
// path >> obj >> dot >> method base name()
//let result = path.basename(filepath);
//console.log(result);
//dirname()
//let result = path.dirname(filepath);
//console.log(result);
// path >> extname()
//let result = path.extname(filepath);
//console.log(result);
// path >> parse()
//let result = path.parse(filepath);
//console.log(result);
//path.join(); //Join all arguments together and normalize the resulting path.
//let result = path.join("F:\Omar\Back End Node.js\MODULES (2)\Session 1\attachments\ali\mohamed\profile\cover\post\image.png");
//console.log(result);
// path >> normalize() >> Normalize a string path, reducing '..' and '.' parts.
// path >> types >> absolute >> os , relative >> root \attachments\ali\mohamed\profile

/**
 *  when you save a file in database you save it as a relative path and when you want to use it you join it with the root path of the project to get the absolute path of the file and then you can use it in your code
 *  example :
 *  let filepath = "F:\Omar\Back End Node.js\MODULES (2)\Session 1\attachments\ali\mohamed\profile\cover\post\image.png";
 */
// instead of saving the absolute path in the database you can save the relative path and then join it with the root path of the project to get the absolute path of the file and then you can use it in your code
//let relativePath = "attachments\ali\mohamed\profile\cover\post\image.png";
//let rootPath = "F:\Omar\Back End Node.js\MODULES (2)\Session 1";
//let absolutePath = path.join(rootPath, relativePath);
//console.log(absolutePath);
// وكمان عشان لو غيرت السيرفير

//console.log(__dirname); // __dirname >> global variable >> return the directory name of the current module
//let result = path.join(filepath);



// path >> resolve
//let result = path.resolve("attachments\ali\mohamed\profile\cover\post\image.png");
//console.log(result);

//path.parse(); //  METHOD inside the module , because it existS inside JSON 
//JSON.parse(); // METHOD INSIDE THE INTERFACE JSON

//let result = path.parse(filepath); // return an object with the properties of the path
//console.log(result); // return all the values

// third party module >> npm install >> node_modules >> require("module name")
//require("node:events");  // built in module 
// لو عايز اجيب module >local بدبله path
//require("./attachments/ali/profile/h.js"); // local module >> relative path >> ./ >> current directory

const { EventEmitter } = require("node:events"); // Pascal case >>camel case >> class >> constructor function
const eventEmitter = new EventEmitter();
console.log(eventEmitter.eventNames()); // return an object with the properties of the event emitter class

// event emitter 
//1-register >> on - once - prependListener
eventEmitter.on("el2kel-geh", () => {  //this funcation has abehavior >> callback function >> event handler
    console.log("done2");
});
eventEmitter.prependListener("el2kel-geh", () => {  // prependListener >> register the event handler before the other event handlers of the same event
    console.log("done1");
});

eventEmitter.once("pepsi-geh", () => {  // once >> register the event handler only once and then remove it from the event emitter class >> if you emit the event more than once it will not work
    console.log("done once");
});

console.log(eventEmitter.eventNames()); 
//2-trigger >> emit
eventEmitter.emit("el2kel-geh"); 
eventEmitter.emit("pepsi-geh");
eventEmitter.emit("pepsi-geh"); // this will not work because the event handler is registered only once
console.log(eventEmitter.eventNames()); 


