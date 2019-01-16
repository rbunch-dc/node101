// FS is part of node
const fs = require("fs");

fs.readFile('crop.js','utf-8',(error,contents)=>{
    console.log(error)
    // by default, the return value of readFile, is a buffer
    console.log("Contents of package.json...");
    console.log(contents)
    // console.log(contents.toString())
});

fs.readFile('package.json','utf-8',(error,contents)=>{
    console.log(error)
    // if(error) throw error
    // by default, the return value of readFile, is a buffer
    console.log("Contents of packagee.json...");
    console.log(contents)
});

const contents = fs.readFileSync('crop.js','utf-8');
console.log(contents)
const contents2 = fs.readFileSync('package.json','utf-8');
console.log(contents2)

fs.readFile('dronedata.txt',(err, contents)=>{
    // get location from data
    // check for objects that were moving
    // loss signal
    // process precip data, so we can chart last nights precip
})

let fs = {};
fs.readFile('package.json',(err,contents)=>{
    // do cool stuff...   
});

// INSIDE OF NODE!!!!
fs.readFile = function(fileToOpen,calbackToRun){
    // go open the ssd and find fileToOpen
    // reads the buffer
    // set buffer from file = data
    // if there was an error, set errorMessage
    callbackToRun(errorMessage,data);
}
// INSIDE OF NODE!!!!

fs.readFile('cropdata.json',(err, contents)=>{
    // put it on a webpage!
    // send to Harvard for research!
    // organize by food type for a dietician
}

