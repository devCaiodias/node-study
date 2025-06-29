import express from 'express'
import connecteDb from './db/dbConnect.js'
import routes from './Routes/index.js'


const db = await connecteDb()

db.on('error', (erro) => {
    console.error('Erro ao conectar ao banco de dados:', erro)
})

db.once('open', () => {
    console.log('Banco de dados conectado com sucesso!')
})

const app = express()
routes(app)

export default app;