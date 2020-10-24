const { asClass, createContainer, asFunction, asValue } = require("awilix");

//#region app start
const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config/environments");
//#endregion

//#region routes
const Routes = require("../api/routes");
const UserRoutes = require("../api/routes/user.routes");
//#endregion

//#region controllers
const { UserController } = require("../api/controllers");
//#endregion

//#region services
const { UserService } = require("../services");
//#endregion

//#region business
const { UserBusiness } = require("../domain/");
//#endregion

//#region repositories
const { UserRepository } = require("../dal/repositories");
//#endregion

//#region data base
const db = require("../dal/entities");
//#endregion

const container = createContainer();

container
    .register({
        app: asClass(StartUp).singleton(),
        router: asFunction(Routes).singleton(),
        server: asClass(Server).singleton(),
        UserController: asClass(UserController).singleton(),
        UserRoutes: asFunction(UserRoutes).singleton()
    })
    .register({
        config: asValue(config)
    })
    .register({
        db: asValue(db)
    })
    .register({
        UserService: asClass(UserService).singleton()
    })
    .register({
        UserBusiness: asClass(UserBusiness).singleton()
    })
    .register({
        UserRepository: asClass(UserRepository).singleton()
    });

module.exports = container;