"use client"

import { useCallback, useEffect, useMemo, useState } from "react"

import { DateField } from "@/components/DateField"
import { Divider } from "@/components/Divider"
import { SubmitButton } from "@/components/SubmitButton"
import { TextField } from "@/components/TextField"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

import consola from "consola"
import { useFormState } from "react-dom"
import { useDebounce } from "use-debounce"

const emptyAddress: Address = {
  street: "",
  neighborhood: "",
  city: "",
  state: "",
  number: "",
  complement: "",
}

function FormSection({ children }: React.PropsWithChildren) {
  return <div className="flex w-full flex-col gap-6">{children}</div>
}

function FormRow({ children }: React.PropsWithChildren) {
  return (
    <div className="flex w-full flex-col gap-6 md:flex-row">{children}</div>
  )
}

type Errors = Record<string, string[] | null> | null

function StudentInfo({
  errors,
  onAgeTypeChange,
}: {
  errors: Errors
  onAgeTypeChange: (type: "minor" | "adult") => void
}) {
  const minDate = useMemo(() => {
    const current = new Date()

    current.setFullYear(current.getFullYear() - 40)

    return current
  }, [])

  const maxDate = useMemo(() => {
    const current = new Date()

    current.setFullYear(current.getFullYear() - 15)

    return current
  }, [])

  const handleAgeChange = useCallback(
    (date: string) => {
      const [day, month, year] = date.replaceAll("_", "").split("/")

      if (day.length === 2 && month.length === 2 && year.length === 4) {
        const age =
          new Date().getFullYear() -
          new Date(`${month}-${day}-${year}`).getFullYear()

        onAgeTypeChange(age < 18 ? "minor" : "adult")
      }
    },
    [onAgeTypeChange]
  )

  return (
    <FormSection>
      <h4 className="text-xl font-semibold text-zinc-800">
        Informações do Aluno
      </h4>

      <FormRow>
        <TextField label="Nome" name="student-name" error={errors?.name} />
        <TextField
          label="Sobrenome"
          name="student-lastname"
          error={errors?.lastname}
        />
      </FormRow>

      <div className="max-w-[350px]">
        <TextField
          label="E-mail"
          name="student-email"
          placeholder="Seu melhor e-mail"
          type="email"
          error={errors?.email}
        />
      </div>

      <Divider />

      <FormRow>
        <TextField label="CPF" name="student-cpf" error={errors?.cpf} />
        <TextField label="Celular" name="student-phone" error={errors?.phone} />
      </FormRow>

      <div className="max-w-[350px]">
        <DateField
          label="Data de Nascimento"
          placeholder="DD/MM/AAAA"
          name="student-birthdate"
          min={minDate}
          max={maxDate}
          onChange={handleAgeChange}
          error={errors?.birthdate}
        />
      </div>

      <Divider />

      <FormRow>
        <TextField
          label="Senha"
          name="student-password"
          error={errors?.password}
          type="password"
        />
        <TextField
          label="Confirme a Senha"
          name="student-password-confirm"
          error={errors?.["password-confirm"]}
          type="password"
        />
      </FormRow>
    </FormSection>
  )
}

function AddressInfo({ errors }: { errors: Errors }) {
  const [cep, setCep] = useState("")
  const [debouncedCep] = useDebounce(cep, 500)
  const [loading, setLoading] = useState(false)

  const [address, setAddress] = useState<Address>(emptyAddress)

  useEffect(() => {
    setLoading(true)
    setAddress(emptyAddress)

    getAddressByCep(debouncedCep).then((address) => {
      setAddress(address)
      setLoading(false)
    })
  }, [debouncedCep])

  const handleAddressField = useCallback((field: keyof Address) => {
    return (value: string) =>
      setAddress((add) => ({
        ...add,
        [field]: value,
      }))
  }, [])

  const defaultPlaceholder = loading ? "Carregando..." : undefined

  return (
    <FormSection>
      <h4 className="text-xl font-semibold text-zinc-800">
        Endereço Residencial
      </h4>

      <FormRow>
        <TextField
          label="CEP"
          name="address-cep"
          value={cep}
          onChange={setCep}
          error={errors?.cep}
        />

        <div className="w-[120px] shrink-0">
          <TextField
            label="UF"
            name="address-state"
            value={address.state}
            placeholder={defaultPlaceholder}
            onChange={handleAddressField("state")}
            className={loading ? "pointer-events-none opacity-50" : ""}
            error={errors?.state}
          />
        </div>

        <TextField
          label="Cidade"
          name="address-city"
          value={address.city}
          placeholder={defaultPlaceholder}
          onChange={handleAddressField("city")}
          className={loading ? "pointer-events-none opacity-50" : ""}
          error={errors?.city}
        />
      </FormRow>

      <FormRow>
        <TextField
          label="Rua/Avenida"
          name="address-street"
          value={address.street}
          placeholder={defaultPlaceholder}
          onChange={handleAddressField("street")}
          className={loading ? "pointer-events-none opacity-50" : ""}
          error={errors?.street}
        />

        <TextField
          label="Bairro"
          name="address-neighborhood"
          value={address.neighborhood}
          placeholder={defaultPlaceholder}
          onChange={handleAddressField("neighborhood")}
          className={loading ? "pointer-events-none opacity-50" : ""}
          error={errors?.neighborhood}
        />
      </FormRow>

      <FormRow>
        <div className="w-[200px]">
          <TextField
            label="Número"
            name="address-number"
            value={address.number}
            onChange={handleAddressField("number")}
            error={errors?.number}
          />
        </div>

        <TextField
          label="Complemento"
          name="address-complement"
          value={address.complement}
          onChange={handleAddressField("complement")}
          error={errors?.complement}
        />
      </FormRow>
    </FormSection>
  )
}

