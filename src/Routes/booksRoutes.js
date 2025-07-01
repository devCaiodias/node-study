import express from 'express'
import BooksController from '../Controllers/booksControllers.js'

const routes = express.Router()

routes.get('/books', BooksController.getBooks)
routes.get('/books/search', BooksController.getBooksParams)
routes.get('/books/:id', BooksController.getBooksId)
routes.post('/books', BooksController.postBooks)
routes.put('/books/:id', BooksController.putBooks)
routes.delete('/books/:id', BooksController.deleteBooks)

export default routes;