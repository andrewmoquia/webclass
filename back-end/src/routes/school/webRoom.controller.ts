import mongoose from 'mongoose'
import WebRoom from './webRoom'

import { RequestHandler } from 'express'

mongoose.set('useFindAndModify', false)

export const createSchool: RequestHandler = async (req, res) => {
    try {
        const schoolFound = await WebRoom.findOne({ school: req.body.school})
        if (schoolFound) {
            return res.status(301).json({message: "School is already registered"})
        }
        const school = new WebRoom(req.body)
        const saveSchool = await school.save()
        res.json(saveSchool)
    } catch (error) {   
        console.log(error)
    }
}

export const getSchools: RequestHandler = async (req, res) => {
    try {
        const school = await WebRoom.find()
        await res.json(school)
    } catch (error) {
        console.log(error)
    }
}

export const getSchool: RequestHandler = async (req, res) => {
    try {
        const schoolFound = await WebRoom.findById(req.params.id)
        res.json(schoolFound)
    } catch (error) {
        return res.status(301).json({ message: "School does not exist in our database!" })
    }
}

export const updateSchool: RequestHandler = async (req,res) => {
    try {
        const schoolDataUpdated = await WebRoom.findByIdAndUpdate(req.params.id, req.body, {new:true})
        res.json(schoolDataUpdated)
    } catch (error) {
        return res.status(301).json({message: "School does not exist in our database!"})
    }
}

export const deleteSchool: RequestHandler = async (req, res) => {
    try {
        const schoolFound = await WebRoom.findByIdAndDelete(req.params.id)
        if (!schoolFound) {
            return res.status(301).json({message: "School does not exist!"})
        }
        res.json(schoolFound)
    } catch (error) {
        console.log(error)
    }
}

