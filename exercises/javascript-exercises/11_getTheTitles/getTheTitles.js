const getTheTitles = function(books) {
    let series = [];
    for (const b in books) {
        series.push(books[b]["title"]);
    }
    return series;
};

// Do not edit below this line
module.exports = getTheTitles;
