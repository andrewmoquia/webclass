import mongoose from 'mongoose'
import WebRoom from '../../routes/school/webRoom'
import { IWebRoom } from '../../interfaces'

import { RequestHandler } from 'express'

mongoose.set('useFindAndModify', false)

export const createUserTeacher: RequestHandler = async (req, res) => {
    try {
        const teachersData = await WebRoom.findOne({
            school: req.params.school
        }, (err: any, data: IWebRoom) => {
            res.json(data.usersTeacher?.teachersData)
        })
        console.log(teachersData)
    } catch (error) {
        return res.status(301).json({ message: "User does not exist in our database!" })
    }
}

export const getUserTeachers: RequestHandler = async (req, res) => {
    try {
        const schoolFound = await WebRoom.findOne({
            school: req.params.school
        }, (err: any, data: IWebRoom) => {
            res.json(data.usersTeacher?.teachersData)
        })
    } catch (error) {
        return res.status(301).json({ message: "User does not exist in our database!" })
    }
}

export const getUserTeacher: RequestHandler = async (req, res) => {
    const username = req.params.username
    try {
        const schoolFound = await WebRoom.findOne({
            school: req.params.school
        }, (err: any, data: IWebRoom) => {
            if (err) return console.log(err)
            res.json(data.usersTeacher?.teachersData?.find(d => d.username == username))
        })
    } catch (error) {
        return res.status(301).json({ message: "User does not exist in our database!" })
    }
}

export const updateUserTeacher: RequestHandler = async (req, res) => {
    res.json("teacher updated.")
}

export const deleteUserTeachers: RequestHandler = async (req, res) => {
    res.json("teacher deleted")
}
