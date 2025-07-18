import { prop, Typegoose } from '@hasezoey/typegoose'

//Criação da classe URL que conterá os atributos hash, originURL e shortURL
export class URL extends Typegoose {
	@prop({ required: true })
	hash: string

	@prop({ required: true })
	originURL: string

	@prop({ required: true })
	shortURL: string
}

export const URLModel = new URL().getModelForClass(URL)
