import { Router } from 'express'
import * as teacherCrtl from './teacher.controller'

const router = Router()

router.put('/:school/teachers', teacherCrtl.createUserTeacher)

router.get('/:school/teachers', teacherCrtl.getUserTeachers)

router.get('/:school/teachers/:username', teacherCrtl.getUserTeacher)

router.put('/:school/teachers/:id', teacherCrtl.updateUserTeacher)

router.delete('/:school/teachers/:id', teacherCrtl.deleteUserTeachers)

export default router   