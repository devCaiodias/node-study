import book from "../models/Books.js"

class BooksController {
    static async getBooks(_req, res) {
        const listBooks = await book.find({})

        res.status(200).json(listBooks)
    }
}

export default BooksController;