const fs = require('fs')
const ejs = require('ejs')

let rawdata = fs.readFileSync('details.json')
let profile = JSON.parse(rawdata)
let html = ''
const parse = async (fileName)=>{
    html = await ejs.renderFile(fileName, {
        ...profile,
        lastRunOn: new Date().toISOString()
    })
    return html
}

const main = async ()=>{
    const htmlString = await parse('index.ejs')
    console.log(htmlString)
    fs.writeFile('./README.md', htmlString, ()=>{
        console.log("file written")
    })
}

main()

