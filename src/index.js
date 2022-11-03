import fs from "fs"

function getPackageJsonVersion (callback) {
    fs.readFile('./package.json', (error, data) => {
        console.log('fini');
        
        const string = data.toString();
        const json = JSON.parse(string);
        //console.log(json.version);
        callback(json.version);
    });
}

const version = getPackageJsonVersion(console.log);
console.log(version);