import * as eventDal from '../dal/event/event.dal'
import { GetAllEventsFilters } from '../dal/event/event.types'
import { EventInput, EventOuput } from '../models'

export const create = async (payload: EventInput): Promise<EventOuput> => {
    return eventDal.create(payload)
}

export const update = async (id: number, payload: Partial<EventInput>): Promise<EventOuput> => {
    return eventDal.update(id, payload)
}

export const getById = (id: number): Promise<EventOuput> => {
    return eventDal.getById(id)
}

export const deleteById = (id: number): Promise<boolean> => {
    return eventDal.deleteById(id)
}

export const getAll = (filters: GetAllEventsFilters): Promise<EventOuput[]> => {
    return eventDal.getAll(filters)
}