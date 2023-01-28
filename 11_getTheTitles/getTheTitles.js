const getTheTitles = function(books) {
    const result = [];

    books.forEach(book => {
        result.push(book.title);
    });

    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
