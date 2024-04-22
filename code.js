const async = require('async');

function countOccurrencesAsync(array, itemToCount, callback) {
    return new Promise((resolve, reject) => {
        try {
            const occurrences = array.filter(item => item === itemToCount).length;
            callback(null, occurrences);
            resolve(occurrences);
        } catch (error) {
            callback(new Error("Error counting occurrences"));
            reject(error);
        }
    });
}
