import express from 'express'
import { StatusCodes } from 'http-status-codes'
import connecteDb from './db/dbConnect.js'
import books from './models/Books.js'

const db = await connecteDb()

db.on('error', (erro) => {
    console.error('Erro ao conectar ao banco de dados:', erro)
})

db.once('open', () => {
    console.log('Banco de dados conectado com sucesso!')
})

const app = express()
app.use(express.json())

app.get('/books', async (_req, res) => {
    const getBooks = await books.find({})
    res.status(StatusCodes.OK).json(getBooks)
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