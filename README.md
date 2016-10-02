# check-if-outdated
A small and simple module to checks if your module or any of its dependencies are outdated.

## Install
Via npm:
```sh
$ npm install --save check-if-outdated
```

## Usage
The module exports a single function that takes the name of the module you would like to check as a argument.
```javascript
const isOutdated = require('check-if-outdated');

/* Will print out:

  {
    outdated: false,
    currentVersion: '0.16.0',
    newVersion: '0.16.0'
  }

*/
isOutdated('ava').then((data) => {
    console.log(data);
});
```

## Contributing
All Contributions are welcome! Please open up an issue if you would like to help out. :smile:

## License
Created with ♥ by [Tiaan du Plessis](https://github.com/mightyCrow). Licensed under the MIT License.
