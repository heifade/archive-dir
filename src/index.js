const compressing = require("compressing");

export async function zipDir(dir, zipFile) {
  return new Promise((resolve, reject) => {
    compressing.zip
      .compressDir(dir, zipFile)
      .then(resolve)
      .catch(reject);
  });
}

export async function unzipDir(zipFile, dir) {
  return new Promise((resolve, reject) => {
    compressing.zip
      .uncompress(zipFile, dir)
      .then(resolve)
      .catch(reject);
  });
}
