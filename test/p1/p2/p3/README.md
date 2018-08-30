# archive-dir

## Install

```bash
npm install archive-dir
```

## Usage

### compress a dir
```js
let { zipDir } = require("archive-dir");
zipDir("./pathname", "./file.zip").then(handleDone).catch(handleError);
```

### uncompress a dir
```js
let { unzipDir } = require("archive-dir");
unzipDir("./file.zip", "./pathname").then(handleDone).catch(handleError);
```
