import express from 'express'
import book from './booksRoutes.js'

const router = (app) => {
    app.route("/").get((_req, res) => {
        res.status(200).send("Welcome to the Book API")
    })
    app.use(express.json(), book)
}

export default router;