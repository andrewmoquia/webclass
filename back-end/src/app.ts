import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import webRoomRouter from './routes/school/webRoom.routes'
import teachersRouter from './routes/teacher/teacher.routes'

import { config } from './config'

const app = express()

app.set('port', config.PORT)

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(webRoomRouter)
app.use(teachersRouter)

export default app




