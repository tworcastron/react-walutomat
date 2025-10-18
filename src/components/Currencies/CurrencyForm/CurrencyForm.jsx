import { useState } from "react"
import FormInput from "../../UI/FormInput/FormInput"
import RateTracker from "../RateTracker/RateTracker"

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
        validationRules={{ required: true }}
      />
      <FormInput
        label="Symbol"
        value={symbol}
        onChange={setSymbol}
        disabled={!name}
        validationRules={{ required: true, maxLength: 3 }}
      />
      <div style={{ display: 'flex', gap: 10 }}>
        <FormInput
          label="Kurs"
          value={rate}
          type="number"
          onChange={setRate}
          disabled={!symbol}
          validationRules={{ required: true }}
        />
        <RateTracker symbol={symbol} onFetch={setRate} />
      </div>

      <button className="btn btn-success" disabled={!isValid}>Gotowe</button>
    </form>
  )
}