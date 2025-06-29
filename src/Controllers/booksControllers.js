import books from './../models/Books.js'

class BooksController {
    static async getBooks(_req, res) {
      try {
        const listBooks = await books.find({})
        res.status(200).json(listBooks)
      } catch (error) {
        res.status(500).json({message: 'Erro the getting books', error: error.message});
      }
    }

    static async postBooks(req, res) {
      try {
        const newBook = await books.create(req.body)
        res.status(201).json(newBook);
      } catch (error) {
        res.status(500).json({ message: 'Erro ao criar livro', error: error.message });
      }  
    }

//     app.get('/books/:id', (req, res) => {
//     const booksId = req.params.id
//     const book = books.findIndex(book => book.id === Number(booksId))
    
//     res.status(StatusCodes.OK).json(books[book])
// })

// app.post('/books', (req, res) => {
//     books.push(req.body)

//     res.status(StatusCodes.CREATED).json(req.body)
// })

// app.put('/books/:id', (req, res) => {
//     const booksId = req.params.id
//     const bookIndex = books.findIndex(book => book.id === Number(booksId))
//     books[bookIndex].title = req.body.title

//     res.status(StatusCodes.OK).json(books)
    
// })

// app.delete('/books/:id', (req, res) => {
//     const booksId = req.params.id
//     const bookIndex = books.findIndex(book => book.id === Number(booksId))

//     books.splice(bookIndex, 1)

//     res.status(StatusCodes.NO_CONTENT).json({mesage: 'Livro removido com sucesso!'})
// })
}

export default BooksController;