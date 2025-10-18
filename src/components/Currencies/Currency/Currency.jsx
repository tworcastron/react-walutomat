export default function Currency(props) {
  const { id, name, symbol, rate, amount } = props

  return (
    <tr>
      <td>{name}</td>
      <td>{symbol}</td>
      <td>{rate}</td>
      <td>{parseFloat(amount / rate).toFixed(2)} {symbol}</td>
      <td className="text-end">
        <button className="btn btn-warning m-1">Edytuj</button>
        <button className="btn btn-danger m-1">Usuń</button>
      </td>
    </tr>
  )
}