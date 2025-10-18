import { useState } from "react"
import Currency from "./Currency/Currency"

export default function Currencies() {
  // Wszystkie waluty
  const [currencies, setCurrencies] = useState([
    { id: 1, name: 'Dolar', symbol: 'USD', rate: '3.6' }
  ])

  // Dodawanie
  const [amount, setAmount] = useState(1)

  // Usuwanie
  const deleteCurrency = (id) => {
    const updatedCurrencies = currencies.filter(c => c.id !== id)
    setCurrencies(updatedCurrencies)
  }

  // Edycja
  const [editId, setEditId] = useState(null)

  return (
    <div>
      <h1>Waluty</h1>

      <div className="mb-3">
        <label htmlFor="" className="form-label">Wpisz kwotę PLN do przeliczenia</label>
        <input type="number" className="form-control" value={amount} onChange={e => setAmount(e.target.value)} />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Nazwa</th>
            <th>Symbol</th>
            <th>Kurs</th>
            <th>Kwota</th>
            <th className="text-end">Akcje</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map(currency => (
            <Currency
              key={currency.id}
              {...currency}
              amount={amount}
              onDelete={deleteCurrency}
              onEdit={setEditId}
            />
          ))}
        </tbody>
      </table>

      <button className="btn btn-secondary">Dodaj walutę</button>

      {/* modale */}
        {!!editId && 'edytuj modal'}

    </div>
  )
}