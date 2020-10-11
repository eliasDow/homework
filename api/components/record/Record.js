class Person {
    constructor(personArray) {
        this.lastName = personArray[0].trim();
        this.firstName = personArray[1].trim();
        this.gender = personArray[2].trim();
        this.favoriteColor = personArray[3].trim();
        const dob = new Date(personArray[4].trim());
        // M/D/YYYY
        this.dateOfBirth = dob.getMonth()+1+'/'+dob.getDate()+'/'+dob.getFullYear();
    }
}

module.exports = Person;