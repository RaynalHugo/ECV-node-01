import fs from "fs/promises";

function getPackageJsonVersion() {
  const result = fs.readFile("./package.json");
  return result.then((data) => {
    console.log("fini");

    const string = data.toString();
    const json = JSON.parse(string);
    return json.version;
  });
};

const version = getPackageJsonVersion();
console.log('version:', version)
version.then(console.log);
