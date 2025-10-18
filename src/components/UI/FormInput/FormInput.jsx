import { useId } from "react"

export default function FormInput(props) {
  const { label, type, value, onChange, disabled } = props
  const inputId = useId()

  return (
    <div className="mb-3">
      <label htmlFor={inputId} className="form-label">{label}</label>
      <input
        id={inputId}
        type={type}
        className="form-control" 
        value={value}
        onChange={e => onChange(e.target.value)}
        disabled={disabled}
      />
    </div>
  )
}