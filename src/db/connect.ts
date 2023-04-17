import logger from '../utils/logger';
import { prisma } from './prisma'

require('dotenv').config()

const connectDB = async () => {
    await prisma.$connect().then(() => {
        logger.info(`Connected to PostgreSQL`);
    })
}

export { connectDB }        