const { Router } = require("express");
const bodyParse = require("body-parser");
const cors = require("cors");
const compression = require("compression");

module.exports = function ({ UserRoutes }) {
    const router = Router();
    const apiRouter = Router();

    apiRouter
        .use(cors())
        .use(bodyParse.json())
        .use(compression());
    apiRouter.use("/users", UserRoutes);
    router.use("/api", apiRouter);

    return router;
};