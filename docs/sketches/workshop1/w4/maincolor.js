const ColorThief = require("colorthief");''
const fs = require("fs");
const util = require("util");
const rename = util.promisify(fs.rename);


getCurrentFilenames();

(async () => {
    try {
        const dataset = fs.readdirSync("dataset/")
        await dataset.map(async file => {
            const rgb = await ColorThief.getColor(`dataset/${file}`)
            const newName = `${rgb[0]}_${rgb[1]}_${rgb[2]}.jpg`
            rename(file, newName)
        })
    } catch (error) {
        console.log(error)
    }
})();

function getCurrentFilenames() {
    console.log("Current filenames:");
    fs.readdirSync(__dirname + "/dataset").forEach(file => {
        console.log(file);
    });
}

