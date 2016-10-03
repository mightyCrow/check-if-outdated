const path = require('path');
const latestVersion = require('latest-version');
const pkg = require(path.join(__dirname, 'package.json'));
const semver = require('semver');

function getPkgVersion(pkgName, pkgFile) {
  // This needs work =/
  if (pkgFile.name === pkgName) {
    return pkgFile.version;
  } else if (pkgFile.devDependencies[pkgName]) {
    return pkgFile.devDependencies[pkgName];
  } else if (pkgFile.dependencies[pkgName]) {
    return pkgFile.dependencies[pkgName];
  }
}

module.exports = function (pkgName) {
  return latestVersion(pkgName).then(newVersion => {
    const currentVersion = getPkgVersion(pkgName, pkg).replace(/.(\d+\.\d+\.\d+)/, '$1');
    const outdated = semver.gt(newVersion, currentVersion);
    return {
      outdated,
      currentVersion,
      newVersion
    };
  });
}
