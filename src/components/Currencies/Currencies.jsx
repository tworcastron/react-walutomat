import { useState } from "react"
import Currency from "./Currency/Currency"
import Modal from "../UI/Modal/Modal"
import FormInput from "../UI/FormInput/FormInput"
import CurrencyForm from "./CurrencyForm/CurrencyForm"

export default function Currencies() {
  // Wszystkie waluty
  const [currencies, setCurrencies] = useState([
    { id: 1, name: 'Dolar', symbol: 'USD', rate: '3.6' }
  ])

  // Dodawanie
  const [amount, setAmount] = useState(1)
  const [showAddModal, setShowAddModal] = useState(false)

  const addCurrency = (values) => {
    const newCurrency = {
      id: Math.random(),
      name: values.name,
      symbol: values.symbol,
      rate: values.rate,
      // ...values,
    }

    setCurrencies([...currencies, newCurrency])
    setShowAddModal(false)
  }

  // Usuwanie
  const deleteCurrency = (id) => {
    const updatedCurrencies = currencies.filter(c => c.id !== id)
    setCurrencies(updatedCurrencies)
  }

  // Edycja
  const [editId, setEditId] = useState(null)

  const editCurrency = (id, values) => {
    const index = currencies.findIndex(c => c.id === id)

    if (index !== -1) {
      const copy = structuredClone(currencies)
      copy[index] = { ...copy[index], ...values }

      setCurrencies(copy)
      setEditId(null)
    }
  }

  return (
    <div>
      <h1>Waluty</h1>

      <FormInput
        label="Wpisz kwotę PLN do przeliczenia"
        type="number"
        value={amount}
        onChange={val => setAmount(val)}
      />

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

      <button 
        className="btn btn-secondary"
        onClick={() => setShowAddModal(true)}
      >Dodaj walutę</button>

      {/* modale */}
      <Modal
        isOpen={!!editId} 
        title="Edytuj walutę" 
        onClose={() => setEditId(null)}
      >
        <CurrencyForm
          onSave={values => editCurrency(editId, values)}
          item={currencies.find(c => c.id === editId)}
        />
      </Modal>

      <Modal
        isOpen={showAddModal} 
        title="Dodaj walutę" 
        onClose={() => setShowAddModal(false)}
      >
        <CurrencyForm onSave={values => addCurrency(values)} />
      </Modal>

    </div>
  )
}