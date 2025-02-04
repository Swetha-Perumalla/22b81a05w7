// mkdir()

const fs = require('fs');

fs.mkdir('labdir', { recursive: true }, (err) => {
    if (err) {
        console.log('Error creating directory:', err);
    } else {
        console.log('Directory created successfully!');
    }
});


//unlink()

const fs1 = require('fs');

fs1.unlink('labdir', (err) => {
    if (err) {
        console.log('Error deleting file:', err);
    } else {
        console.log('File deleted successfully!');
    }
});


//rename()

const fs2 = require('fs');

fs2.rename('fsmodules.js', 'fsmodules1.js', (err) => {
    if (err) {
        console.log('Error renaming file:', err);
    } else {
        console.log('File renamed successfully!');
    }
});


//readdir()

const fs3 = require('fs');

fs3.readdir('.', 'utf8', (err, files) => {
    if (err) {
        console.log('Error reading directory:', err);
    } else {
        console.log('Directory contents:', files);
    }
});

