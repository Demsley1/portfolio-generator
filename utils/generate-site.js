const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve,reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            //if theres an error, reject the Promise and send the eroor to the Promise's .catch() method
            if(err){
                reject(err);
                return;
            }

            // if everything went well resolve the Promise object and send the successful data the the .then() method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if(err){
                reject(err)
                return;
            }
            resolve({
                ok: true,
                message: 'File copied'
            });
        });
    });
}

module.exports = { writeFile, copyFile };
