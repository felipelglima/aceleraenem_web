import { useId } from "react"

export function ControlledInput<TValue extends any>(props: {
  label: string
  name: string
  type: "text" | "email" | "date"
  placeholder: string
  value: TValue
  onInput: (value: TValue) => void
}) {
  const id = useId()

  const InputComponent = (
    <input
      type={props.type}
      id={id}
      name={props.name}
      placeholder={props.placeholder}
      className="w-full rounded border border-zinc-300 bg-transparent text-zinc-700"
      value={props.value as string}
      onChange={(e) => props.onInput(e.currentTarget.value as TValue)}
    />
  )

  return props.label ? (
    <label htmlFor={id} className="flex w-full flex-col gap-1">
      {props.label}
      {InputComponent}
    </label>
  ) : (
    InputComponent
  )
}
export const Input = (props: {
  label?: string
  name: string
  type: "text" | "password" | "email" | "date"
  placeholder: string
}) => {
  const id = useId()

  const InputComponent = (
    <input
      type={props.type}
      id={id}
      name={props.name}
      placeholder={props.placeholder}
      className="w-full rounded border border-zinc-300 bg-transparent text-zinc-700"
    />
  )

  return props.label ? (
    <label htmlFor={id} className="flex w-full flex-col gap-1">
      {props.label}
      {InputComponent}
    </label>
  ) : (
    InputComponent
  )
}
