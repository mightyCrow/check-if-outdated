<h1 align="center">check-if-outdated</h1>
<div align="center">
  <strong>Check if module dependencies are outdated</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/check-if-outdated">
    <img src="https://img.shields.io/npm/v/check-if-outdated.svg?style=flat-square" alt="Package version" />
  </a>
  <a href="https://npmjs.org/package/check-if-outdated">
  <img src="https://img.shields.io/npm/dm/check-if-outdated.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/check-if-outdated">
    <img src="https://img.shields.io/travis/tiaanduplessis/check-if-outdated.svg?style=flat-square" alt="Travis Build" />
  </a>
  <a href="https://github.com/RichardLitt/standard-readme)">
    <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
  </a>
  <a href="https://badge.fury.io/gh/tiaanduplessis%2Fcheck-if-outdated">
    <img src="https://badge.fury.io/gh/tiaanduplessis%2Fcheck-if-outdated.svg?style=flat-square" alt="GitHub version" />
  </a>
  <a href="https://dependencyci.com/github/tiaanduplessis/check-if-outdated">
    <img src="https://dependencyci.com/github/tiaanduplessis/check-if-outdated/badge?style=flat-square" alt="Dependency CI" />
  </a>
  <a href="https://github.com/tiaanduplessis/check-if-outdated/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/check-if-outdated.svg?style=flat-square" alt="License" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs" />
  </a>
  <a href="https://www.paypal.me/tiaanduplessis/1">
    <img src="https://img.shields.io/badge/$-support-green.svg?style=flat-square" alt="Donate" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/check-if-outdated/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/check-if-outdated.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/check-if-outdated/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/check-if-outdated.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20check-if-outdated!%20https://github.com/tiaanduplessis/check-if-outdated%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/check-if-outdated.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="tiaan.beer">Tiaan</a> and <a href="https://github.com/tiaanduplessis/check-if-outdated/graphs/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#cli">CLI</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

```sh
$ npm install --save check-if-outdated
# OR
$ yarn add check-if-outdated
```

## Usage

```js
const checkIfOutdated = require('check-if-outdated')

checkIfOutdated('jest', 'husky').then(console.log)
//[ { currentVersion: '^18.0.2',
//    newVersion: '19.0.2',
//    name: 'jest',
//    dependencies: { 'jest-cli': '^19.0.2' },
//    bin: { jest: './bin/jest.js' },
//    directories: {},
//    dist:
//     { shasum: 'b794faaf8ff461e7388f28beef559a54f20b2c10',
//       tarball: 'https://registry.npmjs.org/jest/-/jest-19.0.2.tgz' },
//    engines: { node: '>= 4' },
//    _hasShrinkwrap: false }, ... ]
```

## CLI

```sh
$ npm install --global check-if-outdated
# OR
$ yarn global add check-if-outdated
```

Then:

```sh
$ check-if-outdated jest
#[ { currentVersion: '^18.0.2',
#    newVersion: '19.0.2',
#    name: 'jest',
#    dependencies: { 'jest-cli': '^19.0.2' },
#    bin: { jest: './bin/jest.js' },
#    directories: {},
#    dist:
#     { shasum: 'b794faaf8ff461e7388f28beef559a54f20b2c10',
#       tarball: 'https://registry.npmjs.org/jest/-/jest-19.0.2.tgz' },
#    engines: { node: '>= 4' },
#    _hasShrinkwrap: false } ]
```


## Contribute

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

Note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

Licensed under the MIT License.
