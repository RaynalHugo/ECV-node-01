import fs from "fs/promises";

async function getPackageJsonVersion() {
  const data = await fs.readFile("./package.json");
  const string = data.toString();
  const json = JSON.parse(string);
  return json.version;
}

const version = await getPackageJsonVersion();
console.log("version:", version);
console.log("hello");
