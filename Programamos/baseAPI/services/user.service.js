/* const { toDomainEntity } = require("../domain/mappers");
const { toDbEntity } = require("../dal/mappers");
 */
class UserService {

    constructor({ UserBusiness }) {
        this._userBusiness = UserBusiness;
    }

    async getUsers() {
        const users = await this._userBusiness.getUsers();
        return users;
    }

    async getUser(id) {
        const user = await this._userBusiness.getUser(id);
        return user;
    }

    async createUser(user) {
        const createdUser = await this._userBusiness.createUser(user);
        return createdUser;
    }

    async updateUser(id, user) {
        const createdUser = await this._userBusiness.updateUser(id, user);
        return createdUser;
    }

    async deleteUser(id, user) {
        const createdUser = await this._userBusiness.deleteUser(id, user);
        return createdUser;
    }
}

module.exports = UserService;