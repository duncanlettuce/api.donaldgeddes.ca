const fs = require('fs')

exports.readFile = path => new Promise((resolve, reject) => fs
  .readFile(path, 'utf8', (err, data) => {
    if (err) reject(err)
    else resolve(data)
  }))
