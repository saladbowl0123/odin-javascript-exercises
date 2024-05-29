const findTheOldest = function (people) {

  const getAge = function (person) {
    person.yearOfDeath ??= new Date().getFullYear();
    return person.yearOfDeath - person.yearOfBirth;
  }
  
  return people.reduce((oldest, person) =>
    getAge(oldest) < getAge(person) ? person : oldest);
};

// Do not edit below this line
module.exports = findTheOldest;
