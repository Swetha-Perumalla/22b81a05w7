const fs = require('fs');

const filePath = 'sample.txt';

const textToAppend = 'This is the appended text!\n';

fs.appendFile(filePath, textToAppend, (err) => {
    if (err) {
        console.error(`Error appending to file: ${err.message}`);
    } else {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading the updated file: ${err.message}`);
            } else {
                console.log(`Updated file content:\n${data}`);
            }
        });
    }
});
