import fs from "fs/promises";

async function getPackageJsonVersion() {
  const data = await fs.readFile("./package.json");
  const string = data.toString();
  const json = JSON.parse(string);

  let version = json.version.split('.');
  ++version[2];
  version = version.join('.');
  json.version = version;

  const newString = JSON.stringify(json, null, 2);
  await fs.writeFile("./package.json", newString);

  return json.version;
}

const version = await getPackageJsonVersion();