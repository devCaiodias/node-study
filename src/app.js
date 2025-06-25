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

app.get('/books', (_req, res) => {
    res.status(StatusCodes.OK).json(books)
})

app.get('/books/:id', (req, res) => {
    const booksId = req.params.id
    const book = books.findIndex(book => book.id === Number(booksId))
    
    res.status(StatusCodes.OK).json(books[book])
})

app.post('/books', (req, res) => {
    books.push(req.body)

    res.status(StatusCodes.CREATED).json(req.body)
})

app.put('/books/:id', (req, res) => {
    const booksId = req.params.id
    const bookIndex = books.findIndex(book => book.id === Number(booksId))
    books[bookIndex].title = req.body.title

    res.status(StatusCodes.OK).json(books)
    
})

app.delete('/books/:id', (req, res) => {
    const booksId = req.params.id
    const bookIndex = books.findIndex(book => book.id === Number(booksId))

    books.splice(bookIndex, 1)

    res.status(StatusCodes.NO_CONTENT).json({mesage: 'Livro removido com sucesso!'})
})

export default app;