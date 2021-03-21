const fs = require('fs')
const ejs = require('ejs')

let rawdata = fs.readFileSync('details.json')
let profile = JSON.parse(rawdata)

const html = ejs.renderFile('index.ejs', {
    ...profile,
    lastRunOn: new Date().toISOString()
})

fs.writeFile('./README.md', htmlString, { encoding: 'utf-8' })