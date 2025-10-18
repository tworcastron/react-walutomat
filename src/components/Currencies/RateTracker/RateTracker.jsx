import { useEffect, useState } from "react"
import apiCurrency from "../../../apiCurrency"

export default function RateTracker({ onFetch, symbol }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchRate = async () => {
    setLoading(true)
    try {
      const rate = await apiCurrency.getRate(symbol)
      onFetch(rate)
    } catch (er) {
      setError(er.message)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (error) setTimeout(() => setError(''), 3000)
  }, [error])

  return (
    <div style={{ marginTop: 34 }}>
      <button
        className="btn btn-sm btn-secondary"
        onClick={() => fetchRate()}
        type="button"
      >
        {loading ? 'Pobieranie...' : 'Pobierz kurs'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}