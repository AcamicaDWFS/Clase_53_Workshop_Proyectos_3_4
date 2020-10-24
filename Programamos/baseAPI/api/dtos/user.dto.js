const User = require("../../domain/models/user");

class UserDTO {
    constructor() {
        this.id = 0;
        this.name = '';
        this.lastname = '';
    }
}

module.exports = UserDTO;