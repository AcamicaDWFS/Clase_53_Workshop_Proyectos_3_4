require("dotenv").config();

const PROODUCTION = require("./production");
const QA = require("./qa");
const DEVELOPMENT = require("./development");

const { NODE_ENVIRONMENT } = process.env;

let currentEnvironment = DEVELOPMENT;

if (NODE_ENVIRONMENT === "production") {
    currentEnvironment = PROODUCTION;
} else if (NODE_ENVIRONMENT === "qa") {
    currentEnvironment = QA;
}

module.exports = currentEnvironment;