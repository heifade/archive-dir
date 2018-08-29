let { zipDir, unzipDir } = require("../dist");

let fs = require("fs");

async function f() {
  let zipText = "./zipTest";
  if (!fs.existsSync(zipText)) {
    fs.mkdirSync(zipText);
  }

  await zipDir("./src", `${zipText}/file.zip`);
  await unzipDir(`${zipText}/file.zip`, `${zipText}`);
}

f()
  .then()
  .catch();
