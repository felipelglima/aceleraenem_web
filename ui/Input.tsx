export function ControlledInput<TValue extends any>(props: {
  name: string
  type: "text" | "email" | "date"
  placeholder: string
  value: TValue
  onInput: (value: TValue) => void
}) {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      className="w-full rounded border border-zinc-300 bg-transparent text-zinc-700"
      value={props.value as string}
      onChange={(event) => props.onInput(event.target.value as TValue)}
    />
  )
}
export const Input = (props: {
  name: string
  type: "text" | "email" | "date"
  placeholder: string
}) => {
  return (
    <input
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      className="w-full rounded border border-zinc-300 bg-transparent text-zinc-700"
    />
  )
}
