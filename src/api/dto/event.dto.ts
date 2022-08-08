import { Optional } from "sequelize/types"

export type CreateEventDTO = {
    title: string;
    description?: string;
    date: Array<Date>;
    url?: string;
}

export type UpdateEventDTO = Optional<CreateEventDTO, 'title'>

export type FilterEventsDTO = {
    isDeleted?: boolean
    includeDeleted?: boolean
}