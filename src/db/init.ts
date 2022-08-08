import Event from "./models/event"

const isDev = process.env.NODE_ENV === 'development'

const dbInit = () => {
    Event.sync({ alter: isDev })
}
export default dbInit 