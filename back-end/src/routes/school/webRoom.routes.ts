import { Router } from 'express'
import * as webRoomCtrl from './webRoom.controller'

const router = Router()

router.post('/schools', webRoomCtrl.createSchool)

router.get('/schools', webRoomCtrl.getSchools)

router.get('/schools/:id', webRoomCtrl.getSchool)

router.put('/schools/:id', webRoomCtrl.updateSchool)

router.delete('/schools/:id', webRoomCtrl.deleteSchool)

export default router
