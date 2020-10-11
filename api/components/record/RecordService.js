function sortPeople(people, sortField, ascending = true) {
    if(sortField === 'dateOfBirth') {
        return people.sort((a, b) => {
            if(a.dateOfBirth > b.dateOfBirth) {
                return ascending ? 1 : -1;
            } else if(a.dateOfBirth < b.dateOfBirth) {
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

function sortPeopleByTwoFields(people, sortFieldArray, ascending = true) {
    return people.sort((a, b) => {
        if(a[sortFieldArray[0]].toUpperCase().localeCompare(b[sortFieldArray[0]].toUpperCase()) > 0 ||
            a[sortFieldArray[1]].toUpperCase().localeCompare(b[sortFieldArray[1]].toUpperCase()) > 0
        ) {
            return ascending ? 1 : -1;
        } else if(a[sortFieldArray[0]].toUpperCase().localeCompare(b[sortFieldArray[0]].toUpperCase()) < 0 ||
            a[sortFieldArray[1]].toUpperCase().localeCompare(b[sortFieldArray[1]].toUpperCase()) < 0
        ) {
            return ascending ? -1 : 1
        }
        return 0;
    });
}

module.exports = {
    sortPeople,
    sortPeopleByTwoFields
}