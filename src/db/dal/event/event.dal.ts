import { Op } from 'sequelize'
import { EventInput, EventOuput } from '../../models/event'
import { GetAllEventsFilters } from './event.types'
import Event from "../../models/event"

export const create = async (payload: EventInput): Promise<EventOuput> => {
    const event = await Event.create(payload)
    return event
}

export const update = async (id: number, payload: Partial<EventInput>): Promise<EventOuput> => {
    const event = await Event.findByPk(id)
    if (!event) {
        //TODO: throw custom error
        throw new Error('not found')
    }
    const updatedEvent = await (event as Event).update(payload)
    return updatedEvent
}

export const getById = async (id: number): Promise<EventOuput> => {
    const event = await Event.findByPk(id)
    if (!event) {
        // @todo throw custom error
        throw new Error('not found')
    }
    return event
}

export const deleteById = async (id: number): Promise<boolean> => {
    const deletedEventCount = await Event.destroy({
        where: { id }
    })
    return !!deletedEventCount
}

export const getAll = async (filters?: GetAllEventsFilters): Promise<EventOuput[]> => {
    return Event.findAll({
        where: {
            ...(filters?.isDeleted && { deletedAt: { [Op.not]: null } })
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true })
    })
}