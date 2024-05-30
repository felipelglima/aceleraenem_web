export const API_URL = process.env.API_URL

export type Address = {
  cep: string
  state: string
  city: string
  neighborhood: string
  street: string
  number: string
}

export type Class = {
  id: string
  name: string
  size: number
  startsAt: string
  slug: string
  price: number
}

export type StudentProps = {
  name: string
  email: string
  cpf: string
  phone: string

  address: Address

  birthDate: Date
}

export type Student = StudentProps & {
  id: string

  createdAt: Date
}
