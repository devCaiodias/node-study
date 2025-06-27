import express from 'express'
import BooksController from '../Controllers/booksControllers.js'

const routes = express.Router()
app.use(express.json())

routes.get('/books', BooksController.getBooks)