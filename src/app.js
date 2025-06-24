import express from 'express'
import { StatusCodes } from 'http-status-codes'

const app = express()
app.use(express.json())

const books = [
    {
        id: 1,
        title: 'Codigo Limpo',
    },
    {
        id: 2,
        title: 'Principios SOLID',
    }
]

app.get('/', (_req, res) => {
    res.status(StatusCodes.OK).send('Apendendo node com express')
})

app.get('/books', (_req, res) => {
    res.status(StatusCodes.OK).json(books)
})

app.post('/books', (req, res) => {
    books.push(req.body)

    res.status(StatusCodes.CREATED).json(req.body)
})

export default app