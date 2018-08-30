let { zipDir, unzipDir } = require("../dist");
let { resolve } = require("path");

let fs = require("fs");

async function f() {
  let zipText = resolve(__dirname, "../zipTest");
  if (!fs.existsSync(zipText)) {
    fs.mkdirSync(zipText);
  }

  await zipDir(resolve(__dirname, ".."), `${zipText}/zipFile.zip`);
  await unzipDir(`${zipText}/zipFile.zip`, `${zipText}`);
}

f()
  .then()
  .catch(e => {
    console.log("error", e);
  });



