import * as service from '../../../db/services/event.service'
import { CreateEventDTO, UpdateEventDTO, FilterEventsDTO } from '../../dto/event.dto'
import { IEvent } from '../../interfaces'
import * as mapper from './mapper'

export const create = async (payload: CreateEventDTO): Promise<IEvent> => {
    return mapper.toEvent(await service.create(payload))
}

export const update = async (id: number, payload: UpdateEventDTO): Promise<IEvent> => {
    return mapper.toEvent(await service.update(id, payload))
}

export const getById = async (id: number): Promise<IEvent> => {
    return mapper.toEvent(await service.getById(id))
}

export const deleteById = async (id: number): Promise<Boolean> => {
    const isDeleted = await service.deleteById(id)

    return isDeleted
}

export const getAll = async (filters: FilterEventsDTO): Promise<IEvent[]> => {
    return (await service.getAll(filters)).map(mapper.toEvent)
}