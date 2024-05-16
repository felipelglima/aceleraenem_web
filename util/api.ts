export const API_URL = process.env.API_URL

export type Class = {
  id: string
  name: string
  slug: string
  size: number
  startsAt: string
}

export type Student = {
  id: string

  name: string
  email: string
  cpf: string
  phone: string

  address: {
    cep: string
  }

  birthDate: Date

  createdAt: Date
}
