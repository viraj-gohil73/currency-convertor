import { useState } from 'react'
import './App.css'
import Inputbox from './components/Inputbox'
import curInfo from './hooks/curInfo'
function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  const currencyInfo = curInfo(from)

  const options = Object.keys(currencyInfo)
  const swap = () => {
    let temp = from
    setFrom(to)
    setTo(temp)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-red-400'  style={{
      backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
  }}>
      <h1 className='text-[30px] mb-7 px-8 font-medium text-[#2563eb] bg-[#f3f4f6] p-2 rounded-xl' >Currency Convertor</h1>
      <div className='w-sm h-[300px] rounded-md flex flex-col items-center justify-center' style={{backgroundColor:"rgb(255,255,255,0.6)"}}>
        <form onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }} >
          
          <Inputbox 
        label={"From"} 
        amount={amount} 
        currencyOptions={options}
        selectCurrency={from}
        onAmountChange={(amount) => setAmount(amount)}
        onCurrencyChange={(currency) => setFrom(currency)}
        />
 <button
                            type="button"
                            className="absolute cursor-pointer hover:bg-blue-500 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-[#3b82f6] text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            SWAP
                        </button>
<Inputbox 
        label={"To"} 
        amount={convertedAmount} 
        currencyOptions={options}
        selectCurrency={to}
        onAmountChange={(amount) => setAmount(amount)}
        onCurrencyChange={(currency) => setTo(currency)}
        className='my-4'
        amountDisable
        />      <button type="submit" className="w-full cursor-pointer bg-[#2563eb] hover:bg-blue-500 text-[#111827] px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                    </form>
      </div>

    </div>
  )
}

export default App
