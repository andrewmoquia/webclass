import mongoose from 'mongoose'

export interface IConfig {
    MONGO_DATABASE: any,
    MONGO_USER: any,
    MONGO_PASS: any,
    PORT: any
}

export interface ITeachersData {
    username?: string,
    password?: string,
    mobileNumber?: string,
    name?: {
        firstName?: string,
        middleInitial?: string,
        surName?: string
    },
    createdAt?: Date,
    updatedAt?: Date
}

export interface IWebRoom extends mongoose.Document {
    school?: string,
    isActivated?: boolean,
    usersTeacher?: {
        teachersData?: Array<ITeachersData>,
        usersLimit?: number
    },
    usersLearner?: {
        learnersData?: Array<any>,
        usersLimit?: number
    }
}