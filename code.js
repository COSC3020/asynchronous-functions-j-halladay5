async function countOccurrencesAsync(array, itemToCount) {
    try {
        const result = await new Promise((resolve, reject) => {
            count(array, itemToCount, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
        return result;
    } catch (error) {
        throw new Error("Error counting occurrences");
    }
}

function count(array, itemToCount, callback) {
    try {
        const occurrences = array.filter(item => item === itemToCount).length;
        callback(null, occurrences);
    } catch (error) {
        callback(new Error("Error counting occurrences"));
    }
}


