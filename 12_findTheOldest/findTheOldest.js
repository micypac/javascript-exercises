const findTheOldest = function(people) {
    
    const currentYear = (new Date()).getFullYear();
    let winner = people[0];
    
    const oldest = people.reduce((winner, person) => {
        const winnerAge = winner.yearOfDeath ? winner.yearOfDeath - winner.yearOfBirth : currentYear - winner.yearOfBirth; 
        const age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : currentYear - person.yearOfBirth; 
        if (age > winnerAge) {
            return person;
        } else {
            return winner;
        }
    })

    return oldest;
    
};

// Do not edit below this line
module.exports = findTheOldest;
