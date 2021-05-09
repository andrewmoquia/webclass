import dotenv from 'dotenv'
import { IConfig } from './interfaces'
dotenv.config()

export const config: IConfig = {
    MONGO_DATABASE: process.env.MONGO_DATABASE,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASS: process.env.MONGO_PASS,
    PORT: process.env.PORT
}
