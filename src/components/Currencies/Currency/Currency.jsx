export default function Currency(props) {
  const { id, name, symbol, rate, amount, onEdit, onDelete } = props

  return (
    <tr>
      <td>{name}</td>
      <td>{symbol}</td>
      <td>{rate}</td>
      <td>{parseFloat(amount / rate).toFixed(2)} {symbol}</td>
      <td className="text-end">
        <button className="btn btn-warning m-1" onClick={() => onEdit(id)}>Edytuj</button>
        <button className="btn btn-danger m-1" onClick={() => onDelete(id)}>Usuń</button>
      </td>
    </tr>
  )
}