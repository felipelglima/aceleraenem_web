"use client"

import { useCallback, useState } from "react"
import { useFormState } from "react-dom"

import { createEnrollment, State } from "./actions"

import { useEffect, useMemo } from "react"

import { DateField } from "@/components/DateField"
import { Divider } from "@/components/Divider"
import { SubmitButton } from "@/components/SubmitButton"
import { TextField } from "@/components/TextField"

import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

import { Checkbox } from "@/ui/components/checkbox"
import Link from "next/link"
import { useDebounce } from "use-debounce"
import { Address, emptyAddress, getAddressByCep } from "./components"

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

    current.setFullYear(current.getFullYear() - 4000)

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

      <FormRow>
        <TextField
          label="E-mail"
          name="student-email"
          placeholder="Seu melhor e-mail"
          type="email"
          error={errors?.email}
        />
        <TextField
          label="Necessidades / Deficiências (opcional)"
          name="student-disability"
          placeholder="Digite quais deficiências a professora deve ficar atenta"
          error={errors?.disability}
        />
      </FormRow>

      <Divider />

      <FormRow>
        <TextField
          label="CPF"
          name="student-cpf"
          placeholder="Apenas os números"
          error={errors?.cpf}
        />

        <TextField
          label="Celular"
          name="student-phone"
          placeholder="Apenas os números"
          error={errors?.phone}
        />
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
          placeholder="Apenas os números"
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
          placeholder="Apenas os números"
          error={errors?.["responsible-cpf"]}
        />

        <TextField
          label="Celular"
          name="responsible-phone"
          placeholder="Apenas os números"
          error={errors?.["responsible-phone"]}
        />
      </FormRow>

      <h4 className="text-xl font-semibold text-zinc-800">
        Endereço Residencial
      </h4>

      <TextField
        label="CEP"
        placeholder="Apenas os números"
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

const initialState: State = {
  errors: null,
}

export function Form({ slug }: { slug: string }) {
  const [ageType, setAgeType] = useState<"minor" | "adult">("minor")
  const [responsibleEnabled, setResponsibleEnabled] = useState(false)

  const actionWithClassSlug = createEnrollment.bind(null, {
    classSlug: slug,
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

      <Label className="shrink-1 flex w-full items-center gap-2">
        <Checkbox name="terms" className="size-5" />

        <span>
          Ao se matrícular você concorda com os{" "}
          <Link target="_blank" href="/termos-de-uso" className="text-sky-500">
            Termos de Uso
          </Link>
          ,{" "}
          <Link
            target="_blank"
            href="/politica-de-privacidade"
            className="text-sky-500"
          >
            Política de Privacidade
          </Link>{" "}
          e{" "}
          <Link
            target="_blank"
            href="/contrato-de-compra"
            className="text-sky-500"
          >
            Contrato de Compra
          </Link>
        </span>
      </Label>

      {state.errors?.general && (
        <p className="text-red-500">{state.errors?.general}</p>
      )}

      <SubmitButton />
    </form>
  )
}
