import express, { Application, Request, Response } from 'express'
import routes from './api/routes'
import dbInit from './db/init'

dbInit()

const port = 8080

export const get = () => {
    const app: Application = express()
    const apiVersion = process.env.API_VERSION as string

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get('/', async (_req: Request, res: Response): Promise<Response> => {
        return res.status(200).send({ message: `Welcome to the Event3 API! \n Endpoints available at http://localhost:${port}/api/${apiVersion}` })
    })

    app.use('/api/v1', routes)

    return app
}

export const start = () => {
    const app = get()
    try {
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`)
        })
    } catch (error: any) {
        console.log(`Error occurred: ${error.message}`)
    }
}

start()