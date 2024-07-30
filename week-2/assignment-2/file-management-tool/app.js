const fs=require("fs");

// Create File
fs.writeFileSync("file.txt","hello world");

// Read File
const data=fs.readFileSync("file.txt","utf8");
console.log(data);

// Delete File
fs.unlinkSync("file.txt");
