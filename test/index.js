const path = require("path");
const fs = require("fs");
const Mocha = require("mocha");

const loadSpecs = function (path) {
    const output = [];
    const files = fs.readdirSync(path);

    for (const file of files) {
        if (file.endsWith(".spec.js")) {
            output.push(`${path}/${file}`);
        }
        else if (!file.includes(".")) {
            output.push(...loadSpecs(`${path}/${file}`));
        }
    }
    return output;
};

(async () => {
    const mocha = new Mocha({
        timeout: 2000
    });

    for (const file of loadSpecs(__dirname)) {
        mocha.addFile(file);
    }

    const failures = await Promise.resolve(
        new Promise(resolve => {
            mocha.run(failures => resolve(failures));
        })
    );

    return failures;
})()
    .then(failures => {
        process.exitCode = 0;
        process.exitCode = failures;
    })
    .catch(error => {
        console.log(error);
        process.exitCode = -1;
    })
    .finally(() => {
        process.exit();
    });