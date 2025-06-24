import express from 'express'
import { StatusCodes } from 'http-status-codes'

const app = express()

app.get('/', (_req, res) => {
    res.status(StatusCodes.OK).send('Apendendo node com express')
})

export default app