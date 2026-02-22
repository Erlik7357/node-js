'use strict';

const { PythonShell } = require('python-shell');

function trainTestSplit(csvFile, testSize = 0.2) {
    return new Promise((resolve, reject) => {
        const options = {
            mode: 'text',
            pythonOptions: ['-u'], // get print results in real-time
            args: [csvFile, testSize]
        };

        PythonShell.run('train_test_split.py', options, function (err, results) {
            if (err) reject(err);
            else resolve(results);
        });
    });
}

module.exports = { trainTestSplit };