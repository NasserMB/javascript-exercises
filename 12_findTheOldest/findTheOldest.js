const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const oldestPerson = countYears(oldest.yearOfDeath, oldest.yearOfBirth);
        const currentPerson = countYears(person.yearOfDeath, person.yearOfBirth);
        return oldestPerson < currentPerson ? person : oldest;
    })
};

const countYears = function(death, birth){
    if (death === undefined) {
        death = new Date().getFullYear();
    }
    return death - birth;
};
// Do not edit below this line
module.exports = findTheOldest;
