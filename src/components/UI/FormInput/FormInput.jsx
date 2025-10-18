import { useId } from "react"

const rules = {
  required: (value, isRequired) => (isRequired && !value)
    ? 'To pole jest wymagane'
    : '',
  maxLength: (value, max) => (String(value).length > max)
    ? `Maksymalna długość to ${max} znaków`
    : ''
}

export default function FormInput(props) {
  const { label, type, value, onChange, disabled, validationRules = [] } = props
  const inputId = useId()

  let isValid = true
  let errorMessage = ''

  // walidacja
  for (const rule in validationRules) {
    const opts = validationRules[rule]
    const error = rules[rule]?.(value, opts)

    if (error) {
      errorMessage = error
      isValid = false
      break
    }
  }

  return (
    <div className="mb-3">
      <label htmlFor={inputId} className="form-label">{label}</label>
      <input
        id={inputId}
        type={type}
        className={`form-control ${!isValid ? 'is-invalid' : ''}`}
        value={value}
        onChange={e => onChange(e.target.value)}
        disabled={disabled}
      />
      {!isValid && <div className="invalid-feedback">{errorMessage}</div>}
    </div>
  )
}