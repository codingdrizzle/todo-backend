const { pool } = require('./config');
import logger from "../utils/logger";

const connectDB = async () => {
    try {
        const client = await pool.connect();
        logger.info(`Connected to PostgreSQL`);
        client.release();
    } catch (err) {
        logger.info(`${err}`);
    }
}

export {connectDB}
