let { zipDir, unzipDir } = require("../dist");

async function f() {
  await zipDir("../archive-dir", "../../zip.zip");
  await unzipDir("../../zip.zip", "../../pp");
}

f()
  .then()
  .catch();
