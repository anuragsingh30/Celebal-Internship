var path = require('path');

// Normalization
console.log("Normalization:" + path.normalize('/test/test1//test2/..'));

// Join
console.log("Join:" + path.join('/test','test1','test2','..'));

// resolve
console.log("Resolve:" + path.resolve('pathModule.js'));

// Extension name
console.log("Extension:" + path.extname('pathModule.js'));

