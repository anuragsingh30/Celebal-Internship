var os=require("os");

// Endianness
console.log("Endianness:" + os.endianness());

// os type
console.log("type:" + os.type());

// os platform
console.log("platform:" + os.platform());

// Total system memory
console.log("Total memory:" + os.totalmem()/1024  +' mbytes');

// Total free memory
console.log("Total free memory:" + os.freemem() +' bytes');