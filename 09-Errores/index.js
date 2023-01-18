const winston = require("winston");

const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { service: "user-service" },
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new winston.transports.File({ filename: "combined.log" }),
    ],
});

const funcionError = () => {
    throw new Error("Este es un error con un mensaje personalizado");
};

try {
    funcionError();
} catch (e) {
    logger.error(`ERROR! ${e}`);
}
