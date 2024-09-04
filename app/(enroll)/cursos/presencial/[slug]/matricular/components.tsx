"use client"

import consola from "consola"

export function Callout({
  icon,
  content,
}: {
  icon: React.JSX.Element
  content: string
}) {
  return (
    <div className="flex items-center gap-2 rounded bg-sky-100 p-2 text-black">
      {icon}
      {content}
    </div>
  )
}

export const emptyAddress: Address = {
  street: "",
  neighborhood: "",
  city: "",
  state: "",
  number: "",
  complement: "",
}

export type Address = {
  street: string
  neighborhood: string
  city: string
  state: string
  number: string
  complement: string
}

type ViaCepResponse = {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
}

export async function getAddressByCep(cep: string): Promise<Address> {
  if (cep.length < 8) {
    return emptyAddress
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json`)

    if (!response.ok) {
      throw new Error("Request to Viacep failed.")
    }

    const data = (await response.json()) as ViaCepResponse

    return {
      street: data.logradouro,
      neighborhood: data.bairro,
      city: data.localidade,
      state: data.uf,
      number: "",
      complement: "",
    }
  } catch (error) {
    consola.error("Failed to call viacep API", (error as Error).message)
    return emptyAddress
  }
}
