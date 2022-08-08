import { Router } from 'express'
import eventRouter from './event'

const router = Router()

router.use('/event', eventRouter)

export default router