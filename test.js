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

//const { EventEmitter } = require("node:events"); // Pascal case >>camel case >> class >> constructor function
//const eventEmitter = new EventEmitter();
//console.log(eventEmitter.eventNames()); // return an object with the properties of the event emitter class

// event emitter 
//1-register >> on - once - prependListener
//eventEmitter.on("el2kel-geh", () => {  //this funcation has abehavior >> callback function >> event handler
//    console.log("done2");
//});

//eventEmitter.prependListener("el2kel-geh", () => {  // prependListener >> register the event handler before the other event handlers of the same event
//    console.log("done1");
//});

//eventEmitter.once("pepsi-geh", () => {  // once >> register the event handler only once and then remove it from the event emitter class >> if you emit the event more than once it will not work
//    console.log("done once");
//});

//console.log(eventEmitter.eventNames()); 
//2-trigger >> emit
//eventEmitter.emit("el2kel-geh"); 
//eventEmitter.emit("pepsi-geh");
//eventEmitter.emit("pepsi-geh"); // this will not work because the event handler is registered only once
//console.log(eventEmitter.eventNames()); 


// file system
// fs >> file system >> built in module >> require("node:fs") >> readFileSync() >> writeFileSync() >> appendFileSync() >> unlinkSync() >> readdirSync() >> statSync() >> createReadStream() >> createWriteStream()
const fs = require("node:fs");
// 1- read file
// high level methods >> readFile - readFileSync - low level methods >> open >> read >> close 

// 1- read file
// 1.1- read file with callback function >> asynchronous method >> non blocking method >>
//  it will not block the event loop and it will call the callback function when it finishes reading the file

//fs.readFile("./data.json",{encoding: "utf8"} ,(err, data) => {    
    // if (err) {
    // return console.log(err.message); //obj
    // }

    // err && console.log(err.message); 

    // data && console.log(JSON.parse(data));
    
    //return err ? console.log(err.message) : console.log(data);
    //});
    
    // JSON.parse() >> method inside the interface JSON >> convert string to object
 // async >> callback function >> error first callback
// the type of argument >> 1-named >>2-position >>3-optional

// low level methods >> open >> read >> close
//let fd = fs.openSync("./data.json");//'fd'>> file descriptor, is declared but its value is never read.
//fs.read(fd);
//fs.close(fd);
// low level methods >> open >> read >> close

//try {
//    const data = fs.readFileSync("./data.json", { encoding: "utf8" });
//    console.log(data);
//    
//    console.log(1);
//} catch (err) {
//    console.log(err.message);
//}
// readFileSync dosen't have a callback function because it's a synchronous method
//  and it will block the event loop until it finishes reading the file,
//  so it will return the data directly and if there is an error it will throw an error
//  that we can catch it with try catch block


// 2- write file 
// writeFile - writeFileSync - 

//fs.writeFile("./data.txt","Hello Omar \n",{flag:"a"},(err) => {
//    err && console.log(err.message);
//});

//try {
    //logic of code >> old dtaa file + new data >> write old + new
   // let oldData = fs.readFileSync("./data.json", { encoding: "utf8" });
   // let newData = { name:"hamada", salary: 40 };
    //oldData = JSON.parse(oldData);// convert string to object  ,, reassignment
//    oldData.push(newData);
  //  fs.writeFileSync("./data.json", JSON.stringify(oldData));
  //  fs.writeFileSync("./data.txt", JSON.stringify([oldData]));

//} catch (err ) {
//    console.error(err.message);
//}



// 2.2- create file

//fs.writeFileSync("./data1.txt","");

// 3- update - append file

//fs.appendFileSync("./data.txt"," \n hello again"); 

// 4- remove - delete file
//try {
//    if (fs.existsSync("./h.txt")) {
//        fs.unlinkSync("./h.txt");
//    }
//} catch (error) {
//    console.error(error.message);
//    
//}

// 5- directory - folders
// 1- create 
//try {
//fs.mkdirSync("./newFolder",{ recursive: true }); // recursive >> create all the parent folders if they don't exist
//} catch (error) {
//    console.error(error.message);
//}
// 2- remove

//fs.rmdirSync("./newFolder",{ recursive: true }); // recursive >> remove all the parent folders if they don't exist

// streams 

//read

const{EventEmitter} = require("node:events");
const readStream = fs.createReadStream("./data.txt");
console.log(readStream instanceof EventEmitter);
readStream.on("open", () => {
    console.log("file is opened");
});
readStream.on("ready", () => {
    console.log("file is ready to be read"); // file is ready for streaming
});
readStream.on("data", (chunk) => {
    console.log("====================================");
    console.log("=====================================");
    console.log(chunk);
    readStream.pause(); // pause the stream
    setTimeout(() => {
        readStream.resume(); // resume the stream
    }, 1000);
});
readStream.on("close", () => {
    console.log("file is read completely"); // file is closed
});
readStream.on("pause", () => {
    console.log("file is paused");
});
readStream.on("resume", () => {
    console.log("file is resumed");
});






