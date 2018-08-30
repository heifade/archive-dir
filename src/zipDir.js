import fs from "fs";
import path from "path";
import compressing from "compressing";
import pump from "pump";

async function addDir(rootDir, dir, zipStream) {
  let list = fs.readdirSync(dir);
  for (let i = 0; i < list.length; i++) {
    let fileName = path.resolve(dir, list[i]);
    let stat = fs.lstatSync(fileName);
    if (stat.isFile()) {
      zipStream.addEntry(fileName, {
        relativePath: fileName.substr(rootDir.length + 1)
      });
    } else if (stat.isDirectory()) {
      await addDir(rootDir, fileName, zipStream);
    }
  }
}

export async function zipDir(dir, zipFile) {
  if (!fs.existsSync(dir)) {
    throw new Error(`${dir} is not exists!`);
  }

  let zipStream = new compressing.zip.Stream();

  await addDir(dir, dir, zipStream);

  let distStream = fs.createWriteStream(zipFile);

  return new Promise((resolve, reject) => {
    pump(zipStream, distStream, error => {
      if (error) {
        reject(error);
        return;
      }
      resolve();
    });
  });
}
