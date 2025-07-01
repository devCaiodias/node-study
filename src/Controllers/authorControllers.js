import {author} from '../models/Author.js'

class AuthorController {
    static async getAuthor(_req, res) {
      try {
        const listauthor = await author.find({})
        res.status(200).json(listauthor)
      } catch (error) {
        res.status(500).json({message: 'Erro the getting author', error: error.message});
      }
    }

    static async getAuthorId(req, res) {
        try {
          const authorId = req.params.id
          const author = await author.findById(authorId)
          
          res.status(200).json(author)
          
        } catch (error) {
          res.status(500).json({ message: 'Error getting author', error: error.message });
        }
    }

    static async postAuthor(req, res) {
      try {
        const newauthor = await author.create(req.body)
        res.status(201).json(newauthor);
      } catch (error) {
        res.status(500).json({ message: 'Erro create author', error: error.message });
      }  
    }
    static async putAuthor(req, res) {
      try {
        const authorId = req.params.id
        await author.findByIdAndUpdate(authorId, req.body)

        res.status(200).json({ message: 'author updated with sucesso!' });
        
      } catch (error) {
        res.status(500).json({ message: 'Erro upadated the author', error: error.message });
      }
    }
    
    static async deleteAuthor(req, res) {
      try {
        const authorId = req.params.id
        await author.findByIdAndDelete(authorId)

        res.status(204).json({ message: 'author deleted successfully!' });
      } catch (error) {
        res.status(500).json({ message: 'Erro deleting the author', error: error.message });
      } 
    }
}

export default AuthorController;