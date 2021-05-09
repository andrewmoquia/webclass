import {Schema, model} from 'mongoose'
import { IWebRoom } from '../../interfaces'

const TeacherSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 100,
        trim: true
    },
    mobileNumber: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 11
    },
    name: {
        firstName: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 100,
            trim:true
            
        },
        middleInitial: {
            type: String,
            minLength: 1,
            maxLength: 100,
            trim: true
        },
        surName: {
            type: String,
            minLength: 1,
            maxLength: 100,
            required: true,
            trim: true
        },   
    },
    createdAt: {
        type: Date,
        trim: true
    },
    updatedAt: {
        type: Date,
        trim: true
    }
})

const LearnerSchema = new Schema({
    username: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 100,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 100,
        trim: true
    },
    mobileNumber: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 11
    },
    name: {
        firstName: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 100,
            trim: true

        },
        middleInitial: {
            type: String,
            minLength: 1,
            maxLength: 100,
            trim: true
        },
        surName: {
            type: String,
            minLength: 1,
            maxLength: 100,
            required: true,
            trim: true
        },
    },
    createdAt: {
        type: Date,
        trim: true
    },
    updatedAt: {
        type: Date,
        trim: true
    }
})

const WebRoomSchema = new Schema({
    school: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    isActivated: {
        type: Boolean,
        required: true
    },
    usersTeacher: {
        teachersData: {
            type: [TeacherSchema]
        },
        usersLimit: {
            type: Number,
            min: 1,
            max: 50,
            required: true
        }
    },
    usersLearner: {
        learnersData: {
            type: [LearnerSchema]
        },
        usersLimit: {
            type: Number,
            min: 1,
            max: 50,
            required: true
        }
    }
}, {
    versionKey: false,
    timestamps: true
})

export default model<IWebRoom>('WebRoom', WebRoomSchema)
