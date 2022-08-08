
import { DataTypes, Model, Optional } from "sequelize"
import sequelizeConnection from "../config"
interface EventAttributes {
    id: number
    title: string
    description?: string
    date: Array<Date>
    url?: string
    createdAt?: Date
    updatedAt?: Date
    deletedAt?: Date
}

export interface EventInput extends Optional<EventAttributes, 'id'> { }

export interface EventOuput extends Required<EventAttributes> { }


class Event extends Model<EventAttributes, EventInput> implements EventAttributes {
    public id!: number
    public title!: string
    public description!: string
    public date!: Array<Date>
    public url!: string

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

Event.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
    },
    date: {
        type: DataTypes.ARRAY(DataTypes.DATE),
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING
    }
}, {
    sequelize: sequelizeConnection,
    paranoid: true
})

export default Event