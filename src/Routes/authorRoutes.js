import express from 'express'
import AuthorController from '../Controllers/authorControllers.js'

const routes = express.Router()

routes.get('/author', AuthorController.getAuthor)
routes.get('/author/:id', AuthorController.getAuthorId)
routes.post('/author', AuthorController.postAuthor)
routes.put('/author/:id', AuthorController.putAuthor)
routes.delete('/author/:id', AuthorController.deleteAuthor)

export default routes;