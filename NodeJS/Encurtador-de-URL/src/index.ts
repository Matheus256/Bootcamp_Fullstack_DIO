import express from 'express'
import { URLController } from './controller/URLController'
import { MongoConnection } from './database/MongoConnection'

const api = express()
api.use(express.json())

const database = new MongoConnection()
database.connect()

const urlController = new URLController()
api.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.redirect)

//Rotas adicionadas
// Listar todas as URLs
api.get('/urls', urlController.getAll)

// Atualiza a URL
api.put('/urls/update:hash', urlController.update)

// Deleta a URL
api.delete('/urls/delete:hash', urlController.delete)

api.listen(8080, () => console.log('Express listening'))
