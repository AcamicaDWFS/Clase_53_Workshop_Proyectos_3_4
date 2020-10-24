const mapper = require("automapper-js");
const { UserDTO } = require("../dtos");

class UserController {

    constructor({ UserService }) {
        this._userService = UserService;
    }

    sayHello(request, response) {
        return response.send({message: "Hello World"});
    }

    async getUsers(request, response) {
        let users = await this._userService.getUsers();
        users = users.map(user => mapper(UserDTO, user));
        return response.send({
            error: false,
            payload: users
        });
    }

    async getUser(request, response) {
        const { id } = request.params;
        let user = await this._userService.getUser(id);
        user = mapper(UserDTO, user);
        return response.send({
            error: false,
            payload: user
        });
    }

    async createUser(request, resolve) {
        const { body } = request;
        const createdUser = await this._userService.createUser(body);
        const user = mapper(UserDTO, createdUser);
        return resolve.status(201).send({
            error: false,
            payload: user
        });
    }

    async updateUser(request, response) {
        console.info("params:", request.params);
        const { body } = request;
        const { id } = request.params;

        await this._userService.updateUser(id, body);
        return response.status(204).send();
    }

    async deleteUser(request, response) {
        const { id } = request.params;

        await this._userService.deleteUser(id);
        return response.status(204).send();
    }
}

module.exports = UserController;