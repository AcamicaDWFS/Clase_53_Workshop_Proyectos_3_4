//const { attributes } = require("structure");

/* const User = attributes({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String
    }
})(class User{
    getCompleteName() {
        return this.name + " " + this.lastname;
    }
}); */
class User {
    constructor() {
        this.id = 0;
        this.name = "";
        this.lastname = "";
    }
}

module.exports = User;