import { useState } from "react"
import FormInput from "../../UI/FormInput/FormInput"

export default function CurrencyForm({ onSave, item }) {
  const [name, setName] = useState(item?.name ?? '')
  const [symbol, setSymbol] = useState(item?.symbol ?? '')
  const [rate, setRate] = useState(item?.rate ?? '')

  const submit = (e) => {
    e.preventDefault()

    onSave({
      name,
      symbol,
      rate,
    })
  }

  const isValid = name && symbol && rate

  return (
    <form onSubmit={submit}>
      <FormInput
        label="Nazwa"
        value={name}
        onChange={setName}
      />
      <FormInput
        label="Symbol"
        value={symbol}
        onChange={setSymbol}
        disabled={!name}
      />
      <FormInput
        label="Kurs"
        value={rate}
        onChange={setRate}
        disabled={!symbol}
      />

      <button className="btn btn-success" disabled={!isValid}>Gotowe</button>
    </form>
  )
}