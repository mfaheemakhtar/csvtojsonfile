const fs = require('fs');
const path = require('path');

module.exports = (csvFileName, jsonFileName, callback) => {

    if(callback === undefined || typeof callback !== 'function'){
        if(csvFileName === undefined || typeof csvFileName === 'function')   
            throw 'ERROR: You fogot to provide CSV filename.';
        if(jsonFileName === undefined || typeof jsonFileName === 'function')   
            throw 'ERROR: You fogot to provide JSON (output) filename.';
    } 

    // Read the CSV file
    fs.readFile(path.join(process.cwd(), csvFileName), 'utf-8', (err, csvData) => {

        // Check if there is an error
        if (err) return callback(err);

        // Split the data by new-line
        csvData = csvData.split('\r\n')
            // Filter empty values
            .filter(data => data !== '')
            // And split using commas
            .map(data => data.split(','))

        // Get headers
        const headers = csvData[0];

        // convert CSV data to JSON
        let jsonData = csvData.splice(1).map(data => {
            let temp = {};
            data.map((data, item) => {
                temp[headers[item]] = data;
            });
            return temp;
        });

        // Variable to store  JSON
        let stringifiedJSON = null;

        // JSON.stringify is synchronous => try/catch
        try {
            stringifiedJSON = JSON.stringify(jsonData);
        }
        catch (err) {
            if (err) return callback(err);
        }

        // Phew! Write everything to file
        fs.writeFile(path.join(process.cwd(), jsonFileName), stringifiedJSON, 'utf-8', err => {
            if (err) return callback(err);
            callback(null);
        });
    });
};