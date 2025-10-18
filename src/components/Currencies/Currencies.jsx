import Currency from "./Currency/Currency"

export default function Currencies() {
  const currencies = [1,2]

  return (
    <div>
      <h1>Waluty</h1>

      <div className="mb-3">
        <label htmlFor="" className="form-label">Wpisz kwotę PLN do przeliczenia</label>
        <input type="number" className="form-control" />
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
          {currencies.map(x => (
            <Currency key={x} />
          ))}
        </tbody>
      </table>

      <button className="btn btn-secondary">Dodaj walutę</button>
      
    </div>
  )
}