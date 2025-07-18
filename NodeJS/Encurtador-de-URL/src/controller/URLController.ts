import { Request, Response } from 'express'
import shortId from 'shortid'
import { config } from '../config/Constants'
import { URLModel } from '../database/model/URL'

export class URLController {
	public async shorten(req: Request, response: Response): Promise<void> {
		const { originURL } = req.body
		const url = await URLModel.findOne({ originURL })

		//Verifica se já existe a URL para evitar duplicações
		if (url) {
			response.json(url)
			return
		}

		//Caso contrário, cria a URL
		const hash = shortId.generate()
		const shortURL = `${config.API_URL}/${hash}`
		const newURL = await URLModel.create({ hash, shortURL, originURL }) //Cria a nova URL encurtada
		response.json(newURL)
	}

	public async redirect(req: Request, response: Response): Promise<void> {
		const { hash } = req.params
		const url = await URLModel.findOne({ hash })

		if (url) {
			response.redirect(url.originURL)
			return
		}

		response.status(400).json({ error: 'URL not found' })
	}

	//Método adicionado para retornar as urls encurtadas salvas do Banco de Dados
	public async getAll(req: Request, response: Response): Promise<void> {
		try {
			const urls = await URLModel.find()
			response.json(urls)
		} catch (error) {
			response.status(500).json({ error: 'Failed to fetch URLs' })
		}
	}

	//Importante realizar mais testes
	public async update(req: Request, res: Response): Promise<void> {
		const { hash } = req.params
		const { originURL } = req.body

		try {
			const updated = await URLModel.findOneAndUpdate(
				{ hash },
				{ originURL },
				{ new: true }
			)

			if (!updated) {
				res.status(404).json({ error: 'URL not found' })
				return
			}
			res.json(updated)
		} catch (error) {
			res.status(500).json({ error: 'Failed to update URL' })
		}
	}

	//Precisa realizar mais testes
	public async delete(req: Request, res: Response): Promise<void> {
		try {
			const { hash } = req.params
			const deleted = await URLModel.findOneAndDelete({ hash })
			if (!deleted) {
				res.status(404).json({ error: 'URL not found' })
				return
			}
			res.status(200).json({ message: 'URL deleted successfully' })
		} catch (error) {
			res.status(500).json({ error: 'Failed to delete URL' })
		}
	}

}
