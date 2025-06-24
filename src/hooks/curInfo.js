import {useEffect, useState} from 'react'

function curInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() =>{
        fetch(`https://v6.exchangerate-api.com/v6/17bb5fa171a72514cde02a4c/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setData(res['conversion_rates']))
        console.log(data)
    }, [currency])
    
  return data
}

export default curInfo