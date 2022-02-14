// -------------- AFTER WRITING CONFIGS CHANGE THE RENAME DIR TO configs ------------------ //
module.exports = {
    HOST: "HOST_NAME", // eg: "localhost"
    USER: "USER_NAME", // database user
    PASSWORD: "PASSWORD", //database password
    DB: "DATABASE_NAME", // database name
    dialect: "DIALECT_NAME", // sql dialect eg: "postgres"
    pool: {
        max: MAX_POOL, 
        min: MIN_POOL,
        acquire: ACQUIRE,
        idle: IDLE
    }
}; 