function ResponsibleInfo({ errors }: { errors: Errors }) {
  const [cep, setCep] = useState("")
  const [debouncedCep] = useDebounce(cep, 500)

  const [address, setAddress] = useState<Address>(emptyAddress)

  useEffect(() => {
    getAddressByCep(debouncedCep).then(setAddress)
  }, [debouncedCep])

  const handleAddressField = useCallback((field: keyof Address) => {
    return (value: string) =>
      setAddress((add) => ({
        ...add,
        [field]: value,
      }))
  }, [])

  return (
    <FormSection>
      <h4 className="text-xl font-semibold text-zinc-800">
        Informações do Responsável
      </h4>

      <FormRow>
        <TextField
          label="Nome"
          name="responsible-name"
          error={errors?.["responsible-name"]}
        />

        <TextField
          label="Sobrenome"
          name="responsible-lastname"
          error={errors?.["responsible-lastname"]}
        />
      </FormRow>

      <FormRow>
        <TextField
          label="E-mail"
          name="responsible-email"
          placeholder="Seu melhor e-mail"
          type="email"
          error={errors?.["responsible-email"]}
        />

        <TextField
          label="Relacionamento/Parentesco"
          name="responsible-relationship"
          error={errors?.["responsible-relationship"]}
        />
      </FormRow>

      <Divider />

      <FormRow>
        <TextField
          label="CPF"
          name="responsible-cpf"
          error={errors?.["responsible-cpf"]}
        />

        <TextField
          label="Celular"
          name="responsible-phone"
          error={errors?.["responsible-phone"]}
        />
      </FormRow>

      <h4 className="text-xl font-semibold text-zinc-800">
        Endereço Residencial
      </h4>

      <TextField
        label="CEP"
        name="responsible-address-cep"
        value={cep}
        onChange={setCep}
        error={errors?.["responsible-address-cep"]}
      />

      <FormRow>
        <div className="w-[120px]">
          <TextField
            label="UF"
            name="responsible-address-state"
            value={address.state}
            onChange={handleAddressField("state")}
            error={errors?.["responsible-address-state"]}
          />
        </div>

        <TextField
          label="Cidade"
          name="responsible-address-city"
          value={address.city}
          onChange={handleAddressField("city")}
          error={errors?.["responsible-address-city"]}
        />
      </FormRow>

      <FormRow>
        <TextField
          label="Rua/Avenida"
          name="responsible-address-street"
          value={address.street}
          onChange={handleAddressField("street")}
          error={errors?.["responsible-address-street"]}
        />

        <TextField
          label="Bairro"
          name="responsible-address-neighborhood"
          value={address.neighborhood}
          onChange={handleAddressField("neighborhood")}
          error={errors?.["responsible-address-neighborhood"]}
        />
      </FormRow>

      <FormRow>
        <div className="w-[200px]">
          <TextField
            label="Número"
            name="responsible-address-number"
            value={address.number}
            onChange={handleAddressField("number")}
            error={errors?.["responsible-address-number"]}
          />
        </div>

        <TextField
          label="Complemento"
          name="responsible-address-complement"
          value={address.complement}
          onChange={handleAddressField("complement")}
          error={errors?.["responsible-address-complement"]}
        />
      </FormRow>
    </FormSection>
  )
}

import { createEnrollment, State } from "./actions"

const initialState: State = {
  errors: null,
}

export default function Page({ params }: { params: { slug: string } }) {
  const [ageType, setAgeType] = useState<"minor" | "adult">("minor")
  const [responsibleEnabled, setResponsibleEnabled] = useState(false)

  const actionWithClassSlug = createEnrollment.bind(null, {
    classSlug: params.slug,
    responsibleEnabled,
  })
  const [state, action] = useFormState(actionWithClassSlug, initialState)

  const handleAgeType = useCallback((type: "minor" | "adult") => {
    setAgeType(type)
    setResponsibleEnabled(type === "minor")
  }, [])

  return (
    <form action={action} className="flex w-full flex-col gap-24">
      <StudentInfo errors={state.errors} onAgeTypeChange={handleAgeType} />

      <AddressInfo errors={state.errors} />

      <Label
        htmlFor="responsible-switch"
        className="flex items-center gap-2 text-lg font-normal"
      >
        <Switch
          id="responsible-switch"
          disabled={ageType === "minor"}
          checked={!responsibleEnabled}
          onCheckedChange={() => setResponsibleEnabled((b) => !b)}
        />
        Eu sou meu responsavel financeiro
      </Label>

      {responsibleEnabled && <ResponsibleInfo errors={state.errors} />}

      <p>
        Ao se matrícular você concorda com os{" "}
        <a className="text-sky-500" href="">
          Termos de Uso
        </a>
        ,{" "}
        <a className="text-sky-500" href="">
          Política de Privacidade
        </a>{" "}
        e{" "}
        <a className="text-sky-500" href="">
          Contrato de Assinatura
        </a>
      </p>

      {state.errors?.general && (
        <p className="text-red-500">{state.errors?.general}</p>
      )}

      <SubmitButton />
    </form>
  )
}

type Address = {
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

async function getAddressByCep(cep: string): Promise<Address> {
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
