const getRate = (symbol) => {
  return new Promise((resolve, reject) => {
    fetch(`https://open.er-api.com/v6/latest/${symbol}`)
      .then(res => res.json())
      .then(res => {
        if (res.result === 'error') {
          throw new Error('Ups.. coś poszło nie tak')
        }

        resolve(res.rates.PLN)
      })
      .catch(er => {
        reject(er)
      })
  })
}

export default {
  getRate,
}