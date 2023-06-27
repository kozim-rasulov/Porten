let fileSystem = require("fs");
let path = "./gulp/tasks/";
let arrFiles = fileSystem.readdirSync(path).map( (fileName)=>{
    return path + fileName
} );

module.exports = arrFiles;

console.log(arrFiles);