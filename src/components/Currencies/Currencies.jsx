import Currency from "./Currency/Currency"

export default function Currencies() {
  const currencies = [1,2]

  return (
    <div>
      {currencies.map(x => (
        <Currency key={x} />
      ))}
    </div>
  )
}