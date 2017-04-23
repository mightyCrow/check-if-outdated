#!/usr/bin/env node
'use strict'

const args = process.argv.slice(2)
const checkIfOutdated = require('./')
checkIfOutdated(...args)
  .then(console.log)
  .catch(console.log)
