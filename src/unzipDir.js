import fs from "fs";
import path from "path";
import compressing from "compressing";
import mkdirp from "mkdirp";
import { promisify } from "util";

async function onEntry(header, stream, next, destDir, onError) {
  stream.on("end", next);

  let fileName = path.join(destDir, header.name);

  try {
    if (header.type === "file") {
      let dirName = path.dirname(fileName);
      if (!fs.existsSync(dirName)) {
        await promisify(mkdirp)(dirName);
      }
      stream.pipe(fs.createWriteStream(fileName));
    } else {
      // directory
      await promisify(mkdirp)(fileName);
    }
  } catch (error) {
    stream.resume();
    onError(error);
  }
}

export async function unzipDir(zipFile, path) {
  if (!fs.existsSync(path)) {
    throw new Error(`${path} is not exists!`);
  }
  if (!fs.existsSync(zipFile)) {
    throw new Error(`${zipFile} is not exists!`);
  }

  return new Promise((resolve, reject) => {
    let stream = new compressing.zip.UncompressStream({ source: zipFile })
      .on("error", reject)
      .on("finish", resolve)
      .on("entry", (header, stream, next) =>
        onEntry(header, stream, next, path, reject)
          .then()
          .catch()
      );
  });
}
