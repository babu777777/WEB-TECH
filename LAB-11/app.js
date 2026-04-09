const fs = require('fs');
fs.writeFile('sample.txt', 'Hello, this is initial content.\n', (err) => {
    if (err) {
        console.error('Error creating file:', err);
        return;
    }
    console.log('File created and data written.');
    fs.appendFile('sample.txt', 'This is appended content.\n', (err) => {
        if (err) {
            console.error('Error appending data:', err);
            return;
        }
        console.log('Data appended.');
        fs.readFile('sample.txt', 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading file:', err);
                return;
            }
            console.log('File content:\n' + data);
            fs.unlink('sample.txt', (err) => {
                if (err) {
                    console.error('Error deleting file:', err);
                    return;
                }
                console.log('File deleted successfully.');
            });
        });
    });
});