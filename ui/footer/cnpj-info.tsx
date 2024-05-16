"use client"

import { useState } from "react"
import { CNPJAPIResponse } from "../Footer"

export const CNPJInfo = (props: CNPJAPIResponse) => {
  const [details, setDetails] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center gap-6 lg:gap-16">
      <button
        onClick={() => {
          setDetails((bool) => !bool)
        }}
        className="flex items-center gap-2"
      >
        <p className="self-center text-zinc-600">
          ACELERA ENEM CURSOS PREPARATORIOS LTDA | CNPJ: 51.119.706/0001-08
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {details && (
        <div className="flex flex-col gap-2 rounded border border-zinc-300 p-6">
          <p>Nome Fantasia: {props.name}</p>
          <p>CNAE: {props.activity}</p>
          <p>
            Data de Início:{" "}
            {props.startDate.toLocaleDateString("pt-BR", {
              dateStyle: "short",
            })}
          </p>
          <p className="flex items-center gap-2">
            Status*: {props.status}{" "}
            {props.status.toLowerCase() === "ativa" && (
              <div className="size-3 rounded-full bg-green-500" />
            )}
          </p>
          <p className="text-sm italic text-zinc-600">
            *Status atualizado automaticamente pela Receita Federal
          </p>
        </div>
      )}
    </div>
  )
}
