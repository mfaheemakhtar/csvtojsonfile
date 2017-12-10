# csvtojsonfile
A simple Node.js module to convert CSV file to JSON file.

You can use this module to convert a CSV file to a JSON file.

## How to use:

### Install:

```
npm install csvtojsonfile --save
```
TIP: You can exclude "--save" if you are using npm 5.

### Include:

```
const csvtojson = require('csvtojsonfile');
```
OR
```
import csvtojson from 'csvtojsonfile';
```

## Examples:

```js
// files are in the same directory
csvtojson('read.csv', 'write.json', err => {
  if (err) console.error(err);
  else console.log('DONE');
});
```

```js
// files are in another directory
csvtojson('./dir/read.csv', './dir/write.json', err => {
  if (err) console.error(err);
  else console.log('DONE');
});
```

## Features:
> Simple to use.
> No dependencies. Only uses the core node modules.
> Light-weight -- Just 55 lines of code including comments and blank lines.
> Amazingly fast -- uses Asynchronous file read and write API.

## Limitations:
> Does not check for file type.
> Uses JSON.stringify, which is Synchronous.

## Support:
If you find errors or bugs, kindly open a issue on GitHub.
Pull requests are also welcome.
