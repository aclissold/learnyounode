var fs = require('fs');
var os = require('os');

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var lines = str.split(os.EOL);

console.log(lines.length-1); // -1 for trailing newline
