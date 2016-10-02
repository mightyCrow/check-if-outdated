const path = require('path');
const latestVersion = require('latest-version');
const pkg = require(path.join(__dirname, 'package.json'));
const semver = require('semver');

const getPkgVersion = (pkgName, pkgFile) => {
  // This needs work =/
  if (pkgFile.name === pkgName) {
    return pkgFile.version;
  }
  if (pkgFile.devDependencies[pkgName]) {
    return pkgFile.devDependencies[pkgName];
  }
  if (pkgFile.dependencies[pkgName]) {
    return pkgFile.dependencies[pkgName];
  }
};

const parseSemver = semver => {
  return semver.replace(/.(\d+\.\d+\.\d+)/, '$1');
};

module.exports = pkgName => {
  return latestVersion(pkgName).then(newVersion => {
    const currentVersion = parseSemver(getPkgVersion(pkgName, pkg));
    const outdated = semver.gt(newVersion, currentVersion);
    console.log(newVersion);
    console.log(currentVersion);
    console.log(outdated);
    return {
      outdated,
      currentVersion,
      newVersion
    };
  });
};
