class Person {
    /**
     * Since you can't overload constructors in JS we use a isPost boolean to make new people
     * @param {*} personArray 
     * @param {*} isPost 
     */
    constructor(personArray, isPost = false) {
        if(isPost) {
            this.lastName = personArray.lastName;
            this.firstName = personArray.firstName;
            this.gender = personArray.gender;
            this.favoriteColor = personArray.favoriteColor;
            this.dateOfBirth = new Date(personArray.dateOfBirth);
        } else {
            this.lastName = personArray[0].trim();
            this.firstName = personArray[1].trim();
            this.gender = personArray[2].trim();
            this.favoriteColor = personArray[3].trim();
            this.dateOfBirth = new Date(personArray[4].trim());
        }
    }
}

module.exports = Person;