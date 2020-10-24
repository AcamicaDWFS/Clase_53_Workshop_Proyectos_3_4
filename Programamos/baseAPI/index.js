//const { PORT } = require("./config/environments");

//console.info("PORT: ", PORT);

const container = require("./api/container");
const application = container.resolve("app");
const db = container.resolve("db");

application.start()
    .then(async () => {
        await db.sequelize.sync();
    })
    .catch(err => {
    console.error(err);
    process.exit();
});