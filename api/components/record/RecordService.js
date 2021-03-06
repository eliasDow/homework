/**
 * 
 * @param {array[Record]} people - array of people
 * @param {string} sortField - field we want to sort on
 * @param {boolean} ascending - sorts ascending by default, if set to false it sorts descending
 */
function sortPeople(people, sortField, ascending = true) {
    if(sortField === 'dateOfBirth') {
        return people.sort((a, b) => {
            if(new Date(a.dateOfBirth) > new Date(b.dateOfBirth)) {
                return ascending ? 1 : -1;
            } else if(new Date(a.dateOfBirth) < new Date(b.dateOfBirth)) {
                return ascending ? -1 : 1
            }
            return 0;
        });
    } else {
        return people.sort((a, b) => {
            if(a[sortField].toUpperCase().localeCompare(b[sortField].toUpperCase()) > 0) {
                return ascending ? 1 : -1;
            } else if(a[sortField].toUpperCase().localeCompare(b[sortField].toUpperCase()) < 0) {
                return ascending ? -1 : 1
            }
            return 0;
        });
    }
}

/**
 * Assumes we only want to sort on two string fields
 * @param {array} people - array of people data to sort
 * @param {array} sortFieldArray - array of length two to represent the two fields we want to sort on
 */
function sortPeopleByTwoFields(people, sortFieldArray) {
    return people.sort((a, b) => {
        const fieldOne = a[sortFieldArray[0]].toUpperCase().localeCompare(b[sortFieldArray[0]].toUpperCase());
        const fieldTwo = a[sortFieldArray[1]].toUpperCase().localeCompare(b[sortFieldArray[1]].toUpperCase());
        return fieldOne || fieldTwo;
    });
}

module.exports = {
    sortPeople,
    sortPeopleByTwoFields
}