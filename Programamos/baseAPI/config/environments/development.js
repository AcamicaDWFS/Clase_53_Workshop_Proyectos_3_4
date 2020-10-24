module.exports = {
    PORT: process.env.PORT,
    DB: {
        username: "root",
        password: "root",
        database: "school_dev",
        host: "localhost",
        dialect: "mariadb",
        timezone: "etc/GMT0"
    }
};