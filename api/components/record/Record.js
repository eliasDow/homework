class Person {
    // constructor(lastName, firstName, gender, favoriteColor, dateOfBirth) {
    //     this.lastName = lastName;
    //     this.firstName = firstName;
    //     this.gender = gender;
    //     this.favoriteColor = favoriteColor;
    //     this.dateOfBirth = dateOfBirth;
    // }

    constructor(personArray) {
        this.lastName = personArray[0].trim();
        this.firstName = personArray[1].trim();
        this.gender = personArray[2].trim();
        this.favoriteColor = personArray[3].trim();
        this.dateOfBirth = new Date(personArray[4].trim());
    }
}

module.exports = Person;