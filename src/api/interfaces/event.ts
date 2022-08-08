export interface IEvent {
    id: number
    title: string
    description?: string
    date: Array<Date>
    url?: string
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}