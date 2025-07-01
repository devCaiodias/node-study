import { author } from '../models/Author.js';
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

    static async getBooksId(req, res) {
        try {
          const booksId = req.params.id
          const book = await books.findById(booksId)
          
          res.status(200).json(book)
          
        } catch (error) {
          res.status(500).json({ message: 'Error getting book', error: error.message });
        }
    }

    static async postBooks(req, res) {
      const newBook = req.body;
      try {
        const authorFound = await author.findById(newBook.author)
        const bookFull = {
          ...newBook, author: {...authorFound._doc}
        }
        const createdBook = await books.create(bookFull);
        res.status(201).json(createdBook);
      } catch (error) {
        res.status(500).json({ message: 'Erro create book', error: error.message });
      }  
    }
    static async putBooks(req, res) {
      try {
        const booksId = req.params.id
        await books.findByIdAndUpdate(booksId, req.body)

        res.status(200).json({ message: 'book updated with sucesso!' });
        
      } catch (error) {
        res.status(500).json({ message: 'Erro upadated the book', error: error.message });
      }
    }
    
    static async deleteBooks(req, res) {
      try {
        const booksId = req.params.id
        await books.findByIdAndDelete(booksId)

        res.status(204).json({ message: 'Book deleted successfully!' });
      } catch (error) {
        res.status(500).json({ message: 'Erro deleting the book', error: error.message });
      } 
    }

    static async getBooksParams(req, res) {
      const title = req.query.title
      try {
        const booksForTitle = await books.find({ title})
        res.status(200).json(booksForTitle)
      } catch (error) {
        res.status(500).json({ message: 'Erro getting books by title', error: error.message });
      }
    }
}

export default BooksController;