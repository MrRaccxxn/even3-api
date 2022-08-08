import { EventOuput } from "../../../db/models"
import { IEvent } from "../../interfaces"

export const toEvent = (event: EventOuput): IEvent => {
    return {
        id: event.id,
        title: event.title,
        description: event.description,
        date: event.date,
        url: event.url,
        createdAt: event.createdAt,
        updatedAt: event.updatedAt,
        deletedAt: event.deletedAt,
    }
}
