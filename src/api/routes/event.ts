import { Router, Request, Response } from 'express'
import * as eventController from '../controllers/event'
import { CreateEventDTO, FilterEventsDTO, UpdateEventDTO } from '../dto/event.dto'

const eventRouter = Router()

eventRouter.get(':/id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const result = await eventController.getById(id)
    return res.status(200).send(result)
})

eventRouter.put('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const payload: UpdateEventDTO = req.body

    const result = await eventController.update(id, payload)
    return res.status(201).send(result)
})

eventRouter.delete('/:id', async (req: Request, res: Response) => {
    const id = Number(req.params.id)

    const result = await eventController.deleteById(id)
    return res.status(204).send({
        success: result
    })
})

eventRouter.post('/', async (req: Request, res: Response) => {
    const payload: CreateEventDTO = req.body

    const result = await eventController.create(payload)
    return res.status(200).send(result)
})

eventRouter.get('/', async (req: Request, res: Response) => {
    const filters: FilterEventsDTO = req.query

    const results = await eventController.getAll(filters)
    return res.status(200).send(results)
})

export default eventRouter