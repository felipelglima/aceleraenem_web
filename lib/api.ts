export const COMMUNICATION_TOKEN = process.env.COMMUNICATION_TOKEN
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
  weekday: string | null
  classhour: number | null
  slug: string
  price: number
  type: "online" | "classroom"
}

export type StudentProps = {
  name: string
  email: string
  cpf: string
  phone: string
  disability?: string

  address: Address

  birthDate: Date
}

export type Student = StudentProps & {
  id: string

  createdAt: Date
}

export type Responsible = {
  name: string
  email: string
  cpf: string
  phone: string
  address: Address
  relationship: string
  studentId: string
}

export function stagingHeaders():
  | {}
  | { "x-vercel-protection-bypass": string } {
  if (!process.env.VERCEL_ENV || !process.env.VERCEL_AUTOMATION_BYPASS_SECRET) {
    return {}
  }

  if (process.env.VERCEL_ENV === "production") {
    return {}
  }

  return {
    "x-vercel-protection-bypass": process.env.VERCEL_AUTOMATION_BYPASS_SECRET!,
  }
}
