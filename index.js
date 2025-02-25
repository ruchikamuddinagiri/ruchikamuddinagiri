const fs = require('fs');
const ejs = require('ejs');

let rawdata = fs.readFileSync('details.json');
let profile = JSON.parse(rawdata);
profile.lastRunOn = new Date().toISOString(); // Ensure changes in every run

const parse = async (fileName) => {
    return await ejs.renderFile(fileName, profile);
};

const main = async () => {
    const htmlString = await parse('index.ejs');
    fs.writeFileSync('./README.md', htmlString);
    console.log("README updated");
};

main();
